// package: ssigmaapi.markethub.v1
// file: ssigmaapi/markethub/v1/markethub.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as ssigmaapi_markethub_v1_markethub_pb from "../../../ssigmaapi/markethub/v1/markethub_pb";
import * as ssigmaapi_type_market_pb from "../../../ssigmaapi/type/market_pb";
import * as ssigmaapi_type_trade_pb from "../../../ssigmaapi/type/trade_pb";
import * as ssigmaapi_type_orderbook_pb from "../../../ssigmaapi/type/orderbook_pb";

interface IMarketHubServiceV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getTrades: IMarketHubServiceV1Service_IGetTrades;
    getOrderBooks: IMarketHubServiceV1Service_IGetOrderBooks;
    getTradesAndOrderBooks: IMarketHubServiceV1Service_IGetTradesAndOrderBooks;
}

interface IMarketHubServiceV1Service_IGetTrades extends grpc.MethodDefinition<ssigmaapi_markethub_v1_markethub_pb.GetTradesRequest, ssigmaapi_markethub_v1_markethub_pb.GetTradesResponse> {
    path: string; // "/ssigmaapi.markethub.v1.MarketHubServiceV1/GetTrades"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<ssigmaapi_markethub_v1_markethub_pb.GetTradesRequest>;
    requestDeserialize: grpc.deserialize<ssigmaapi_markethub_v1_markethub_pb.GetTradesRequest>;
    responseSerialize: grpc.serialize<ssigmaapi_markethub_v1_markethub_pb.GetTradesResponse>;
    responseDeserialize: grpc.deserialize<ssigmaapi_markethub_v1_markethub_pb.GetTradesResponse>;
}
interface IMarketHubServiceV1Service_IGetOrderBooks extends grpc.MethodDefinition<ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksRequest, ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksResponse> {
    path: string; // "/ssigmaapi.markethub.v1.MarketHubServiceV1/GetOrderBooks"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksRequest>;
    requestDeserialize: grpc.deserialize<ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksRequest>;
    responseSerialize: grpc.serialize<ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksResponse>;
    responseDeserialize: grpc.deserialize<ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksResponse>;
}
interface IMarketHubServiceV1Service_IGetTradesAndOrderBooks extends grpc.MethodDefinition<ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksRequest, ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksResponse> {
    path: string; // "/ssigmaapi.markethub.v1.MarketHubServiceV1/GetTradesAndOrderBooks"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksRequest>;
    requestDeserialize: grpc.deserialize<ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksRequest>;
    responseSerialize: grpc.serialize<ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksResponse>;
    responseDeserialize: grpc.deserialize<ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksResponse>;
}

export const MarketHubServiceV1Service: IMarketHubServiceV1Service;

export interface IMarketHubServiceV1Server {
    getTrades: grpc.handleServerStreamingCall<ssigmaapi_markethub_v1_markethub_pb.GetTradesRequest, ssigmaapi_markethub_v1_markethub_pb.GetTradesResponse>;
    getOrderBooks: grpc.handleServerStreamingCall<ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksRequest, ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksResponse>;
    getTradesAndOrderBooks: grpc.handleServerStreamingCall<ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksRequest, ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksResponse>;
}

export interface IMarketHubServiceV1Client {
    getTrades(request: ssigmaapi_markethub_v1_markethub_pb.GetTradesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssigmaapi_markethub_v1_markethub_pb.GetTradesResponse>;
    getTrades(request: ssigmaapi_markethub_v1_markethub_pb.GetTradesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssigmaapi_markethub_v1_markethub_pb.GetTradesResponse>;
    getOrderBooks(request: ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksResponse>;
    getOrderBooks(request: ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksResponse>;
    getTradesAndOrderBooks(request: ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksResponse>;
    getTradesAndOrderBooks(request: ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksResponse>;
}

export class MarketHubServiceV1Client extends grpc.Client implements IMarketHubServiceV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getTrades(request: ssigmaapi_markethub_v1_markethub_pb.GetTradesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssigmaapi_markethub_v1_markethub_pb.GetTradesResponse>;
    public getTrades(request: ssigmaapi_markethub_v1_markethub_pb.GetTradesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssigmaapi_markethub_v1_markethub_pb.GetTradesResponse>;
    public getOrderBooks(request: ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksResponse>;
    public getOrderBooks(request: ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksResponse>;
    public getTradesAndOrderBooks(request: ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksResponse>;
    public getTradesAndOrderBooks(request: ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksResponse>;
}
