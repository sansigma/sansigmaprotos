/**
 * @fileoverview gRPC-Web generated client stub for sansigmaprotos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';
import {
  BidAsk,
  GetTradesRequest,
  GetTradesResponse,
  Market,
  OrderBook,
  OrderBooks,
  OrderBooksRequest,
  Trade,
  TradesWithMarket} from './trade_model_pb';

export class OrderBookStreamApiClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetOrderBook = new grpcWeb.AbstractClientBase.MethodInfo(
    OrderBook,
    (request: Market) => {
      return request.serializeBinary();
    },
    OrderBook.deserializeBinary
  );

  getOrderBook(
    request: Market,
    metadata: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/sansigmaprotos.OrderBookStreamApi/GetOrderBook',
      request,
      metadata,
      this.methodInfoGetOrderBook);
  }

}

export class TradeStreamApiClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetTrade = new grpcWeb.AbstractClientBase.MethodInfo(
    Trade,
    (request: Market) => {
      return request.serializeBinary();
    },
    Trade.deserializeBinary
  );

  getTrade(
    request: Market,
    metadata: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/sansigmaprotos.TradeStreamApi/GetTrade',
      request,
      metadata,
      this.methodInfoGetTrade);
  }

}

export class HubApiClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetOrderBooks = new grpcWeb.AbstractClientBase.MethodInfo(
    OrderBooks,
    (request: OrderBooksRequest) => {
      return request.serializeBinary();
    },
    OrderBooks.deserializeBinary
  );

  getOrderBooks(
    request: OrderBooksRequest,
    metadata: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/sansigmaprotos.HubApi/GetOrderBooks',
      request,
      metadata,
      this.methodInfoGetOrderBooks);
  }

  methodInfoGetTrades = new grpcWeb.AbstractClientBase.MethodInfo(
    GetTradesResponse,
    (request: GetTradesRequest) => {
      return request.serializeBinary();
    },
    GetTradesResponse.deserializeBinary
  );

  getTrades(
    request: GetTradesRequest,
    metadata: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/sansigmaprotos.HubApi/GetTrades',
      request,
      metadata,
      this.methodInfoGetTrades);
  }

}

