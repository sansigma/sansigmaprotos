// package: sansigmaprotos
// file: trade_model.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as trade_model_pb from "./trade_model_pb";

interface IOrderBookStreamApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOrderBook: IOrderBookStreamApiService_IGetOrderBook;
}

interface IOrderBookStreamApiService_IGetOrderBook extends grpc.MethodDefinition<trade_model_pb.Market, trade_model_pb.OrderBook> {
    path: string; // "/sansigmaprotos.OrderBookStreamApi/GetOrderBook"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<trade_model_pb.Market>;
    requestDeserialize: grpc.deserialize<trade_model_pb.Market>;
    responseSerialize: grpc.serialize<trade_model_pb.OrderBook>;
    responseDeserialize: grpc.deserialize<trade_model_pb.OrderBook>;
}

export const OrderBookStreamApiService: IOrderBookStreamApiService;

export interface IOrderBookStreamApiServer {
    getOrderBook: grpc.handleServerStreamingCall<trade_model_pb.Market, trade_model_pb.OrderBook>;
}

export interface IOrderBookStreamApiClient {
    getOrderBook(request: trade_model_pb.Market, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.OrderBook>;
    getOrderBook(request: trade_model_pb.Market, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.OrderBook>;
}

export class OrderBookStreamApiClient extends grpc.Client implements IOrderBookStreamApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getOrderBook(request: trade_model_pb.Market, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.OrderBook>;
    public getOrderBook(request: trade_model_pb.Market, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.OrderBook>;
}

interface ITradeStreamApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getTrade: ITradeStreamApiService_IGetTrade;
}

interface ITradeStreamApiService_IGetTrade extends grpc.MethodDefinition<trade_model_pb.Market, trade_model_pb.Trade> {
    path: string; // "/sansigmaprotos.TradeStreamApi/GetTrade"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<trade_model_pb.Market>;
    requestDeserialize: grpc.deserialize<trade_model_pb.Market>;
    responseSerialize: grpc.serialize<trade_model_pb.Trade>;
    responseDeserialize: grpc.deserialize<trade_model_pb.Trade>;
}

export const TradeStreamApiService: ITradeStreamApiService;

export interface ITradeStreamApiServer {
    getTrade: grpc.handleServerStreamingCall<trade_model_pb.Market, trade_model_pb.Trade>;
}

export interface ITradeStreamApiClient {
    getTrade(request: trade_model_pb.Market, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.Trade>;
    getTrade(request: trade_model_pb.Market, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.Trade>;
}

export class TradeStreamApiClient extends grpc.Client implements ITradeStreamApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getTrade(request: trade_model_pb.Market, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.Trade>;
    public getTrade(request: trade_model_pb.Market, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.Trade>;
}

interface IHubApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOrderBooks: IHubApiService_IGetOrderBooks;
    getTrades: IHubApiService_IGetTrades;
}

interface IHubApiService_IGetOrderBooks extends grpc.MethodDefinition<trade_model_pb.OrderBooksRequest, trade_model_pb.OrderBooks> {
    path: string; // "/sansigmaprotos.HubApi/GetOrderBooks"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<trade_model_pb.OrderBooksRequest>;
    requestDeserialize: grpc.deserialize<trade_model_pb.OrderBooksRequest>;
    responseSerialize: grpc.serialize<trade_model_pb.OrderBooks>;
    responseDeserialize: grpc.deserialize<trade_model_pb.OrderBooks>;
}
interface IHubApiService_IGetTrades extends grpc.MethodDefinition<trade_model_pb.GetTradesRequest, trade_model_pb.GetTradesResponse> {
    path: string; // "/sansigmaprotos.HubApi/GetTrades"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<trade_model_pb.GetTradesRequest>;
    requestDeserialize: grpc.deserialize<trade_model_pb.GetTradesRequest>;
    responseSerialize: grpc.serialize<trade_model_pb.GetTradesResponse>;
    responseDeserialize: grpc.deserialize<trade_model_pb.GetTradesResponse>;
}

export const HubApiService: IHubApiService;

export interface IHubApiServer {
    getOrderBooks: grpc.handleServerStreamingCall<trade_model_pb.OrderBooksRequest, trade_model_pb.OrderBooks>;
    getTrades: grpc.handleServerStreamingCall<trade_model_pb.GetTradesRequest, trade_model_pb.GetTradesResponse>;
}

export interface IHubApiClient {
    getOrderBooks(request: trade_model_pb.OrderBooksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.OrderBooks>;
    getOrderBooks(request: trade_model_pb.OrderBooksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.OrderBooks>;
    getTrades(request: trade_model_pb.GetTradesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.GetTradesResponse>;
    getTrades(request: trade_model_pb.GetTradesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.GetTradesResponse>;
}

export class HubApiClient extends grpc.Client implements IHubApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getOrderBooks(request: trade_model_pb.OrderBooksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.OrderBooks>;
    public getOrderBooks(request: trade_model_pb.OrderBooksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.OrderBooks>;
    public getTrades(request: trade_model_pb.GetTradesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.GetTradesResponse>;
    public getTrades(request: trade_model_pb.GetTradesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_model_pb.GetTradesResponse>;
}
