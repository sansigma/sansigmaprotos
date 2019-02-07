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

export class Trades {
  constructor ();
  getTradesList(): Trade[];
  setTradesList(a: Trade[]): void;
  toObject(): Trades.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Trades;
}

export namespace Trades {
  export type AsObject = {
    TradesList: Trade[];
  }
}

