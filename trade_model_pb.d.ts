// package: sansigmaprotos
// file: trade_model.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class BidAsk extends jspb.Message { 
    getPrice(): number;
    setPrice(value: number): void;

    getAmount(): number;
    setAmount(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BidAsk.AsObject;
    static toObject(includeInstance: boolean, msg: BidAsk): BidAsk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BidAsk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BidAsk;
    static deserializeBinaryFromReader(message: BidAsk, reader: jspb.BinaryReader): BidAsk;
}

export namespace BidAsk {
    export type AsObject = {
        price: number,
        amount: number,
    }
}

export class OrderBook extends jspb.Message { 
    getExchange(): string;
    setExchange(value: string): void;

    getBase(): string;
    setBase(value: string): void;

    getQuote(): string;
    setQuote(value: string): void;

    getSymbol(): string;
    setSymbol(value: string): void;

    clearBidsList(): void;
    getBidsList(): Array<BidAsk>;
    setBidsList(value: Array<BidAsk>): void;
    addBids(value?: BidAsk, index?: number): BidAsk;

    clearAsksList(): void;
    getAsksList(): Array<BidAsk>;
    setAsksList(value: Array<BidAsk>): void;
    addAsks(value?: BidAsk, index?: number): BidAsk;

    getTimestamp(): number;
    setTimestamp(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderBook.AsObject;
    static toObject(includeInstance: boolean, msg: OrderBook): OrderBook.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderBook, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderBook;
    static deserializeBinaryFromReader(message: OrderBook, reader: jspb.BinaryReader): OrderBook;
}

export namespace OrderBook {
    export type AsObject = {
        exchange: string,
        base: string,
        quote: string,
        symbol: string,
        bidsList: Array<BidAsk.AsObject>,
        asksList: Array<BidAsk.AsObject>,
        timestamp: number,
    }
}

export class Spread extends jspb.Message { 
    getLongExchange(): string;
    setLongExchange(value: string): void;

    getShortExchange(): string;
    setShortExchange(value: string): void;

    getBase(): string;
    setBase(value: string): void;

    getQuote(): string;
    setQuote(value: string): void;

    getProfitRate(): number;
    setProfitRate(value: number): void;

    getProfit(): number;
    setProfit(value: number): void;

    getTimestamp(): number;
    setTimestamp(value: number): void;

    getInvestedCapital(): number;
    setInvestedCapital(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Spread.AsObject;
    static toObject(includeInstance: boolean, msg: Spread): Spread.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Spread, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Spread;
    static deserializeBinaryFromReader(message: Spread, reader: jspb.BinaryReader): Spread;
}

export namespace Spread {
    export type AsObject = {
        longExchange: string,
        shortExchange: string,
        base: string,
        quote: string,
        profitRate: number,
        profit: number,
        timestamp: number,
        investedCapital: number,
    }
}

export class Trade extends jspb.Message { 
    getSymbol(): string;
    setSymbol(value: string): void;

    getTradeId(): string;
    setTradeId(value: string): void;

    getExchange(): string;
    setExchange(value: string): void;

    getBase(): string;
    setBase(value: string): void;

    getQuote(): string;
    setQuote(value: string): void;

    getPrice(): number;
    setPrice(value: number): void;

    getAmount(): number;
    setAmount(value: number): void;

    getTimestamp(): number;
    setTimestamp(value: number): void;

    getSide(): string;
    setSide(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Trade.AsObject;
    static toObject(includeInstance: boolean, msg: Trade): Trade.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Trade, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Trade;
    static deserializeBinaryFromReader(message: Trade, reader: jspb.BinaryReader): Trade;
}

export namespace Trade {
    export type AsObject = {
        symbol: string,
        tradeId: string,
        exchange: string,
        base: string,
        quote: string,
        price: number,
        amount: number,
        timestamp: number,
        side: string,
    }
}

export class OrderPanel extends jspb.Message { 
    getExchange(): string;
    setExchange(value: string): void;

    getBase(): string;
    setBase(value: string): void;

    getQuote(): string;
    setQuote(value: string): void;

    getSide(): OrderPanel.OrderSide;
    setSide(value: OrderPanel.OrderSide): void;

    getPrice(): number;
    setPrice(value: number): void;

    getDepthAmount(): number;
    setDepthAmount(value: number): void;

    getOrderAmount(): number;
    setOrderAmount(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderPanel.AsObject;
    static toObject(includeInstance: boolean, msg: OrderPanel): OrderPanel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderPanel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderPanel;
    static deserializeBinaryFromReader(message: OrderPanel, reader: jspb.BinaryReader): OrderPanel;
}

export namespace OrderPanel {
    export type AsObject = {
        exchange: string,
        base: string,
        quote: string,
        side: OrderPanel.OrderSide,
        price: number,
        depthAmount: number,
        orderAmount: number,
    }

    export enum OrderSide {
    BUY = 0,
    SELL = 1,
    }

}

export class Arbitrage extends jspb.Message { 
    getType(): Arbitrage.ArbitrageType;
    setType(value: Arbitrage.ArbitrageType): void;

    clearOrdersList(): void;
    getOrdersList(): Array<OrderPanel>;
    setOrdersList(value: Array<OrderPanel>): void;
    addOrders(value?: OrderPanel, index?: number): OrderPanel;

    getProfit(): number;
    setProfit(value: number): void;

    getProfitRate(): number;
    setProfitRate(value: number): void;

    getInvestment(): number;
    setInvestment(value: number): void;

    getProfitAsset(): string;
    setProfitAsset(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Arbitrage.AsObject;
    static toObject(includeInstance: boolean, msg: Arbitrage): Arbitrage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Arbitrage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Arbitrage;
    static deserializeBinaryFromReader(message: Arbitrage, reader: jspb.BinaryReader): Arbitrage;
}

export namespace Arbitrage {
    export type AsObject = {
        type: Arbitrage.ArbitrageType,
        ordersList: Array<OrderPanel.AsObject>,
        profit: number,
        profitRate: number,
        investment: number,
        profitAsset: string,
    }

    export enum ArbitrageType {
    SIMPLE = 0,
    TRIANGULAR = 1,
    CIRCLE = 2,
    }

}

export class Market extends jspb.Message { 
    getBase(): string;
    setBase(value: string): void;

    getQuote(): string;
    setQuote(value: string): void;

    getSymbol(): string;
    setSymbol(value: string): void;

    getExchange(): string;
    setExchange(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Market.AsObject;
    static toObject(includeInstance: boolean, msg: Market): Market.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Market, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Market;
    static deserializeBinaryFromReader(message: Market, reader: jspb.BinaryReader): Market;
}

export namespace Market {
    export type AsObject = {
        base: string,
        quote: string,
        symbol: string,
        exchange: string,
    }
}

export class OrderBooks extends jspb.Message { 
    clearAllList(): void;
    getAllList(): Array<OrderBook>;
    setAllList(value: Array<OrderBook>): void;
    addAll(value?: OrderBook, index?: number): OrderBook;

    getTimestamp(): number;
    setTimestamp(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderBooks.AsObject;
    static toObject(includeInstance: boolean, msg: OrderBooks): OrderBooks.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderBooks, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderBooks;
    static deserializeBinaryFromReader(message: OrderBooks, reader: jspb.BinaryReader): OrderBooks;
}

export namespace OrderBooks {
    export type AsObject = {
        allList: Array<OrderBook.AsObject>,
        timestamp: number,
    }
}

export class OrderBooksRequest extends jspb.Message { 
    getBase(): string;
    setBase(value: string): void;

    getQuote(): string;
    setQuote(value: string): void;

    clearExchangesList(): void;
    getExchangesList(): Array<string>;
    setExchangesList(value: Array<string>): void;
    addExchanges(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderBooksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OrderBooksRequest): OrderBooksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderBooksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderBooksRequest;
    static deserializeBinaryFromReader(message: OrderBooksRequest, reader: jspb.BinaryReader): OrderBooksRequest;
}

export namespace OrderBooksRequest {
    export type AsObject = {
        base: string,
        quote: string,
        exchangesList: Array<string>,
    }
}

export class GetTradesRequest extends jspb.Message { 
    getWindowingSize(): number;
    setWindowingSize(value: number): void;

    clearMarketsList(): void;
    getMarketsList(): Array<Market>;
    setMarketsList(value: Array<Market>): void;
    addMarkets(value?: Market, index?: number): Market;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTradesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTradesRequest): GetTradesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTradesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTradesRequest;
    static deserializeBinaryFromReader(message: GetTradesRequest, reader: jspb.BinaryReader): GetTradesRequest;
}

export namespace GetTradesRequest {
    export type AsObject = {
        windowingSize: number,
        marketsList: Array<Market.AsObject>,
    }
}

export class TradesWithMarket extends jspb.Message { 

    hasMarket(): boolean;
    clearMarket(): void;
    getMarket(): Market | undefined;
    setMarket(value?: Market): void;

    clearTradesList(): void;
    getTradesList(): Array<Trade>;
    setTradesList(value: Array<Trade>): void;
    addTrades(value?: Trade, index?: number): Trade;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradesWithMarket.AsObject;
    static toObject(includeInstance: boolean, msg: TradesWithMarket): TradesWithMarket.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradesWithMarket, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradesWithMarket;
    static deserializeBinaryFromReader(message: TradesWithMarket, reader: jspb.BinaryReader): TradesWithMarket;
}

export namespace TradesWithMarket {
    export type AsObject = {
        market?: Market.AsObject,
        tradesList: Array<Trade.AsObject>,
    }
}

export class GetTradesResponse extends jspb.Message { 
    clearTradesWithMarketList(): void;
    getTradesWithMarketList(): Array<TradesWithMarket>;
    setTradesWithMarketList(value: Array<TradesWithMarket>): void;
    addTradesWithMarket(value?: TradesWithMarket, index?: number): TradesWithMarket;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTradesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTradesResponse): GetTradesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTradesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTradesResponse;
    static deserializeBinaryFromReader(message: GetTradesResponse, reader: jspb.BinaryReader): GetTradesResponse;
}

export namespace GetTradesResponse {
    export type AsObject = {
        tradesWithMarketList: Array<TradesWithMarket.AsObject>,
    }
}
