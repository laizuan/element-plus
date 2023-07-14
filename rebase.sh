#! /bin/bash
git checkout dev
git fetch upstream
git branch

read -p "需要合并的ElementPlus版本号：" version
git rebase $version

echo "合并完成，请确定无误后合并到main分支，并打包发布到仓库"
