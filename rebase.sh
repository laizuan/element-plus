#! /bin/bash
git fetch upstream

read -p "需要合并的ElementPlus版本号：" version
git checkout tags/$version -b v$version
git checkout dev
git core.quotepath=false -c log.showSignature=false merge v$version
git branch -d v$version
echo "合并完成，请确定无误后合并到main分支，并打包发布到仓库"
