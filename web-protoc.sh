#!/usr/bin/env bash
#typescript コード生成用 スクリプト

set -eu

PROTO_SRC=./
PROTO_DEST=./gen/pb-web

mkdir -p ${PROTO_DEST}

echo "`find ${CIRCLE_PROJECT_REPONAME} google -name '*.proto'`"

for file in `find ${CIRCLE_PROJECT_REPONAME} google -name '*.proto'`; do
    protoc \
      --plugin="protoc-gen-ts=$(which protoc-gen-ts)" \
      --js_out="import_style=commonjs,binary:${PROTO_DEST}" \
      --ts_out=service=true:"${PROTO_DEST}" \
      ${file}
done
