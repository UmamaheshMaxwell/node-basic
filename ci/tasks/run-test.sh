#!/bin/sh
set -e

export NODEPATH=$(pwd)/nodepath:$(pwd)/nodepath/src/github.com/UmamaheshMaxwell/node-basic/nodedeps/_workspace
cd nodepath/github.com/UmamaheshMaxwell/node-basic/

npm install
#npm start
npm run test