export class BidAsk {
  constructor ();
  getPrice(): number;
  setPrice(a: number): void;
  getAmount(): number;
  setAmount(a: number): void;
  toObject(): BidAsk.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => BidAsk;
}

export namespace BidAsk {
  export type AsObject = {
    Price: number;
    Amount: number;
  }
}

export class GetTradesRequest {
  constructor ();
  getWindowingSize(): number;
  setWindowingSize(a: number): void;
  getMarketsList(): Market[];
  setMarketsList(a: Market[]): void;
  toObject(): GetTradesRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetTradesRequest;
}

export namespace GetTradesRequest {
  export type AsObject = {
    WindowingSize: number;
    MarketsList: Market[];
  }
}

export class GetTradesResponse {
  constructor ();
  getTradesWithMarketList(): TradesWithMarket[];
  setTradesWithMarketList(a: TradesWithMarket[]): void;
  toObject(): GetTradesResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetTradesResponse;
}

export namespace GetTradesResponse {
  export type AsObject = {
    TradesWithMarketList: TradesWithMarket[];
  }
}

export class Market {
  constructor ();
  getBase(): string;
  setBase(a: string): void;
  getQuote(): string;
  setQuote(a: string): void;
  getSymbol(): string;
  setSymbol(a: string): void;
  getExchange(): string;
  setExchange(a: string): void;
  toObject(): Market.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Market;
}

export namespace Market {
  export type AsObject = {
    Base: string;
    Quote: string;
    Symbol: string;
    Exchange: string;
  }
}

export class OrderBook {
  constructor ();
  getExchange(): string;
  setExchange(a: string): void;
  getBase(): string;
  setBase(a: string): void;
  getQuote(): string;
  setQuote(a: string): void;
  getSymbol(): string;
  setSymbol(a: string): void;
  getBidsList(): BidAsk[];
  setBidsList(a: BidAsk[]): void;
  getAsksList(): BidAsk[];
  setAsksList(a: BidAsk[]): void;
  getTimestamp(): number;
  setTimestamp(a: number): void;
  toObject(): OrderBook.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => OrderBook;
}

export namespace OrderBook {
  export type AsObject = {
    Exchange: string;
    Base: string;
    Quote: string;
    Symbol: string;
    BidsList: BidAsk[];
    AsksList: BidAsk[];
    Timestamp: number;
  }
}

export class OrderBooks {
  constructor ();
  getAllList(): OrderBook[];
  setAllList(a: OrderBook[]): void;
  getTimestamp(): number;
  setTimestamp(a: number): void;
  toObject(): OrderBooks.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => OrderBooks;
}

export namespace OrderBooks {
  export type AsObject = {
    AllList: OrderBook[];
    Timestamp: number;
  }
}

export class OrderBooksRequest {
  constructor ();
  getBase(): string;
  setBase(a: string): void;
  getQuote(): string;
  setQuote(a: string): void;
  getExchangesList(): string[];
  setExchangesList(a: string[]): void;
  toObject(): OrderBooksRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => OrderBooksRequest;
}

export namespace OrderBooksRequest {
  export type AsObject = {
    Base: string;
    Quote: string;
    ExchangesList: string[];
  }
}

export class Trade {
  constructor ();
  getSymbol(): string;
  setSymbol(a: string): void;
  getTradeId(): string;
  setTradeId(a: string): void;
  getExchange(): string;
  setExchange(a: string): void;
  getBase(): string;
  setBase(a: string): void;
  getQuote(): string;
  setQuote(a: string): void;
  getPrice(): number;
  setPrice(a: number): void;
  getAmount(): number;
  setAmount(a: number): void;
  getTimestamp(): number;
  setTimestamp(a: number): void;
  getSide(): string;
  setSide(a: string): void;
  toObject(): Trade.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Trade;
}

export namespace Trade {
  export type AsObject = {
    Symbol: string;
    TradeId: string;
    Exchange: string;
    Base: string;
    Quote: string;
    Price: number;
    Amount: number;
    Timestamp: number;
    Side: string;
  }
}

export class TradesWithMarket {
  constructor ();
  getMarket(): Market;
  setMarket(a: Market): void;
  getTradesList(): Trade[];
  setTradesList(a: Trade[]): void;
  toObject(): TradesWithMarket.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TradesWithMarket;
}

export namespace TradesWithMarket {
  export type AsObject = {
    Market: Market;
    TradesList: Trade[];
  }
}

