/**
 * @fileoverview gRPC-Web generated client stub for sansigmaprotos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';
import {
  AssetPair,
  BidAsk,
  OrderBook,
  OrderBooks,
  OrderBooksRequest} from './trade_model_pb';

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
    (request: AssetPair) => {
      return request.serializeBinary();
    },
    OrderBook.deserializeBinary
  );

  getOrderBook(
    request: AssetPair,
    metadata: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/sansigmaprotos.OrderBookStreamApi/GetOrderBook',
      request,
      metadata,
      this.methodInfoGetOrderBook);
  }

}

export class OrderBooksApiClient {
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
        '/sansigmaprotos.OrderBooksApi/GetOrderBooks',
      request,
      metadata,
      this.methodInfoGetOrderBooks);
  }

}

