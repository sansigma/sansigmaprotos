// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sansigmaprotos_markethub_v1_markethub_pb = require('../../../sansigmaprotos/markethub/v1/markethub_pb.js');
var sansigmaprotos_type_market_pb = require('../../../sansigmaprotos/type/market_pb.js');
var sansigmaprotos_type_trade_pb = require('../../../sansigmaprotos/type/trade_pb.js');
var sansigmaprotos_type_orderbook_pb = require('../../../sansigmaprotos/type/orderbook_pb.js');

function serialize_ssigma_markethub_v1_GetOrderBooksRequest(arg) {
  if (!(arg instanceof sansigmaprotos_markethub_v1_markethub_pb.GetOrderBooksRequest)) {
    throw new Error('Expected argument of type ssigma.markethub.v1.GetOrderBooksRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ssigma_markethub_v1_GetOrderBooksRequest(buffer_arg) {
  return sansigmaprotos_markethub_v1_markethub_pb.GetOrderBooksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssigma_markethub_v1_GetOrderBooksResponse(arg) {
  if (!(arg instanceof sansigmaprotos_markethub_v1_markethub_pb.GetOrderBooksResponse)) {
    throw new Error('Expected argument of type ssigma.markethub.v1.GetOrderBooksResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ssigma_markethub_v1_GetOrderBooksResponse(buffer_arg) {
  return sansigmaprotos_markethub_v1_markethub_pb.GetOrderBooksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssigma_markethub_v1_GetTradesAndOrderBooksRequest(arg) {
  if (!(arg instanceof sansigmaprotos_markethub_v1_markethub_pb.GetTradesAndOrderBooksRequest)) {
    throw new Error('Expected argument of type ssigma.markethub.v1.GetTradesAndOrderBooksRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ssigma_markethub_v1_GetTradesAndOrderBooksRequest(buffer_arg) {
  return sansigmaprotos_markethub_v1_markethub_pb.GetTradesAndOrderBooksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssigma_markethub_v1_GetTradesAndOrderBooksResponse(arg) {
  if (!(arg instanceof sansigmaprotos_markethub_v1_markethub_pb.GetTradesAndOrderBooksResponse)) {
    throw new Error('Expected argument of type ssigma.markethub.v1.GetTradesAndOrderBooksResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ssigma_markethub_v1_GetTradesAndOrderBooksResponse(buffer_arg) {
  return sansigmaprotos_markethub_v1_markethub_pb.GetTradesAndOrderBooksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssigma_markethub_v1_GetTradesRequest(arg) {
  if (!(arg instanceof sansigmaprotos_markethub_v1_markethub_pb.GetTradesRequest)) {
    throw new Error('Expected argument of type ssigma.markethub.v1.GetTradesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ssigma_markethub_v1_GetTradesRequest(buffer_arg) {
  return sansigmaprotos_markethub_v1_markethub_pb.GetTradesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssigma_markethub_v1_GetTradesResponse(arg) {
  if (!(arg instanceof sansigmaprotos_markethub_v1_markethub_pb.GetTradesResponse)) {
    throw new Error('Expected argument of type ssigma.markethub.v1.GetTradesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ssigma_markethub_v1_GetTradesResponse(buffer_arg) {
  return sansigmaprotos_markethub_v1_markethub_pb.GetTradesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MarketHubServiceV1Service = exports.MarketHubServiceV1Service = {
  getTrades: {
    path: '/ssigma.markethub.v1.MarketHubServiceV1/GetTrades',
    requestStream: false,
    responseStream: true,
    requestType: sansigmaprotos_markethub_v1_markethub_pb.GetTradesRequest,
    responseType: sansigmaprotos_markethub_v1_markethub_pb.GetTradesResponse,
    requestSerialize: serialize_ssigma_markethub_v1_GetTradesRequest,
    requestDeserialize: deserialize_ssigma_markethub_v1_GetTradesRequest,
    responseSerialize: serialize_ssigma_markethub_v1_GetTradesResponse,
    responseDeserialize: deserialize_ssigma_markethub_v1_GetTradesResponse,
  },
  getOrderBooks: {
    path: '/ssigma.markethub.v1.MarketHubServiceV1/GetOrderBooks',
    requestStream: false,
    responseStream: true,
    requestType: sansigmaprotos_markethub_v1_markethub_pb.GetOrderBooksRequest,
    responseType: sansigmaprotos_markethub_v1_markethub_pb.GetOrderBooksResponse,
    requestSerialize: serialize_ssigma_markethub_v1_GetOrderBooksRequest,
    requestDeserialize: deserialize_ssigma_markethub_v1_GetOrderBooksRequest,
    responseSerialize: serialize_ssigma_markethub_v1_GetOrderBooksResponse,
    responseDeserialize: deserialize_ssigma_markethub_v1_GetOrderBooksResponse,
  },
  getTradesAndOrderBooks: {
    path: '/ssigma.markethub.v1.MarketHubServiceV1/GetTradesAndOrderBooks',
    requestStream: false,
    responseStream: true,
    requestType: sansigmaprotos_markethub_v1_markethub_pb.GetTradesAndOrderBooksRequest,
    responseType: sansigmaprotos_markethub_v1_markethub_pb.GetTradesAndOrderBooksResponse,
    requestSerialize: serialize_ssigma_markethub_v1_GetTradesAndOrderBooksRequest,
    requestDeserialize: deserialize_ssigma_markethub_v1_GetTradesAndOrderBooksRequest,
    responseSerialize: serialize_ssigma_markethub_v1_GetTradesAndOrderBooksResponse,
    responseDeserialize: deserialize_ssigma_markethub_v1_GetTradesAndOrderBooksResponse,
  },
};

exports.MarketHubServiceV1Client = grpc.makeGenericClientConstructor(MarketHubServiceV1Service);
