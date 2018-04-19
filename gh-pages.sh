#!/usr/bin/env bash

stash() {
  git status --porcelain | grep "^." >/dev/null;
  if [ $? -eq 0 ]
  then
    if git stash save -u "Looking for unsaved changes";
    then
      echo "Stashed local uncommitted changes";
      stash=1;
    fi
  fi
}

unstash() {
  if [ $stash -eq 1 ]
  then
    git stash pop;
    echo "Popped stashed changes";
  else
    echo "No stashed stuff";
  fi
}

stash=0;

# Starting Script

git status

stash;

git checkout gh-pages || git checkout -b gh-pages

git merge master --no-ff --strategy-option theirs --no-edit --allow-unrelated-histories

npm run build

git add --force --all dist/

git commit --allow-empty -m "Updated gh-pages on $(date)"

git push origin `git subtree split --prefix dist gh-pages`:refs/heads/gh-pages --force

git checkout -

git branch -D gh-pages

unstash

echo "Github pages updated!"
