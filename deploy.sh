#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd ./build

# create new subdirectory and copy index.html into subdirectory root
mkdir ./projects/
mkdir ./projects/markdown-editor/
cp ./index.html ./projects/markdown-editor/index.html

cd -