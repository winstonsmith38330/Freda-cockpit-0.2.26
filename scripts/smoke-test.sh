#!/usr/bin/env bash
set -e
cd "$(dirname "$0")/../server"
npm run check
node -e "console.log('Smoke check OK')"
