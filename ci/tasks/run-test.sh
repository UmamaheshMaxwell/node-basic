#!/bin/sh
cd "$(dirname "$0")"
set -e

export NODEPATH=$(pwd)/nodepath:$(pwd)/nodepath/src/github.com/UmamaheshMaxwell/node-basic/nodedeps/_workspace
cd nodepath/src/github.com/UmamaheshMaxwell/node-basic/

npm run test