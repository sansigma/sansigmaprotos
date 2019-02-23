#!/usr/bin/env bash
#typescript コード生成用 スクリプト

set -eu

export PATH="$PATH:$(npm bin)"

PROTO_SRC=./
PROTO_DEST=./gen/pb-typescript

mkdir -p ${PROTO_DEST}
mkdir -p ./google/api
for f in annotations http; do
    curl -L -o ./google/api/${f}.proto https://raw.githubusercontent.com/grpc-ecosystem/grpc-gateway/master/third_party/googleapis/google/api/${f}.proto;
done

for file in `find ssigmaapi -name '*.proto'`; do
    grpc_tools_node_protoc \
      --js_out=import_style=commonjs,binary:${PROTO_DEST} \
      --grpc_out=${PROTO_DEST} \
      --plugin=protoc-gen-grpc=$(which grpc_tools_node_protoc_plugin) \
      -I ${PROTO_SRC} \
      ${file}

    grpc_tools_node_protoc \
      --plugin=protoc-gen-ts=$(which protoc-gen-ts) \
      --ts_out=service=true:${PROTO_DEST} \
      -I ${PROTO_SRC} \
      ${file}
done
