## sansigma-protos

### execute local (debug用)

require: [CircleCI CLI](https://circleci.com/docs/2.0/local-cli/#installation)

```
$ circleci local execute -v (pwd):/grpc-gen -e CIRCLE_PROJECT_REPONAME=ssigmaapi
```

### generate api_descriptor file

Cloud Endpoints 構築に必要な `api_config.pb` を生成する

**todo** : CIによる自動生成

#### Market Hub

```bash
$ docker run --rm -v $(pwd):$(pwd) -w $(pwd) znly/protoc \
    --include_imports \
    --include_source_info \
    -I. \
    --descriptor_set_out=endpoints_files/market_hub_api_descriptor.pb \
    ssigmaapi/markethub/v1/markethub.proto
```

