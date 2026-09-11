#!/bin/bash

set -e

echo "=== Git Push ==="

git add -A

if git diff --cached --quiet; then
    echo "No changes to commit."
else
    git commit -m "Update project"
    git push
fi

echo "=== Done ==="