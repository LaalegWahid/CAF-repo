#!/usr/bin/env bash
#
# Push the whole CAF_astro workspace (accountant/ + social_declaration/ + anything
# else at the repo root) to https://github.com/LaalegWahid/CAF-repo.git
#
# It does NOT touch the existing "origin" remote (SLTVerse/CAF-ASTRO); it adds a
# second remote called "caf-repo" and pushes the current commit there as `main`.
#
# Usage:
#   ./push-to-caf-repo.sh "commit message"      # commit pending changes, then push
#   ./push-to-caf-repo.sh                       # push whatever is already committed
#   FORCE=1 ./push-to-caf-repo.sh               # overwrite the target branch (e.g. it
#                                               # was created with a README on GitHub)
#
# Auth: you must have push access to LaalegWahid/CAF-repo. Git will use your
# credential helper / GitHub login. If you use the GitHub CLI: `gh auth login` first.

set -euo pipefail

TARGET_URL="https://github.com/LaalegWahid/CAF-repo.git"
REMOTE_NAME="caf-repo"
TARGET_BRANCH="main"

# --- locate the workspace -----------------------------------------------------
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

if [ ! -d .git ]; then
  echo ">> No git repo here yet - running 'git init'"
  git init
  git branch -M "$TARGET_BRANCH"
fi

# --- safety: no embedded sub-repos (they would be pushed as empty gitlinks) ---
mapfile -t NESTED < <(find . -mindepth 2 -type d -name .git -not -path './.git/*')
if [ "${#NESTED[@]}" -gt 0 ]; then
  echo "!! Found nested git repos that would break the push:"
  printf '     %s\n' "${NESTED[@]}"
  echo "   Remove them (keeps the files, drops their separate history) with:"
  for n in "${NESTED[@]}"; do echo "     rm -rf \"$n\""; done
  exit 1
fi

# --- stage + commit if a message was given or there are changes --------------
MSG="${1:-}"
if [ -n "$(git status --porcelain)" ]; then
  if [ -z "$MSG" ]; then
    MSG="Sync CAF_astro workspace $(date +%Y-%m-%d)"
  fi
  echo ">> Committing local changes: $MSG"
  git add -A
  git commit -m "$MSG"
else
  echo ">> Working tree clean - nothing new to commit"
fi

# --- point the caf-repo remote at the target URL ----------------------------
if git remote get-url "$REMOTE_NAME" >/dev/null 2>&1; then
  git remote set-url "$REMOTE_NAME" "$TARGET_URL"
else
  git remote add "$REMOTE_NAME" "$TARGET_URL"
fi
echo ">> Remote '$REMOTE_NAME' -> $(git remote get-url "$REMOTE_NAME")"

# --- push the current commit to <target-branch> on caf-repo -----------------
PUSH_ARGS=(--set-upstream "$REMOTE_NAME" "HEAD:$TARGET_BRANCH")
if [ "${FORCE:-0}" = "1" ]; then
  PUSH_ARGS+=(--force)
  echo ">> FORCE push"
fi

echo ">> git push ${PUSH_ARGS[*]}"
git push "${PUSH_ARGS[@]}"

echo
echo "Done. View it at: https://github.com/LaalegWahid/CAF-repo/tree/$TARGET_BRANCH"
