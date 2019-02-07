// package: ssigma.pashiriwebsocket.v1
// file: sansigmaprotos/pashiriwebsocket/v1/pashiriwebsocket.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as sansigmaprotos_pashiriwebsocket_v1_pashiriwebsocket_pb from "../../../sansigmaprotos/pashiriwebsocket/v1/pashiriwebsocket_pb";
import * as sansigmaprotos_type_market_pb from "../../../sansigmaprotos/type/market_pb";
import * as sansigmaprotos_type_trade_pb from "../../../sansigmaprotos/type/trade_pb";

interface IPashiriWebsocketServiceV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getTrades: IPashiriWebsocketServiceV1Service_IGetTrades;
}

interface IPashiriWebsocketServiceV1Service_IGetTrades extends grpc.MethodDefinition<sansigmaprotos_type_market_pb.Market, sansigmaprotos_type_trade_pb.Trades> {
    path: string; // "/ssigma.pashiriwebsocket.v1.PashiriWebsocketServiceV1/GetTrades"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<sansigmaprotos_type_market_pb.Market>;
    requestDeserialize: grpc.deserialize<sansigmaprotos_type_market_pb.Market>;
    responseSerialize: grpc.serialize<sansigmaprotos_type_trade_pb.Trades>;
    responseDeserialize: grpc.deserialize<sansigmaprotos_type_trade_pb.Trades>;
}

export const PashiriWebsocketServiceV1Service: IPashiriWebsocketServiceV1Service;

export interface IPashiriWebsocketServiceV1Server {
    getTrades: grpc.handleServerStreamingCall<sansigmaprotos_type_market_pb.Market, sansigmaprotos_type_trade_pb.Trades>;
}

export interface IPashiriWebsocketServiceV1Client {
    getTrades(request: sansigmaprotos_type_market_pb.Market, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sansigmaprotos_type_trade_pb.Trades>;
    getTrades(request: sansigmaprotos_type_market_pb.Market, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sansigmaprotos_type_trade_pb.Trades>;
}

export class PashiriWebsocketServiceV1Client extends grpc.Client implements IPashiriWebsocketServiceV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getTrades(request: sansigmaprotos_type_market_pb.Market, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sansigmaprotos_type_trade_pb.Trades>;
    public getTrades(request: sansigmaprotos_type_market_pb.Market, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sansigmaprotos_type_trade_pb.Trades>;
}
