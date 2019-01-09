// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var trade_model_pb = require('./trade_model_pb.js');

function serialize_sansigmaprotos_AssetPair(arg) {
  if (!(arg instanceof trade_model_pb.AssetPair)) {
    throw new Error('Expected argument of type sansigmaprotos.AssetPair');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sansigmaprotos_AssetPair(buffer_arg) {
  return trade_model_pb.AssetPair.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sansigmaprotos_OrderBook(arg) {
  if (!(arg instanceof trade_model_pb.OrderBook)) {
    throw new Error('Expected argument of type sansigmaprotos.OrderBook');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sansigmaprotos_OrderBook(buffer_arg) {
  return trade_model_pb.OrderBook.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sansigmaprotos_OrderBooks(arg) {
  if (!(arg instanceof trade_model_pb.OrderBooks)) {
    throw new Error('Expected argument of type sansigmaprotos.OrderBooks');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sansigmaprotos_OrderBooks(buffer_arg) {
  return trade_model_pb.OrderBooks.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sansigmaprotos_OrderBooksRequest(arg) {
  if (!(arg instanceof trade_model_pb.OrderBooksRequest)) {
    throw new Error('Expected argument of type sansigmaprotos.OrderBooksRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sansigmaprotos_OrderBooksRequest(buffer_arg) {
  return trade_model_pb.OrderBooksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrderBookStreamApiService = exports.OrderBookStreamApiService = {
  getOrderBook: {
    path: '/sansigmaprotos.OrderBookStreamApi/GetOrderBook',
    requestStream: false,
    responseStream: true,
    requestType: trade_model_pb.AssetPair,
    responseType: trade_model_pb.OrderBook,
    requestSerialize: serialize_sansigmaprotos_AssetPair,
    requestDeserialize: deserialize_sansigmaprotos_AssetPair,
    responseSerialize: serialize_sansigmaprotos_OrderBook,
    responseDeserialize: deserialize_sansigmaprotos_OrderBook,
  },
};

exports.OrderBookStreamApiClient = grpc.makeGenericClientConstructor(OrderBookStreamApiService);
var OrderBooksApiService = exports.OrderBooksApiService = {
  getOrderBooks: {
    path: '/sansigmaprotos.OrderBooksApi/GetOrderBooks',
    requestStream: false,
    responseStream: true,
    requestType: trade_model_pb.OrderBooksRequest,
    responseType: trade_model_pb.OrderBooks,
    requestSerialize: serialize_sansigmaprotos_OrderBooksRequest,
    requestDeserialize: deserialize_sansigmaprotos_OrderBooksRequest,
    responseSerialize: serialize_sansigmaprotos_OrderBooks,
    responseDeserialize: deserialize_sansigmaprotos_OrderBooks,
  },
};

exports.OrderBooksApiClient = grpc.makeGenericClientConstructor(OrderBooksApiService);
