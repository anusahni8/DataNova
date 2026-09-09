#!/usr/bin/env bash
set -euo pipefail
REMOTE_URL="${1:?Usage: ./scripts/push-to-github.sh https://github.com/YOUR_USERNAME/datanova-platform.git}"
BRANCH="main"

if ! git config user.name >/dev/null 2>&1; then
  git config user.name "DataNova"
fi
if ! git config user.email >/dev/null 2>&1; then
  git config user.email "datanova@users.noreply.github.com"
fi

git init
git branch -M "$BRANCH"
git add .
git commit -m "Initial DataNova platform bundle" || echo "No new changes to commit."
git remote remove origin 2>/dev/null || true
git remote add origin "$REMOTE_URL"
git push -u origin "$BRANCH"
echo "DataNova platform pushed to $REMOTE_URL"
