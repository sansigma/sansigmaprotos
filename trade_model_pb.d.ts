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

export class GetOrderBooksRequest {
  constructor ();
  getMarketList(): Market[];
  setMarketList(a: Market[]): void;
  toObject(): GetOrderBooksRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetOrderBooksRequest;
}

export namespace GetOrderBooksRequest {
  export type AsObject = {
    MarketList: Market[];
  }
}

export class GetOrderBooksResponse {
  constructor ();
  getAllList(): OrderBook[];
  setAllList(a: OrderBook[]): void;
  getTimestamp(): number;
  setTimestamp(a: number): void;
  toObject(): GetOrderBooksResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetOrderBooksResponse;
}

export namespace GetOrderBooksResponse {
  export type AsObject = {
    AllList: OrderBook[];
    Timestamp: number;
  }
}

export class GetTradesRequest {
  constructor ();
  getMarketsList(): Market[];
  setMarketsList(a: Market[]): void;
  getVelocityWindowingSize(): number;
  setVelocityWindowingSize(a: number): void;
  getVolatilityWindowingSize(): number;
  setVolatilityWindowingSize(a: number): void;
  getVolumeWindowingSize(): number;
  setVolumeWindowingSize(a: number): void;
  toObject(): GetTradesRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetTradesRequest;
}

export namespace GetTradesRequest {
  export type AsObject = {
    MarketsList: Market[];
    VelocityWindowingSize: number;
    VolatilityWindowingSize: number;
    VolumeWindowingSize: number;
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

export class TradeWithAdditionalInfo {
  constructor ();
  getTrade(): Trade;
  setTrade(a: Trade): void;
  getVelocity(): number;
  setVelocity(a: number): void;
  getAcceleration(): number;
  setAcceleration(a: number): void;
  getVolatility(): number;
  setVolatility(a: number): void;
  getVolumeBase(): number;
  setVolumeBase(a: number): void;
  getVolumeQuote(): number;
  setVolumeQuote(a: number): void;
  getMomentumRate(): number;
  setMomentumRate(a: number): void;
  getVelocityWindowingSize(): number;
  setVelocityWindowingSize(a: number): void;
  getVolatilityWindowingSize(): number;
  setVolatilityWindowingSize(a: number): void;
  getVolumeWindowingSize(): number;
  setVolumeWindowingSize(a: number): void;
  toObject(): TradeWithAdditionalInfo.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TradeWithAdditionalInfo;
}

export namespace TradeWithAdditionalInfo {
  export type AsObject = {
    Trade: Trade;
    Velocity: number;
    Acceleration: number;
    Volatility: number;
    VolumeBase: number;
    VolumeQuote: number;
    MomentumRate: number;
    VelocityWindowingSize: number;
    VolatilityWindowingSize: number;
    VolumeWindowingSize: number;
  }
}

export class TradesWithMarket {
  constructor ();
  getMarket(): Market;
  setMarket(a: Market): void;
  getTradesList(): TradeWithAdditionalInfo[];
  setTradesList(a: TradeWithAdditionalInfo[]): void;
  toObject(): TradesWithMarket.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TradesWithMarket;
}

export namespace TradesWithMarket {
  export type AsObject = {
    Market: Market;
    TradesList: TradeWithAdditionalInfo[];
  }
}

