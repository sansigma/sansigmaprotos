// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var trade_model_pb = require('./trade_model_pb.js');

function serialize_sansigmaprotos_GetTradesRequest(arg) {
  if (!(arg instanceof trade_model_pb.GetTradesRequest)) {
    throw new Error('Expected argument of type sansigmaprotos.GetTradesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sansigmaprotos_GetTradesRequest(buffer_arg) {
  return trade_model_pb.GetTradesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sansigmaprotos_GetTradesResponse(arg) {
  if (!(arg instanceof trade_model_pb.GetTradesResponse)) {
    throw new Error('Expected argument of type sansigmaprotos.GetTradesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sansigmaprotos_GetTradesResponse(buffer_arg) {
  return trade_model_pb.GetTradesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sansigmaprotos_Market(arg) {
  if (!(arg instanceof trade_model_pb.Market)) {
    throw new Error('Expected argument of type sansigmaprotos.Market');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sansigmaprotos_Market(buffer_arg) {
  return trade_model_pb.Market.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_sansigmaprotos_Trade(arg) {
  if (!(arg instanceof trade_model_pb.Trade)) {
    throw new Error('Expected argument of type sansigmaprotos.Trade');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sansigmaprotos_Trade(buffer_arg) {
  return trade_model_pb.Trade.deserializeBinary(new Uint8Array(buffer_arg));
}


// API from Hub server to Pashiri
//
var OrderBookStreamApiService = exports.OrderBookStreamApiService = {
  getOrderBook: {
    path: '/sansigmaprotos.OrderBookStreamApi/GetOrderBook',
    requestStream: false,
    responseStream: true,
    requestType: trade_model_pb.Market,
    responseType: trade_model_pb.OrderBook,
    requestSerialize: serialize_sansigmaprotos_Market,
    requestDeserialize: deserialize_sansigmaprotos_Market,
    responseSerialize: serialize_sansigmaprotos_OrderBook,
    responseDeserialize: deserialize_sansigmaprotos_OrderBook,
  },
};

exports.OrderBookStreamApiClient = grpc.makeGenericClientConstructor(OrderBookStreamApiService);
var TradeStreamApiService = exports.TradeStreamApiService = {
  getTrade: {
    path: '/sansigmaprotos.TradeStreamApi/GetTrade',
    requestStream: false,
    responseStream: true,
    requestType: trade_model_pb.Market,
    responseType: trade_model_pb.Trade,
    requestSerialize: serialize_sansigmaprotos_Market,
    requestDeserialize: deserialize_sansigmaprotos_Market,
    responseSerialize: serialize_sansigmaprotos_Trade,
    responseDeserialize: deserialize_sansigmaprotos_Trade,
  },
};

exports.TradeStreamApiClient = grpc.makeGenericClientConstructor(TradeStreamApiService);
// API from End user to Hub server
//
var HubApiService = exports.HubApiService = {
  getOrderBooks: {
    path: '/sansigmaprotos.HubApi/GetOrderBooks',
    requestStream: false,
    responseStream: true,
    requestType: trade_model_pb.OrderBooksRequest,
    responseType: trade_model_pb.OrderBooks,
    requestSerialize: serialize_sansigmaprotos_OrderBooksRequest,
    requestDeserialize: deserialize_sansigmaprotos_OrderBooksRequest,
    responseSerialize: serialize_sansigmaprotos_OrderBooks,
    responseDeserialize: deserialize_sansigmaprotos_OrderBooks,
  },
  getTrades: {
    path: '/sansigmaprotos.HubApi/GetTrades',
    requestStream: false,
    responseStream: true,
    requestType: trade_model_pb.GetTradesRequest,
    responseType: trade_model_pb.GetTradesResponse,
    requestSerialize: serialize_sansigmaprotos_GetTradesRequest,
    requestDeserialize: deserialize_sansigmaprotos_GetTradesRequest,
    responseSerialize: serialize_sansigmaprotos_GetTradesResponse,
    responseDeserialize: deserialize_sansigmaprotos_GetTradesResponse,
  },
};

exports.HubApiClient = grpc.makeGenericClientConstructor(HubApiService);