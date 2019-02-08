// package: ssigmaapi.pashirirest.v1
// file: ssigmaapi/pashirirest/v1/pashirirest.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as ssigmaapi_pashirirest_v1_pashirirest_pb from "../../../ssigmaapi/pashirirest/v1/pashirirest_pb";
import * as ssigmaapi_type_market_pb from "../../../ssigmaapi/type/market_pb";
import * as ssigmaapi_type_orderbook_pb from "../../../ssigmaapi/type/orderbook_pb";

interface IPashiriRestServiceV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOrderBook: IPashiriRestServiceV1Service_IGetOrderBook;
}

interface IPashiriRestServiceV1Service_IGetOrderBook extends grpc.MethodDefinition<ssigmaapi_type_market_pb.Market, ssigmaapi_type_orderbook_pb.OrderBook> {
    path: string; // "/ssigmaapi.pashirirest.v1.PashiriRestServiceV1/GetOrderBook"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<ssigmaapi_type_market_pb.Market>;
    requestDeserialize: grpc.deserialize<ssigmaapi_type_market_pb.Market>;
    responseSerialize: grpc.serialize<ssigmaapi_type_orderbook_pb.OrderBook>;
    responseDeserialize: grpc.deserialize<ssigmaapi_type_orderbook_pb.OrderBook>;
}

export const PashiriRestServiceV1Service: IPashiriRestServiceV1Service;

export interface IPashiriRestServiceV1Server {
    getOrderBook: grpc.handleServerStreamingCall<ssigmaapi_type_market_pb.Market, ssigmaapi_type_orderbook_pb.OrderBook>;
}

export interface IPashiriRestServiceV1Client {
    getOrderBook(request: ssigmaapi_type_market_pb.Market, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssigmaapi_type_orderbook_pb.OrderBook>;
    getOrderBook(request: ssigmaapi_type_market_pb.Market, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssigmaapi_type_orderbook_pb.OrderBook>;
}

export class PashiriRestServiceV1Client extends grpc.Client implements IPashiriRestServiceV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getOrderBook(request: ssigmaapi_type_market_pb.Market, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssigmaapi_type_orderbook_pb.OrderBook>;
    public getOrderBook(request: ssigmaapi_type_market_pb.Market, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssigmaapi_type_orderbook_pb.OrderBook>;
}
