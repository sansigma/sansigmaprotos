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

