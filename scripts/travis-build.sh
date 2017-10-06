#!/bin/bash
APP_ENV=""
case "$TRAVIS_BRANCH" in
  "develop")
    APP_ENV="dev"
    ;;
  "master")
    APP_ENV="prod"
    ;;    
esac

npm install
npm rebuild node-sass
ng build --env=$APP_ENV
