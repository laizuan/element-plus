#! /bin/bash

pnpm clean

tar -zcvf element-plus.tar.gz ./packages/
md5=($(md5sum element-plus.tar.gz))
rm -rf ./element-plus.tar.gz

read -p "请输入要发布的版本号 x.x.x-stable.x 格式  " input

export TAG_VERSION=$input
export GIT_HEAD=$md5
sh ./scripts/publish.sh


cd dist/element-plus


cat > ./.npmrc << EOF
registry=https://registry.npmjs.org/
//registry.npmjs.org/:always-auth=true
//registry.npmjs.org/:_authToken=
EOF

cat > ./.npmignore << EOF
.npmrc
EOF

npm publish --access public

rm -rf ./.npmrc
rm -rf ./.npmignore

echo "✅ Publish completed"
