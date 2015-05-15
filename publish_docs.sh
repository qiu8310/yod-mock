#!/usr/bin/env sh

npm run page

if [[ ! -d ./.git ]]; then
  git init
  git remote add origin git@github.com:qiu8310/yod-mock.git
  git co -b gh-pages
else
  git co gh-pages -q
fi


cp -r gh-pages/* .

git add . -A
git commit -m "publish gh-pages"
git push origin gh-pages