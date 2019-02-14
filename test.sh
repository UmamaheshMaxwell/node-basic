#!/bin/bash

set -eu

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
export fly_target=${fly_target:-cons}
echo "Concourse API target ${fly_target}"
echo "Tutorial $(basename $DIR)"
export branchName=$(git branch | grep \* | cut -d ' ' -f2)
cat > ./ci/feature-version.yml << EOF
branch-version: ${branchName}
EOF

pushd "$DIR"
  fly -t ${fly_target} set-pipeline -p node-pipeline -c ci/pipeline.yml  --load-vars-from=ci/feature-version.yml -n
  fly -t ${fly_target} unpause-pipeline -p node-pipeline
  fly -t ${fly_target} trigger-job -w -j node-pipeline/job-run-master
  fly -t ${fly_target} trigger-job -w -j node-pipeline/job-run-develop
  fly -t ${fly_target} trigger-job -w -j node-pipeline/job-run-feature
popd