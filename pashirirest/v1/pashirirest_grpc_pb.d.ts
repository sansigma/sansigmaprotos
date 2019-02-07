// package: ssigma.pashirirest.v1
// file: sansigmaprotos/pashirirest/v1/pashirirest.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as sansigmaprotos_pashirirest_v1_pashirirest_pb from "../../../sansigmaprotos/pashirirest/v1/pashirirest_pb";
import * as sansigmaprotos_type_market_pb from "../../../sansigmaprotos/type/market_pb";
import * as sansigmaprotos_type_orderbook_pb from "../../../sansigmaprotos/type/orderbook_pb";

interface IPashiriRestServiceV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOrderBook: IPashiriRestServiceV1Service_IGetOrderBook;
}

interface IPashiriRestServiceV1Service_IGetOrderBook extends grpc.MethodDefinition<sansigmaprotos_type_market_pb.Market, sansigmaprotos_type_orderbook_pb.OrderBook> {
    path: string; // "/ssigma.pashirirest.v1.PashiriRestServiceV1/GetOrderBook"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<sansigmaprotos_type_market_pb.Market>;
    requestDeserialize: grpc.deserialize<sansigmaprotos_type_market_pb.Market>;
    responseSerialize: grpc.serialize<sansigmaprotos_type_orderbook_pb.OrderBook>;
    responseDeserialize: grpc.deserialize<sansigmaprotos_type_orderbook_pb.OrderBook>;
}

export const PashiriRestServiceV1Service: IPashiriRestServiceV1Service;

export interface IPashiriRestServiceV1Server {
    getOrderBook: grpc.handleServerStreamingCall<sansigmaprotos_type_market_pb.Market, sansigmaprotos_type_orderbook_pb.OrderBook>;
}

export interface IPashiriRestServiceV1Client {
    getOrderBook(request: sansigmaprotos_type_market_pb.Market, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sansigmaprotos_type_orderbook_pb.OrderBook>;
    getOrderBook(request: sansigmaprotos_type_market_pb.Market, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sansigmaprotos_type_orderbook_pb.OrderBook>;
}

export class PashiriRestServiceV1Client extends grpc.Client implements IPashiriRestServiceV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getOrderBook(request: sansigmaprotos_type_market_pb.Market, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sansigmaprotos_type_orderbook_pb.OrderBook>;
    public getOrderBook(request: sansigmaprotos_type_market_pb.Market, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sansigmaprotos_type_orderbook_pb.OrderBook>;
}
