#!/usr/bin/env bash
set -e

printf 'Node.js version: '
node --version
printf 'npm version: '
npm --version

npm ci || npm install
npm run build
npm test
npm start
