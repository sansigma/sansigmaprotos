// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var ssigmaapi_type_market_pb = require('../../../ssigmaapi/type/market_pb.js');
var ssigmaapi_type_orderbook_pb = require('../../../ssigmaapi/type/orderbook_pb.js');

function serialize_ssigmaapi_type_Market(arg) {
  if (!(arg instanceof ssigmaapi_type_market_pb.Market)) {
    throw new Error('Expected argument of type ssigmaapi.type.Market');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ssigmaapi_type_Market(buffer_arg) {
  return ssigmaapi_type_market_pb.Market.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssigmaapi_type_OrderBook(arg) {
  if (!(arg instanceof ssigmaapi_type_orderbook_pb.OrderBook)) {
    throw new Error('Expected argument of type ssigmaapi.type.OrderBook');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ssigmaapi_type_OrderBook(buffer_arg) {
  return ssigmaapi_type_orderbook_pb.OrderBook.deserializeBinary(new Uint8Array(buffer_arg));
}


var PashiriRestServiceV1Service = exports.PashiriRestServiceV1Service = {
  getOrderBook: {
    path: '/ssigmaapi.pashirirest.v1.PashiriRestServiceV1/GetOrderBook',
    requestStream: false,
    responseStream: true,
    requestType: ssigmaapi_type_market_pb.Market,
    responseType: ssigmaapi_type_orderbook_pb.OrderBook,
    requestSerialize: serialize_ssigmaapi_type_Market,
    requestDeserialize: deserialize_ssigmaapi_type_Market,
    responseSerialize: serialize_ssigmaapi_type_OrderBook,
    responseDeserialize: deserialize_ssigmaapi_type_OrderBook,
  },
};

exports.PashiriRestServiceV1Client = grpc.makeGenericClientConstructor(PashiriRestServiceV1Service);
