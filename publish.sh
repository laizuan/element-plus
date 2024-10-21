#! /bin/bash
set -e
pnpm clean
md5=($(git rev-parse HEAD))

read -p "请输入要发布的版本号 x.x.x-stable.x 格式  " version

export TAG_VERSION=$version
export GIT_HEAD=$md5


pnpm i --frozen-lockfile
pnpm update:version

pnpm build


authToken=$(cat ./.npmtoken)

cd dist/element-plus

cat > ./.npmrc << EOF
registry=https://registry.npmjs.org/
//registry.npmjs.org/:always-auth=true
//registry.npmjs.org/:_authToken=${authToken}
EOF

cat > ./.npmignore << EOF
.npmrc
EOF

npm publish  --access public

rm -rf ./.npmrc
rm -rf ./.npmignore

echo "✅ Publish completed"

git reset --hard HEAD

git tag v$version
git push origin v$version
git push origin main
