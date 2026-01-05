#!/bin/bash

source ./.makefile/kill_services.sh

rm -rf android
rm -rf ios
rm -rf node_modules
rm -rf package-lock.json
rm -rf src/apps/backend/.build.backend
rm -rf src/apps/backend/build
rm -rf src/apps/backend/dist
rm -rf src/apps/backend/services/gateway/.build
rm -rf src/apps/backend/services/gateway/node_modules
rm -rf src/apps/backend/services/service-1/.build
rm -rf src/apps/backend/services/service-1/dist
rm -rf src/apps/backend/services/service-1/node_modules
rm -rf src/apps/backend/services/service-2/.build
rm -rf src/apps/backend/services/service-2/dist
rm -rf src/apps/backend/services/service-2/node_modules
rm -rf src/apps/backend/services/service-3/.build
rm -rf src/apps/backend/services/service-3/dist
rm -rf src/apps/backend/services/service-3/node_modules
rm -rf src/apps/frontend/.build.frontend
rm -rf src/apps/frontend/.build.mobile
rm -rf src/apps/frontend/.next
rm -rf src/apps/frontend/android
rm -rf src/apps/frontend/build
rm -rf src/apps/frontend/dist
rm -rf src/apps/frontend/ios
rm -rf src/apps/frontend/node_modules
rm -rf src/modules/node_modules
