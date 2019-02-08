// package: ssigmaapi.pashiriwebsocket.v1
// file: ssigmaapi/pashiriwebsocket/v1/pashiriwebsocket.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as ssigmaapi_pashiriwebsocket_v1_pashiriwebsocket_pb from "../../../ssigmaapi/pashiriwebsocket/v1/pashiriwebsocket_pb";
import * as ssigmaapi_type_market_pb from "../../../ssigmaapi/type/market_pb";
import * as ssigmaapi_type_trade_pb from "../../../ssigmaapi/type/trade_pb";

interface IPashiriWebsocketServiceV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getTrades: IPashiriWebsocketServiceV1Service_IGetTrades;
}

interface IPashiriWebsocketServiceV1Service_IGetTrades extends grpc.MethodDefinition<ssigmaapi_type_market_pb.Market, ssigmaapi_type_trade_pb.Trades> {
    path: string; // "/ssigmaapi.pashiriwebsocket.v1.PashiriWebsocketServiceV1/GetTrades"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<ssigmaapi_type_market_pb.Market>;
    requestDeserialize: grpc.deserialize<ssigmaapi_type_market_pb.Market>;
    responseSerialize: grpc.serialize<ssigmaapi_type_trade_pb.Trades>;
    responseDeserialize: grpc.deserialize<ssigmaapi_type_trade_pb.Trades>;
}

export const PashiriWebsocketServiceV1Service: IPashiriWebsocketServiceV1Service;

export interface IPashiriWebsocketServiceV1Server {
    getTrades: grpc.handleServerStreamingCall<ssigmaapi_type_market_pb.Market, ssigmaapi_type_trade_pb.Trades>;
}

export interface IPashiriWebsocketServiceV1Client {
    getTrades(request: ssigmaapi_type_market_pb.Market, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssigmaapi_type_trade_pb.Trades>;
    getTrades(request: ssigmaapi_type_market_pb.Market, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssigmaapi_type_trade_pb.Trades>;
}

export class PashiriWebsocketServiceV1Client extends grpc.Client implements IPashiriWebsocketServiceV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getTrades(request: ssigmaapi_type_market_pb.Market, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssigmaapi_type_trade_pb.Trades>;
    public getTrades(request: ssigmaapi_type_market_pb.Market, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ssigmaapi_type_trade_pb.Trades>;
}
