// package: sansigmaprotos
// file: trade_model.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as trade_model_pb from "./trade_model_pb";

interface IOrderBookStreamApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOrderBook: IOrderBookStreamApiService_IGetOrderBook;
}

interface IOrderBookStreamApiService_IGetOrderBook extends grpc.MethodDefinition<trade_model_pb.AssetPair, trade_model_pb.OrderBook> {
    path: string; // "/sansigmaprotos.OrderBookStreamApi/GetOrderBook"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<trade_model_pb.AssetPair>;
    requestDeserialize: grpc.deserialize<trade_model_pb.AssetPair>;
    responseSerialize: grpc.serialize<trade_model_pb.OrderBook>;
    responseDeserialize: grpc.deserialize<trade_model_pb.OrderBook>;
}

export const OrderBookStreamApiService: IOrderBookStreamApiService;

export interface IOrderBookStreamApiServer {
    getOrderBook: grpc.handleServerStreamingCall<trade_model_pb.AssetPair, trade_model_pb.OrderBook>;
}

export interface IOrderBookStreamApiClient {
    getOrderBook(request: trade_model_pb.AssetPair, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.OrderBook>;
    getOrderBook(request: trade_model_pb.AssetPair, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.OrderBook>;
}

export class OrderBookStreamApiClient extends grpc.Client implements IOrderBookStreamApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getOrderBook(request: trade_model_pb.AssetPair, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.OrderBook>;
    public getOrderBook(request: trade_model_pb.AssetPair, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.OrderBook>;
}

interface IOrderBooksApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOrderBooks: IOrderBooksApiService_IGetOrderBooks;
}

interface IOrderBooksApiService_IGetOrderBooks extends grpc.MethodDefinition<trade_model_pb.OrderBooksRequest, trade_model_pb.OrderBooks> {
    path: string; // "/sansigmaprotos.OrderBooksApi/GetOrderBooks"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<trade_model_pb.OrderBooksRequest>;
    requestDeserialize: grpc.deserialize<trade_model_pb.OrderBooksRequest>;
    responseSerialize: grpc.serialize<trade_model_pb.OrderBooks>;
    responseDeserialize: grpc.deserialize<trade_model_pb.OrderBooks>;
}

export const OrderBooksApiService: IOrderBooksApiService;

export interface IOrderBooksApiServer {
    getOrderBooks: grpc.handleServerStreamingCall<trade_model_pb.OrderBooksRequest, trade_model_pb.OrderBooks>;
}

export interface IOrderBooksApiClient {
    getOrderBooks(request: trade_model_pb.OrderBooksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.OrderBooks>;
    getOrderBooks(request: trade_model_pb.OrderBooksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.OrderBooks>;
}

export class OrderBooksApiClient extends grpc.Client implements IOrderBooksApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getOrderBooks(request: trade_model_pb.OrderBooksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.OrderBooks>;
    public getOrderBooks(request: trade_model_pb.OrderBooksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.OrderBooks>;
}
