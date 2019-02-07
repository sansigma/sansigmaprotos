// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sansigmaprotos_type_market_pb = require('../../../sansigmaprotos/type/market_pb.js');
var sansigmaprotos_type_orderbook_pb = require('../../../sansigmaprotos/type/orderbook_pb.js');

function serialize_ssigma_type_Market(arg) {
  if (!(arg instanceof sansigmaprotos_type_market_pb.Market)) {
    throw new Error('Expected argument of type ssigma.type.Market');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ssigma_type_Market(buffer_arg) {
  return sansigmaprotos_type_market_pb.Market.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssigma_type_OrderBook(arg) {
  if (!(arg instanceof sansigmaprotos_type_orderbook_pb.OrderBook)) {
    throw new Error('Expected argument of type ssigma.type.OrderBook');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ssigma_type_OrderBook(buffer_arg) {
  return sansigmaprotos_type_orderbook_pb.OrderBook.deserializeBinary(new Uint8Array(buffer_arg));
}


var PashiriRestServiceV1Service = exports.PashiriRestServiceV1Service = {
  getOrderBook: {
    path: '/ssigma.pashirirest.v1.PashiriRestServiceV1/GetOrderBook',
    requestStream: false,
    responseStream: true,
    requestType: sansigmaprotos_type_market_pb.Market,
    responseType: sansigmaprotos_type_orderbook_pb.OrderBook,
    requestSerialize: serialize_ssigma_type_Market,
    requestDeserialize: deserialize_ssigma_type_Market,
    responseSerialize: serialize_ssigma_type_OrderBook,
    responseDeserialize: deserialize_ssigma_type_OrderBook,
  },
};

exports.PashiriRestServiceV1Client = grpc.makeGenericClientConstructor(PashiriRestServiceV1Service);
