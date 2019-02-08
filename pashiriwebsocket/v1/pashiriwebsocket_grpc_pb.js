// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var ssigmaapi_type_market_pb = require('../../../ssigmaapi/type/market_pb.js');
var ssigmaapi_type_trade_pb = require('../../../ssigmaapi/type/trade_pb.js');

function serialize_ssigmaapi_type_Market(arg) {
  if (!(arg instanceof ssigmaapi_type_market_pb.Market)) {
    throw new Error('Expected argument of type ssigmaapi.type.Market');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ssigmaapi_type_Market(buffer_arg) {
  return ssigmaapi_type_market_pb.Market.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssigmaapi_type_Trades(arg) {
  if (!(arg instanceof ssigmaapi_type_trade_pb.Trades)) {
    throw new Error('Expected argument of type ssigmaapi.type.Trades');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ssigmaapi_type_Trades(buffer_arg) {
  return ssigmaapi_type_trade_pb.Trades.deserializeBinary(new Uint8Array(buffer_arg));
}


var PashiriWebsocketServiceV1Service = exports.PashiriWebsocketServiceV1Service = {
  getTrades: {
    path: '/ssigmaapi.pashiriwebsocket.v1.PashiriWebsocketServiceV1/GetTrades',
    requestStream: false,
    responseStream: true,
    requestType: ssigmaapi_type_market_pb.Market,
    responseType: ssigmaapi_type_trade_pb.Trades,
    requestSerialize: serialize_ssigmaapi_type_Market,
    requestDeserialize: deserialize_ssigmaapi_type_Market,
    responseSerialize: serialize_ssigmaapi_type_Trades,
    responseDeserialize: deserialize_ssigmaapi_type_Trades,
  },
};

exports.PashiriWebsocketServiceV1Client = grpc.makeGenericClientConstructor(PashiriWebsocketServiceV1Service);
