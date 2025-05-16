#!/bin/bash

# --- CONFIG ---
GITHUB_USERNAME="DaxGigandet"
REPO_NAME="DaxGigandet.github.io"
COMMIT_MSG="Initial site deploy"
BRANCH="main"
GITHUB_TOKEN="${GITHUB_TOKEN:?You must set the GITHUB_TOKEN env variable}"

# --- Check for git repo ---
if [ ! -d ".git" ]; then
  git init
  git branch -M $BRANCH
fi

# --- Add remote if it doesn't exist ---
git remote | grep origin > /dev/null
if [ $? -ne 0 ]; then
  git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git
fi

# --- Add all files ---
git add .

# --- Commit ---
git commit -m "$COMMIT_MSG"

# --- Push ---
git push -u origin $BRANCH

# --- Trigger GitHub Pages deployment via API ---
curl -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/$GITHUB_USERNAME/$REPO_NAME/pages/builds

echo "Deployment triggered. Your site should be live shortly."