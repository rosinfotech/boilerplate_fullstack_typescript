#!/bin/bash

source ./.makefile/kill_services.sh

rm -rf android
rm -rf ios
rm -rf node_modules
rm -rf package-lock.json
rm -rf src/apps/backend/.build.backend
rm -rf src/apps/backend/build
rm -rf src/apps/backend/dist
rm -rf src/apps/backend/node_modules
rm -rf src/apps/frontend/.build.frontend
rm -rf src/apps/frontend/.build.mobile
rm -rf src/apps/frontend/.next
rm -rf src/apps/frontend/android
rm -rf src/apps/frontend/build
rm -rf src/apps/frontend/dist
rm -rf src/apps/frontend/ios
rm -rf src/apps/frontend/node_modules
