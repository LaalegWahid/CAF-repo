#!/usr/bin/env bash
#
# Install dependencies and run the CAF projects.
#
# Projects (each is independent, with its own lockfile):
#   caf                     Astro  - implantation-maroc.ma landing page      (npm)
#   social_declaration      Astro  - www.cabinet-caf.ma                      (pnpm)
#   accountant              Astro                                           (pnpm)
#   acquisition             Astro  - corporate.cabinet-caf.ma                (pnpm)
#   legal                   Astro  - audit.cabinet-caf.ma                    (pnpm)
#   creation-caf-prototype  Vite + React prototype                          (pnpm)
#
# Usage:
#   ./run.sh                          install everything, then start every dev server
#   ./run.sh install [project...]     install dependencies only
#   ./run.sh dev     [project...]     start dev servers (installs first if node_modules is missing)
#   ./run.sh build   [project...]     production build
#   ./run.sh preview [project...]     serve the production build
#
# With no project names, the command applies to all projects. Ctrl+C stops all servers.
# Requires Node >= 22.12. pnpm is used where a pnpm-lock.yaml exists (falls back to npm).

set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# project:port — each dev server gets its own port so they can run side by side.
PROJECTS=(
  "caf:4321"
  "social_declaration:4322"
  "accountant:4323"
  "acquisition:4324"
  "legal:4325"
  "creation-caf-prototype:5173"
)

COLORS=(31 32 33 34 35 36)

die()  { echo "error: $*" >&2; exit 1; }
info() { echo -e "\033[1m>> $*\033[0m"; }

port_of() {
  local entry
  for entry in "${PROJECTS[@]}"; do
    [[ "${entry%%:*}" == "$1" ]] && { echo "${entry##*:}"; return; }
  done
  return 1
}

check_node() {
  command -v node >/dev/null || die "Node.js is not installed (need >= 22.12)."
  local v major minor
  v="$(node -p 'process.versions.node')"
  IFS=. read -r major minor _ <<<"$v"
  if (( major < 22 || (major == 22 && minor < 12) )); then
    die "Node $v found, but >= 22.12 is required."
  fi
}

# Pick the package manager from the project's lockfile.
pm_of() {
  if [[ -f "$ROOT/$1/pnpm-lock.yaml" ]] && command -v pnpm >/dev/null; then
    echo pnpm
  elif [[ -f "$ROOT/$1/pnpm-lock.yaml" ]] && [[ ! -f "$ROOT/$1/package-lock.json" ]] && command -v corepack >/dev/null; then
    echo "corepack pnpm"
  else
    echo npm
  fi
}

# Run a package.json script, forwarding extra args with the right syntax per manager.
run_script() {
  local pm="$1" script="$2"; shift 2
  if [[ "$pm" == npm ]]; then
    npm run "$script" -- "$@"
  else
    $pm run "$script" "$@"
  fi
}

install_one() {
  local p="$1" pm
  pm="$(pm_of "$p")"
  info "[$p] installing with $pm"
  (cd "$ROOT/$p" && $pm install) || die "[$p] install failed"
}

build_one() {
  local p="$1" pm
  pm="$(pm_of "$p")"
  [[ -d "$ROOT/$p/node_modules" ]] || install_one "$p"
  info "[$p] building"
  (cd "$ROOT/$p" && run_script "$pm" build) || die "[$p] build failed"
}

# --- running several servers at once -----------------------------------------

PIDS=()

stop_all() {
  trap - INT TERM EXIT
  echo
  info "stopping servers"
  local pid winpid
  for pid in "${PIDS[@]}"; do
    # On Windows (Git Bash / MSYS) kill the whole native process tree, otherwise
    # node keeps running after the bash wrapper dies.
    if [[ -r "/proc/$pid/winpid" ]] && command -v taskkill >/dev/null; then
      winpid="$(cat "/proc/$pid/winpid")"
      taskkill //F //T //PID "$winpid" >/dev/null 2>&1
    fi
    kill "$pid" 2>/dev/null
  done
  wait 2>/dev/null
  exit 0
}

start_servers() {
  local mode="$1"; shift
  local i=0 p port pm color
  trap stop_all INT TERM EXIT

  for p in "$@"; do
    port="$(port_of "$p")"
    pm="$(pm_of "$p")"
    color="${COLORS[$(( i % ${#COLORS[@]} ))]}"
    i=$((i + 1))

    [[ -d "$ROOT/$p/node_modules" ]] || install_one "$p"
    [[ "$mode" == preview && ! -d "$ROOT/$p/dist" ]] && build_one "$p"

    info "[$p] $mode on http://localhost:$port"
    (
      cd "$ROOT/$p" && run_script "$pm" "$mode" --port "$port"
    ) > >(sed -u "s/^/\x1b[${color}m[$p]\x1b[0m /") 2>&1 &
    PIDS+=("$!")
  done

  echo
  info "running — press Ctrl+C to stop"
  for p in "$@"; do
    printf "   %-24s http://localhost:%s\n" "$p" "$(port_of "$p")"
  done
  echo
  wait
}

# --- main ---------------------------------------------------------------------

check_node

cmd="${1:-all}"
[[ $# -gt 0 ]] && shift

if [[ $# -gt 0 ]]; then
  selected=("$@")
  for p in "${selected[@]}"; do
    port_of "$p" >/dev/null || die "unknown project '$p'. Known: $(printf '%s ' "${PROJECTS[@]%%:*}")"
  done
else
  selected=("${PROJECTS[@]%%:*}")
fi

case "$cmd" in
  all)
    for p in "${selected[@]}"; do install_one "$p"; done
    start_servers dev "${selected[@]}"
    ;;
  install)
    for p in "${selected[@]}"; do install_one "$p"; done
    info "all dependencies installed"
    ;;
  dev|preview)
    start_servers "$cmd" "${selected[@]}"
    ;;
  build)
    for p in "${selected[@]}"; do build_one "$p"; done
    info "build finished"
    ;;
  -h|--help|help)
    sed -n '2,/^$/p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//'
    ;;
  *)
    die "unknown command '$cmd' (use: install | dev | build | preview | help)"
    ;;
esac
