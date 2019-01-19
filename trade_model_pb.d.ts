export class AssetPair {
  constructor ();
  getBase(): string;
  setBase(a: string): void;
  getQuote(): string;
  setQuote(a: string): void;
  toObject(): AssetPair.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AssetPair;
}

export namespace AssetPair {
  export type AsObject = {
    Base: string;
    Quote: string;
  }
}

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

