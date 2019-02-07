// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sansigmaprotos_type_market_pb = require('../../../sansigmaprotos/type/market_pb.js');
var sansigmaprotos_type_trade_pb = require('../../../sansigmaprotos/type/trade_pb.js');

function serialize_ssigma_type_Market(arg) {
  if (!(arg instanceof sansigmaprotos_type_market_pb.Market)) {
    throw new Error('Expected argument of type ssigma.type.Market');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ssigma_type_Market(buffer_arg) {
  return sansigmaprotos_type_market_pb.Market.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssigma_type_Trades(arg) {
  if (!(arg instanceof sansigmaprotos_type_trade_pb.Trades)) {
    throw new Error('Expected argument of type ssigma.type.Trades');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ssigma_type_Trades(buffer_arg) {
  return sansigmaprotos_type_trade_pb.Trades.deserializeBinary(new Uint8Array(buffer_arg));
}


var PashiriWebsocketServiceV1Service = exports.PashiriWebsocketServiceV1Service = {
  getTrades: {
    path: '/ssigma.pashiriwebsocket.v1.PashiriWebsocketServiceV1/GetTrades',
    requestStream: false,
    responseStream: true,
    requestType: sansigmaprotos_type_market_pb.Market,
    responseType: sansigmaprotos_type_trade_pb.Trades,
    requestSerialize: serialize_ssigma_type_Market,
    requestDeserialize: deserialize_ssigma_type_Market,
    responseSerialize: serialize_ssigma_type_Trades,
    responseDeserialize: deserialize_ssigma_type_Trades,
  },
};

exports.PashiriWebsocketServiceV1Client = grpc.makeGenericClientConstructor(PashiriWebsocketServiceV1Service);
