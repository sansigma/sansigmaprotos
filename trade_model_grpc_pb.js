// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var trade_model_pb = require('./trade_model_pb.js');

function serialize_sansigmabuffers_AssetPair(arg) {
  if (!(arg instanceof trade_model_pb.AssetPair)) {
    throw new Error('Expected argument of type sansigmabuffers.AssetPair');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sansigmabuffers_AssetPair(buffer_arg) {
  return trade_model_pb.AssetPair.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sansigmabuffers_OrderBook(arg) {
  if (!(arg instanceof trade_model_pb.OrderBook)) {
    throw new Error('Expected argument of type sansigmabuffers.OrderBook');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sansigmabuffers_OrderBook(buffer_arg) {
  return trade_model_pb.OrderBook.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sansigmabuffers_OrderBooks(arg) {
  if (!(arg instanceof trade_model_pb.OrderBooks)) {
    throw new Error('Expected argument of type sansigmabuffers.OrderBooks');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sansigmabuffers_OrderBooks(buffer_arg) {
  return trade_model_pb.OrderBooks.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sansigmabuffers_OrderBooksRequest(arg) {
  if (!(arg instanceof trade_model_pb.OrderBooksRequest)) {
    throw new Error('Expected argument of type sansigmabuffers.OrderBooksRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sansigmabuffers_OrderBooksRequest(buffer_arg) {
  return trade_model_pb.OrderBooksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrderBookStreamApiService = exports.OrderBookStreamApiService = {
  getOrderBook: {
    path: '/sansigmabuffers.OrderBookStreamApi/GetOrderBook',
    requestStream: false,
    responseStream: true,
    requestType: trade_model_pb.AssetPair,
    responseType: trade_model_pb.OrderBook,
    requestSerialize: serialize_sansigmabuffers_AssetPair,
    requestDeserialize: deserialize_sansigmabuffers_AssetPair,
    responseSerialize: serialize_sansigmabuffers_OrderBook,
    responseDeserialize: deserialize_sansigmabuffers_OrderBook,
  },
};

exports.OrderBookStreamApiClient = grpc.makeGenericClientConstructor(OrderBookStreamApiService);
var OrderBooksApiService = exports.OrderBooksApiService = {
  getOrderBooks: {
    path: '/sansigmabuffers.OrderBooksApi/GetOrderBooks',
    requestStream: false,
    responseStream: true,
    requestType: trade_model_pb.OrderBooksRequest,
    responseType: trade_model_pb.OrderBooks,
    requestSerialize: serialize_sansigmabuffers_OrderBooksRequest,
    requestDeserialize: deserialize_sansigmabuffers_OrderBooksRequest,
    responseSerialize: serialize_sansigmabuffers_OrderBooks,
    responseDeserialize: deserialize_sansigmabuffers_OrderBooks,
  },
};

exports.OrderBooksApiClient = grpc.makeGenericClientConstructor(OrderBooksApiService);
