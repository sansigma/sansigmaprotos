// Code generated by protoc-gen-go. DO NOT EDIT.
// source: trade_model.proto

package sansigmaprotos

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type OrderPanel_OrderSide int32

const (
	OrderPanel_BUY  OrderPanel_OrderSide = 0
	OrderPanel_SELL OrderPanel_OrderSide = 1
)

var OrderPanel_OrderSide_name = map[int32]string{
	0: "BUY",
	1: "SELL",
}

var OrderPanel_OrderSide_value = map[string]int32{
	"BUY":  0,
	"SELL": 1,
}

func (x OrderPanel_OrderSide) String() string {
	return proto.EnumName(OrderPanel_OrderSide_name, int32(x))
}

func (OrderPanel_OrderSide) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_d21abb51656e18d4, []int{4, 0}
}

type Arbitrage_ArbitrageType int32

const (
	Arbitrage_SIMPLE     Arbitrage_ArbitrageType = 0
	Arbitrage_TRIANGULAR Arbitrage_ArbitrageType = 1
	Arbitrage_CIRCLE     Arbitrage_ArbitrageType = 2
)

var Arbitrage_ArbitrageType_name = map[int32]string{
	0: "SIMPLE",
	1: "TRIANGULAR",
	2: "CIRCLE",
}

var Arbitrage_ArbitrageType_value = map[string]int32{
	"SIMPLE":     0,
	"TRIANGULAR": 1,
	"CIRCLE":     2,
}

func (x Arbitrage_ArbitrageType) String() string {
	return proto.EnumName(Arbitrage_ArbitrageType_name, int32(x))
}

func (Arbitrage_ArbitrageType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_d21abb51656e18d4, []int{5, 0}
}

type BidAsk struct {
	Price                float64  `protobuf:"fixed64,1,opt,name=price,proto3" json:"price,omitempty"`
	Amount               float64  `protobuf:"fixed64,2,opt,name=amount,proto3" json:"amount,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *BidAsk) Reset()         { *m = BidAsk{} }
func (m *BidAsk) String() string { return proto.CompactTextString(m) }
func (*BidAsk) ProtoMessage()    {}
func (*BidAsk) Descriptor() ([]byte, []int) {
	return fileDescriptor_d21abb51656e18d4, []int{0}
}

func (m *BidAsk) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BidAsk.Unmarshal(m, b)
}
func (m *BidAsk) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BidAsk.Marshal(b, m, deterministic)
}
func (m *BidAsk) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BidAsk.Merge(m, src)
}
func (m *BidAsk) XXX_Size() int {
	return xxx_messageInfo_BidAsk.Size(m)
}
func (m *BidAsk) XXX_DiscardUnknown() {
	xxx_messageInfo_BidAsk.DiscardUnknown(m)
}

var xxx_messageInfo_BidAsk proto.InternalMessageInfo

func (m *BidAsk) GetPrice() float64 {
	if m != nil {
		return m.Price
	}
	return 0
}

func (m *BidAsk) GetAmount() float64 {
	if m != nil {
		return m.Amount
	}
	return 0
}

type OrderBook struct {
	Exchange             string    `protobuf:"bytes,1,opt,name=exchange,proto3" json:"exchange,omitempty"`
	Base                 string    `protobuf:"bytes,2,opt,name=base,proto3" json:"base,omitempty"`
	Quote                string    `protobuf:"bytes,3,opt,name=quote,proto3" json:"quote,omitempty"`
	Symbol               string    `protobuf:"bytes,4,opt,name=symbol,proto3" json:"symbol,omitempty"`
	Bids                 []*BidAsk `protobuf:"bytes,5,rep,name=bids,proto3" json:"bids,omitempty"`
	Asks                 []*BidAsk `protobuf:"bytes,6,rep,name=asks,proto3" json:"asks,omitempty"`
	Timestamp            int64     `protobuf:"varint,7,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	XXX_NoUnkeyedLiteral struct{}  `json:"-"`
	XXX_unrecognized     []byte    `json:"-"`
	XXX_sizecache        int32     `json:"-"`
}

func (m *OrderBook) Reset()         { *m = OrderBook{} }
func (m *OrderBook) String() string { return proto.CompactTextString(m) }
func (*OrderBook) ProtoMessage()    {}
func (*OrderBook) Descriptor() ([]byte, []int) {
	return fileDescriptor_d21abb51656e18d4, []int{1}
}

func (m *OrderBook) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_OrderBook.Unmarshal(m, b)
}
func (m *OrderBook) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_OrderBook.Marshal(b, m, deterministic)
}
func (m *OrderBook) XXX_Merge(src proto.Message) {
	xxx_messageInfo_OrderBook.Merge(m, src)
}
func (m *OrderBook) XXX_Size() int {
	return xxx_messageInfo_OrderBook.Size(m)
}
func (m *OrderBook) XXX_DiscardUnknown() {
	xxx_messageInfo_OrderBook.DiscardUnknown(m)
}

var xxx_messageInfo_OrderBook proto.InternalMessageInfo

func (m *OrderBook) GetExchange() string {
	if m != nil {
		return m.Exchange
	}
	return ""
}

func (m *OrderBook) GetBase() string {
	if m != nil {
		return m.Base
	}
	return ""
}

func (m *OrderBook) GetQuote() string {
	if m != nil {
		return m.Quote
	}
	return ""
}

func (m *OrderBook) GetSymbol() string {
	if m != nil {
		return m.Symbol
	}
	return ""
}

func (m *OrderBook) GetBids() []*BidAsk {
	if m != nil {
		return m.Bids
	}
	return nil
}

func (m *OrderBook) GetAsks() []*BidAsk {
	if m != nil {
		return m.Asks
	}
	return nil
}

func (m *OrderBook) GetTimestamp() int64 {
	if m != nil {
		return m.Timestamp
	}
	return 0
}

type Spread struct {
	LongExchange         string   `protobuf:"bytes,1,opt,name=long_exchange,json=longExchange,proto3" json:"long_exchange,omitempty"`
	ShortExchange        string   `protobuf:"bytes,2,opt,name=short_exchange,json=shortExchange,proto3" json:"short_exchange,omitempty"`
	Base                 string   `protobuf:"bytes,3,opt,name=base,proto3" json:"base,omitempty"`
	Quote                string   `protobuf:"bytes,4,opt,name=quote,proto3" json:"quote,omitempty"`
	ProfitRate           float64  `protobuf:"fixed64,5,opt,name=profit_rate,json=profitRate,proto3" json:"profit_rate,omitempty"`
	Profit               float64  `protobuf:"fixed64,6,opt,name=profit,proto3" json:"profit,omitempty"`
	Timestamp            int64    `protobuf:"varint,7,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	InvestedCapital      float64  `protobuf:"fixed64,8,opt,name=invested_capital,json=investedCapital,proto3" json:"invested_capital,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Spread) Reset()         { *m = Spread{} }
func (m *Spread) String() string { return proto.CompactTextString(m) }
func (*Spread) ProtoMessage()    {}
func (*Spread) Descriptor() ([]byte, []int) {
	return fileDescriptor_d21abb51656e18d4, []int{2}
}

func (m *Spread) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Spread.Unmarshal(m, b)
}
func (m *Spread) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Spread.Marshal(b, m, deterministic)
}
func (m *Spread) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Spread.Merge(m, src)
}
func (m *Spread) XXX_Size() int {
	return xxx_messageInfo_Spread.Size(m)
}
func (m *Spread) XXX_DiscardUnknown() {
	xxx_messageInfo_Spread.DiscardUnknown(m)
}

var xxx_messageInfo_Spread proto.InternalMessageInfo

func (m *Spread) GetLongExchange() string {
	if m != nil {
		return m.LongExchange
	}
	return ""
}

func (m *Spread) GetShortExchange() string {
	if m != nil {
		return m.ShortExchange
	}
	return ""
}

func (m *Spread) GetBase() string {
	if m != nil {
		return m.Base
	}
	return ""
}

func (m *Spread) GetQuote() string {
	if m != nil {
		return m.Quote
	}
	return ""
}

func (m *Spread) GetProfitRate() float64 {
	if m != nil {
		return m.ProfitRate
	}
	return 0
}

func (m *Spread) GetProfit() float64 {
	if m != nil {
		return m.Profit
	}
	return 0
}

func (m *Spread) GetTimestamp() int64 {
	if m != nil {
		return m.Timestamp
	}
	return 0
}

func (m *Spread) GetInvestedCapital() float64 {
	if m != nil {
		return m.InvestedCapital
	}
	return 0
}

type Trade struct {
	Key                  string   `protobuf:"bytes,1,opt,name=key,proto3" json:"key,omitempty"`
	TradeId              string   `protobuf:"bytes,2,opt,name=trade_id,json=tradeId,proto3" json:"trade_id,omitempty"`
	Exchange             string   `protobuf:"bytes,3,opt,name=exchange,proto3" json:"exchange,omitempty"`
	Base                 string   `protobuf:"bytes,4,opt,name=base,proto3" json:"base,omitempty"`
	Quote                string   `protobuf:"bytes,5,opt,name=quote,proto3" json:"quote,omitempty"`
	Price                float64  `protobuf:"fixed64,6,opt,name=price,proto3" json:"price,omitempty"`
	Amount               float64  `protobuf:"fixed64,7,opt,name=amount,proto3" json:"amount,omitempty"`
	Timestamp            int64    `protobuf:"varint,8,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	Side                 string   `protobuf:"bytes,9,opt,name=side,proto3" json:"side,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Trade) Reset()         { *m = Trade{} }
func (m *Trade) String() string { return proto.CompactTextString(m) }
func (*Trade) ProtoMessage()    {}
func (*Trade) Descriptor() ([]byte, []int) {
	return fileDescriptor_d21abb51656e18d4, []int{3}
}

func (m *Trade) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Trade.Unmarshal(m, b)
}
func (m *Trade) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Trade.Marshal(b, m, deterministic)
}
func (m *Trade) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Trade.Merge(m, src)
}
func (m *Trade) XXX_Size() int {
	return xxx_messageInfo_Trade.Size(m)
}
func (m *Trade) XXX_DiscardUnknown() {
	xxx_messageInfo_Trade.DiscardUnknown(m)
}

var xxx_messageInfo_Trade proto.InternalMessageInfo

func (m *Trade) GetKey() string {
	if m != nil {
		return m.Key
	}
	return ""
}

func (m *Trade) GetTradeId() string {
	if m != nil {
		return m.TradeId
	}
	return ""
}

func (m *Trade) GetExchange() string {
	if m != nil {
		return m.Exchange
	}
	return ""
}

func (m *Trade) GetBase() string {
	if m != nil {
		return m.Base
	}
	return ""
}

func (m *Trade) GetQuote() string {
	if m != nil {
		return m.Quote
	}
	return ""
}

func (m *Trade) GetPrice() float64 {
	if m != nil {
		return m.Price
	}
	return 0
}

func (m *Trade) GetAmount() float64 {
	if m != nil {
		return m.Amount
	}
	return 0
}

func (m *Trade) GetTimestamp() int64 {
	if m != nil {
		return m.Timestamp
	}
	return 0
}

func (m *Trade) GetSide() string {
	if m != nil {
		return m.Side
	}
	return ""
}

type OrderPanel struct {
	Exchange             string               `protobuf:"bytes,1,opt,name=exchange,proto3" json:"exchange,omitempty"`
	Base                 string               `protobuf:"bytes,2,opt,name=base,proto3" json:"base,omitempty"`
	Quote                string               `protobuf:"bytes,3,opt,name=quote,proto3" json:"quote,omitempty"`
	Side                 OrderPanel_OrderSide `protobuf:"varint,4,opt,name=side,proto3,enum=sansigmaprotos.OrderPanel_OrderSide" json:"side,omitempty"`
	Price                float64              `protobuf:"fixed64,5,opt,name=price,proto3" json:"price,omitempty"`
	DepthAmount          float64              `protobuf:"fixed64,6,opt,name=depth_amount,json=depthAmount,proto3" json:"depth_amount,omitempty"`
	OrderAmount          float64              `protobuf:"fixed64,7,opt,name=order_amount,json=orderAmount,proto3" json:"order_amount,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *OrderPanel) Reset()         { *m = OrderPanel{} }
func (m *OrderPanel) String() string { return proto.CompactTextString(m) }
func (*OrderPanel) ProtoMessage()    {}
func (*OrderPanel) Descriptor() ([]byte, []int) {
	return fileDescriptor_d21abb51656e18d4, []int{4}
}

func (m *OrderPanel) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_OrderPanel.Unmarshal(m, b)
}
func (m *OrderPanel) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_OrderPanel.Marshal(b, m, deterministic)
}
func (m *OrderPanel) XXX_Merge(src proto.Message) {
	xxx_messageInfo_OrderPanel.Merge(m, src)
}
func (m *OrderPanel) XXX_Size() int {
	return xxx_messageInfo_OrderPanel.Size(m)
}
func (m *OrderPanel) XXX_DiscardUnknown() {
	xxx_messageInfo_OrderPanel.DiscardUnknown(m)
}

var xxx_messageInfo_OrderPanel proto.InternalMessageInfo

func (m *OrderPanel) GetExchange() string {
	if m != nil {
		return m.Exchange
	}
	return ""
}

func (m *OrderPanel) GetBase() string {
	if m != nil {
		return m.Base
	}
	return ""
}

func (m *OrderPanel) GetQuote() string {
	if m != nil {
		return m.Quote
	}
	return ""
}

func (m *OrderPanel) GetSide() OrderPanel_OrderSide {
	if m != nil {
		return m.Side
	}
	return OrderPanel_BUY
}

func (m *OrderPanel) GetPrice() float64 {
	if m != nil {
		return m.Price
	}
	return 0
}

func (m *OrderPanel) GetDepthAmount() float64 {
	if m != nil {
		return m.DepthAmount
	}
	return 0
}

func (m *OrderPanel) GetOrderAmount() float64 {
	if m != nil {
		return m.OrderAmount
	}
	return 0
}

type Arbitrage struct {
	Type                 Arbitrage_ArbitrageType `protobuf:"varint,1,opt,name=type,proto3,enum=sansigmaprotos.Arbitrage_ArbitrageType" json:"type,omitempty"`
	Orders               []*OrderPanel           `protobuf:"bytes,2,rep,name=orders,proto3" json:"orders,omitempty"`
	Profit               float64                 `protobuf:"fixed64,3,opt,name=profit,proto3" json:"profit,omitempty"`
	ProfitRate           float64                 `protobuf:"fixed64,4,opt,name=profit_rate,json=profitRate,proto3" json:"profit_rate,omitempty"`
	Investment           float64                 `protobuf:"fixed64,5,opt,name=investment,proto3" json:"investment,omitempty"`
	ProfitAsset          string                  `protobuf:"bytes,6,opt,name=profit_asset,json=profitAsset,proto3" json:"profit_asset,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                `json:"-"`
	XXX_unrecognized     []byte                  `json:"-"`
	XXX_sizecache        int32                   `json:"-"`
}

func (m *Arbitrage) Reset()         { *m = Arbitrage{} }
func (m *Arbitrage) String() string { return proto.CompactTextString(m) }
func (*Arbitrage) ProtoMessage()    {}
func (*Arbitrage) Descriptor() ([]byte, []int) {
	return fileDescriptor_d21abb51656e18d4, []int{5}
}

func (m *Arbitrage) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Arbitrage.Unmarshal(m, b)
}
func (m *Arbitrage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Arbitrage.Marshal(b, m, deterministic)
}
func (m *Arbitrage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Arbitrage.Merge(m, src)
}
func (m *Arbitrage) XXX_Size() int {
	return xxx_messageInfo_Arbitrage.Size(m)
}
func (m *Arbitrage) XXX_DiscardUnknown() {
	xxx_messageInfo_Arbitrage.DiscardUnknown(m)
}

var xxx_messageInfo_Arbitrage proto.InternalMessageInfo

func (m *Arbitrage) GetType() Arbitrage_ArbitrageType {
	if m != nil {
		return m.Type
	}
	return Arbitrage_SIMPLE
}

func (m *Arbitrage) GetOrders() []*OrderPanel {
	if m != nil {
		return m.Orders
	}
	return nil
}

func (m *Arbitrage) GetProfit() float64 {
	if m != nil {
		return m.Profit
	}
	return 0
}

func (m *Arbitrage) GetProfitRate() float64 {
	if m != nil {
		return m.ProfitRate
	}
	return 0
}

func (m *Arbitrage) GetInvestment() float64 {
	if m != nil {
		return m.Investment
	}
	return 0
}

func (m *Arbitrage) GetProfitAsset() string {
	if m != nil {
		return m.ProfitAsset
	}
	return ""
}

type AssetPair struct {
	Base                 string   `protobuf:"bytes,1,opt,name=base,proto3" json:"base,omitempty"`
	Quote                string   `protobuf:"bytes,2,opt,name=quote,proto3" json:"quote,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *AssetPair) Reset()         { *m = AssetPair{} }
func (m *AssetPair) String() string { return proto.CompactTextString(m) }
func (*AssetPair) ProtoMessage()    {}
func (*AssetPair) Descriptor() ([]byte, []int) {
	return fileDescriptor_d21abb51656e18d4, []int{6}
}

func (m *AssetPair) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_AssetPair.Unmarshal(m, b)
}
func (m *AssetPair) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_AssetPair.Marshal(b, m, deterministic)
}
func (m *AssetPair) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AssetPair.Merge(m, src)
}
func (m *AssetPair) XXX_Size() int {
	return xxx_messageInfo_AssetPair.Size(m)
}
func (m *AssetPair) XXX_DiscardUnknown() {
	xxx_messageInfo_AssetPair.DiscardUnknown(m)
}

var xxx_messageInfo_AssetPair proto.InternalMessageInfo

func (m *AssetPair) GetBase() string {
	if m != nil {
		return m.Base
	}
	return ""
}

func (m *AssetPair) GetQuote() string {
	if m != nil {
		return m.Quote
	}
	return ""
}

type OrderBooks struct {
	All                  []*OrderBook `protobuf:"bytes,1,rep,name=all,proto3" json:"all,omitempty"`
	Timestamp            int64        `protobuf:"varint,2,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *OrderBooks) Reset()         { *m = OrderBooks{} }
func (m *OrderBooks) String() string { return proto.CompactTextString(m) }
func (*OrderBooks) ProtoMessage()    {}
func (*OrderBooks) Descriptor() ([]byte, []int) {
	return fileDescriptor_d21abb51656e18d4, []int{7}
}

func (m *OrderBooks) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_OrderBooks.Unmarshal(m, b)
}
func (m *OrderBooks) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_OrderBooks.Marshal(b, m, deterministic)
}
func (m *OrderBooks) XXX_Merge(src proto.Message) {
	xxx_messageInfo_OrderBooks.Merge(m, src)
}
func (m *OrderBooks) XXX_Size() int {
	return xxx_messageInfo_OrderBooks.Size(m)
}
func (m *OrderBooks) XXX_DiscardUnknown() {
	xxx_messageInfo_OrderBooks.DiscardUnknown(m)
}

var xxx_messageInfo_OrderBooks proto.InternalMessageInfo

func (m *OrderBooks) GetAll() []*OrderBook {
	if m != nil {
		return m.All
	}
	return nil
}

func (m *OrderBooks) GetTimestamp() int64 {
	if m != nil {
		return m.Timestamp
	}
	return 0
}

type OrderBooksRequest struct {
	Base                 string   `protobuf:"bytes,1,opt,name=base,proto3" json:"base,omitempty"`
	Quote                string   `protobuf:"bytes,2,opt,name=quote,proto3" json:"quote,omitempty"`
	Exchanges            []string `protobuf:"bytes,3,rep,name=exchanges,proto3" json:"exchanges,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *OrderBooksRequest) Reset()         { *m = OrderBooksRequest{} }
func (m *OrderBooksRequest) String() string { return proto.CompactTextString(m) }
func (*OrderBooksRequest) ProtoMessage()    {}
func (*OrderBooksRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_d21abb51656e18d4, []int{8}
}

func (m *OrderBooksRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_OrderBooksRequest.Unmarshal(m, b)
}
func (m *OrderBooksRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_OrderBooksRequest.Marshal(b, m, deterministic)
}
func (m *OrderBooksRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_OrderBooksRequest.Merge(m, src)
}
func (m *OrderBooksRequest) XXX_Size() int {
	return xxx_messageInfo_OrderBooksRequest.Size(m)
}
func (m *OrderBooksRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_OrderBooksRequest.DiscardUnknown(m)
}

var xxx_messageInfo_OrderBooksRequest proto.InternalMessageInfo

func (m *OrderBooksRequest) GetBase() string {
	if m != nil {
		return m.Base
	}
	return ""
}

func (m *OrderBooksRequest) GetQuote() string {
	if m != nil {
		return m.Quote
	}
	return ""
}

func (m *OrderBooksRequest) GetExchanges() []string {
	if m != nil {
		return m.Exchanges
	}
	return nil
}

func init() {
	proto.RegisterEnum("sansigmaprotos.OrderPanel_OrderSide", OrderPanel_OrderSide_name, OrderPanel_OrderSide_value)
	proto.RegisterEnum("sansigmaprotos.Arbitrage_ArbitrageType", Arbitrage_ArbitrageType_name, Arbitrage_ArbitrageType_value)
	proto.RegisterType((*BidAsk)(nil), "sansigmaprotos.BidAsk")
	proto.RegisterType((*OrderBook)(nil), "sansigmaprotos.OrderBook")
	proto.RegisterType((*Spread)(nil), "sansigmaprotos.Spread")
	proto.RegisterType((*Trade)(nil), "sansigmaprotos.Trade")
	proto.RegisterType((*OrderPanel)(nil), "sansigmaprotos.OrderPanel")
	proto.RegisterType((*Arbitrage)(nil), "sansigmaprotos.Arbitrage")
	proto.RegisterType((*AssetPair)(nil), "sansigmaprotos.AssetPair")
	proto.RegisterType((*OrderBooks)(nil), "sansigmaprotos.OrderBooks")
	proto.RegisterType((*OrderBooksRequest)(nil), "sansigmaprotos.OrderBooksRequest")
}

func init() { proto.RegisterFile("trade_model.proto", fileDescriptor_d21abb51656e18d4) }

var fileDescriptor_d21abb51656e18d4 = []byte{
	// 748 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x55, 0x5f, 0x6f, 0x12, 0x4f,
	0x14, 0xed, 0xfe, 0x61, 0x61, 0x2f, 0x7f, 0x7e, 0x74, 0xf2, 0x4b, 0xb3, 0x25, 0xa6, 0xd2, 0x55,
	0x23, 0x6a, 0xd2, 0x18, 0x8c, 0x7f, 0x12, 0x9f, 0x68, 0x43, 0x2a, 0x09, 0x6a, 0x33, 0xb4, 0x31,
	0xc6, 0x44, 0x32, 0xb0, 0x23, 0x9d, 0xc0, 0xb2, 0xdb, 0x9d, 0xa9, 0x91, 0x37, 0x1f, 0xfd, 0x3a,
	0x7e, 0x1d, 0x5f, 0xfc, 0x2a, 0x66, 0x66, 0x16, 0x16, 0x28, 0x34, 0x3e, 0xf8, 0x36, 0xf7, 0xf4,
	0xcc, 0xbd, 0x73, 0x4e, 0xcf, 0x5d, 0x60, 0x57, 0x24, 0x24, 0xa0, 0xfd, 0x30, 0x0a, 0xe8, 0xe4,
	0x28, 0x4e, 0x22, 0x11, 0xa1, 0x0a, 0x27, 0x53, 0xce, 0x46, 0x21, 0x51, 0x25, 0xf7, 0x5f, 0x80,
	0x73, 0xcc, 0x82, 0x16, 0x1f, 0xa3, 0xff, 0x21, 0x17, 0x27, 0x6c, 0x48, 0x3d, 0xa3, 0x6e, 0x34,
	0x0c, 0xac, 0x0b, 0xb4, 0x07, 0x0e, 0x09, 0xa3, 0xeb, 0xa9, 0xf0, 0x4c, 0x05, 0xa7, 0x95, 0xff,
	0xdb, 0x00, 0xf7, 0x7d, 0x12, 0xd0, 0xe4, 0x38, 0x8a, 0xc6, 0xa8, 0x06, 0x05, 0xfa, 0x6d, 0x78,
	0x49, 0xa6, 0x23, 0x7d, 0xdd, 0xc5, 0x8b, 0x1a, 0x21, 0xb0, 0x07, 0x84, 0x53, 0x75, 0xdf, 0xc5,
	0xea, 0x2c, 0x67, 0x5d, 0x5d, 0x47, 0x82, 0x7a, 0x96, 0x02, 0x75, 0x21, 0x67, 0xf1, 0x59, 0x38,
	0x88, 0x26, 0x9e, 0xad, 0xe0, 0xb4, 0x42, 0x8f, 0xc1, 0x1e, 0xb0, 0x80, 0x7b, 0xb9, 0xba, 0xd5,
	0x28, 0x36, 0xf7, 0x8e, 0x56, 0x25, 0x1c, 0xe9, 0xf7, 0x63, 0xc5, 0x91, 0x5c, 0xc2, 0xc7, 0xdc,
	0x73, 0x6e, 0xe7, 0x4a, 0x0e, 0xba, 0x03, 0xae, 0x60, 0x21, 0xe5, 0x82, 0x84, 0xb1, 0x97, 0xaf,
	0x1b, 0x0d, 0x0b, 0x67, 0x80, 0xff, 0xdd, 0x04, 0xa7, 0x17, 0x27, 0x94, 0x04, 0xe8, 0x1e, 0x94,
	0x27, 0xd1, 0x74, 0xd4, 0x5f, 0xd3, 0x58, 0x92, 0x60, 0x7b, 0xae, 0xf3, 0x01, 0x54, 0xf8, 0x65,
	0x94, 0x88, 0x8c, 0xa5, 0x15, 0x97, 0x15, 0xda, 0x5e, 0xb7, 0xc3, 0xda, 0x64, 0x87, 0xbd, 0x6c,
	0xc7, 0x5d, 0x28, 0xc6, 0x49, 0xf4, 0x85, 0x89, 0x7e, 0x42, 0x04, 0xf5, 0x72, 0xca, 0x7f, 0xd0,
	0x10, 0x26, 0xda, 0x2f, 0x5d, 0x79, 0x8e, 0xfe, 0xdf, 0xe8, 0xea, 0x76, 0x5d, 0xe8, 0x11, 0x54,
	0xd9, 0xf4, 0x2b, 0xe5, 0x82, 0x06, 0xfd, 0x21, 0x89, 0x99, 0x20, 0x13, 0xaf, 0xa0, 0xee, 0xff,
	0x37, 0xc7, 0x4f, 0x34, 0xec, 0xff, 0x32, 0x20, 0x77, 0x2e, 0x23, 0x84, 0xaa, 0x60, 0x8d, 0xe9,
	0x2c, 0xd5, 0x2d, 0x8f, 0x68, 0x1f, 0x0a, 0x3a, 0x5d, 0x2c, 0x48, 0x85, 0xe6, 0x55, 0xdd, 0x09,
	0x56, 0xd2, 0x60, 0x6d, 0x49, 0x83, 0xbd, 0x49, 0x7e, 0x6e, 0x59, 0xfe, 0x22, 0x8f, 0xce, 0xe6,
	0x3c, 0xe6, 0x97, 0xf3, 0xb8, 0xaa, 0xb9, 0xb0, 0xae, 0x19, 0x81, 0xcd, 0x59, 0x40, 0x3d, 0x57,
	0x4f, 0x95, 0x67, 0xff, 0x87, 0x09, 0xa0, 0x12, 0x7c, 0x46, 0xa6, 0x74, 0xf2, 0x8f, 0x22, 0xfc,
	0x2a, 0x1d, 0x24, 0xe5, 0x55, 0x9a, 0xf7, 0xd7, 0xe3, 0x97, 0xcd, 0xd3, 0xc7, 0x1e, 0x0b, 0xa8,
	0x7e, 0x4e, 0x26, 0x37, 0xb7, 0x2c, 0xf7, 0x10, 0x4a, 0x01, 0x8d, 0xc5, 0x65, 0x3f, 0x15, 0xad,
	0xbd, 0x28, 0x2a, 0xac, 0xa5, 0x95, 0x1f, 0x42, 0x29, 0x92, 0xbd, 0xfa, 0x2b, 0xbe, 0x14, 0x15,
	0xa6, 0x29, 0xfe, 0x41, 0xba, 0xab, 0x72, 0x1c, 0xca, 0x83, 0x75, 0x7c, 0xf1, 0xb1, 0xba, 0x83,
	0x0a, 0x60, 0xf7, 0xda, 0xdd, 0x6e, 0xd5, 0xf0, 0x7f, 0x9a, 0xe0, 0xb6, 0x92, 0x01, 0x13, 0x09,
	0x19, 0x51, 0xf4, 0x1a, 0x6c, 0x31, 0x8b, 0xb5, 0x0b, 0x95, 0xe6, 0xc3, 0x75, 0x0d, 0x0b, 0x62,
	0x76, 0x3a, 0x9f, 0xc5, 0x14, 0xab, 0x4b, 0xa8, 0x09, 0x8e, 0x9a, 0xcc, 0x3d, 0x53, 0x6d, 0x60,
	0x6d, 0xbb, 0x05, 0x38, 0x65, 0x2e, 0xe5, 0xd8, 0x5a, 0xc9, 0xf1, 0xda, 0x02, 0xd8, 0x37, 0x16,
	0xe0, 0x00, 0x40, 0x47, 0x36, 0xa4, 0x53, 0x31, 0x5f, 0x90, 0x0c, 0x91, 0xd6, 0xa4, 0x0d, 0x08,
	0xe7, 0x54, 0xbb, 0xe7, 0xe2, 0xb4, 0x69, 0x4b, 0x42, 0xfe, 0x4b, 0x28, 0xaf, 0xc8, 0x40, 0x00,
	0x4e, 0xaf, 0xf3, 0xf6, 0xac, 0xdb, 0xae, 0xee, 0xa0, 0x0a, 0xc0, 0x39, 0xee, 0xb4, 0xde, 0x9d,
	0x5e, 0x74, 0x5b, 0xb8, 0x6a, 0xc8, 0xbf, 0x9d, 0x74, 0xf0, 0x49, 0xb7, 0x5d, 0x35, 0xfd, 0xe7,
	0xe0, 0xaa, 0x0e, 0x67, 0x84, 0x25, 0x8b, 0x80, 0x18, 0x9b, 0x02, 0x62, 0x2e, 0x05, 0xc4, 0xff,
	0x90, 0x86, 0x4e, 0x7e, 0x36, 0x39, 0x7a, 0x02, 0x16, 0x99, 0x4c, 0x3c, 0x43, 0x59, 0xb5, 0xbf,
	0xd1, 0x2a, 0x49, 0xc4, 0x92, 0xb5, 0x1a, 0x71, 0x73, 0xfd, 0x73, 0xf5, 0x09, 0x76, 0xb3, 0xc6,
	0x98, 0x5e, 0x5d, 0x53, 0x2e, 0xfe, 0xfe, 0x5d, 0xb2, 0xf9, 0x3c, 0xee, 0xdc, 0xb3, 0xea, 0x56,
	0xc3, 0xc5, 0x19, 0xd0, 0xfc, 0x0c, 0x68, 0xd1, 0xbc, 0x27, 0x12, 0x4a, 0xc2, 0x56, 0xcc, 0xd0,
	0x1b, 0x28, 0x9d, 0x52, 0x91, 0xfd, 0x0a, 0xdc, 0x10, 0xb0, 0x30, 0xa8, 0xb6, 0x5d, 0x9b, 0xbf,
	0xf3, 0xd4, 0x68, 0x0e, 0xa1, 0x9c, 0x3d, 0x5e, 0xb6, 0xc6, 0x50, 0x5e, 0x6e, 0xcd, 0xd1, 0xe1,
	0xd6, 0x06, 0x73, 0xb1, 0xb5, 0xda, 0x76, 0x8a, 0x1c, 0x32, 0x70, 0x14, 0xfc, 0xec, 0x4f, 0x00,
	0x00, 0x00, 0xff, 0xff, 0x9b, 0x4d, 0x7c, 0xac, 0x16, 0x07, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// OrderBookStreamApiClient is the client API for OrderBookStreamApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type OrderBookStreamApiClient interface {
	GetOrderBook(ctx context.Context, in *AssetPair, opts ...grpc.CallOption) (OrderBookStreamApi_GetOrderBookClient, error)
}

type orderBookStreamApiClient struct {
	cc *grpc.ClientConn
}

func NewOrderBookStreamApiClient(cc *grpc.ClientConn) OrderBookStreamApiClient {
	return &orderBookStreamApiClient{cc}
}

func (c *orderBookStreamApiClient) GetOrderBook(ctx context.Context, in *AssetPair, opts ...grpc.CallOption) (OrderBookStreamApi_GetOrderBookClient, error) {
	stream, err := c.cc.NewStream(ctx, &_OrderBookStreamApi_serviceDesc.Streams[0], "/sansigmaprotos.OrderBookStreamApi/GetOrderBook", opts...)
	if err != nil {
		return nil, err
	}
	x := &orderBookStreamApiGetOrderBookClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type OrderBookStreamApi_GetOrderBookClient interface {
	Recv() (*OrderBook, error)
	grpc.ClientStream
}

type orderBookStreamApiGetOrderBookClient struct {
	grpc.ClientStream
}

func (x *orderBookStreamApiGetOrderBookClient) Recv() (*OrderBook, error) {
	m := new(OrderBook)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// OrderBookStreamApiServer is the server API for OrderBookStreamApi service.
type OrderBookStreamApiServer interface {
	GetOrderBook(*AssetPair, OrderBookStreamApi_GetOrderBookServer) error
}

func RegisterOrderBookStreamApiServer(s *grpc.Server, srv OrderBookStreamApiServer) {
	s.RegisterService(&_OrderBookStreamApi_serviceDesc, srv)
}

func _OrderBookStreamApi_GetOrderBook_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(AssetPair)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(OrderBookStreamApiServer).GetOrderBook(m, &orderBookStreamApiGetOrderBookServer{stream})
}

type OrderBookStreamApi_GetOrderBookServer interface {
	Send(*OrderBook) error
	grpc.ServerStream
}

type orderBookStreamApiGetOrderBookServer struct {
	grpc.ServerStream
}

func (x *orderBookStreamApiGetOrderBookServer) Send(m *OrderBook) error {
	return x.ServerStream.SendMsg(m)
}

var _OrderBookStreamApi_serviceDesc = grpc.ServiceDesc{
	ServiceName: "sansigmaprotos.OrderBookStreamApi",
	HandlerType: (*OrderBookStreamApiServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "GetOrderBook",
			Handler:       _OrderBookStreamApi_GetOrderBook_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "trade_model.proto",
}

// OrderBooksApiClient is the client API for OrderBooksApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type OrderBooksApiClient interface {
	GetOrderBooks(ctx context.Context, in *OrderBooksRequest, opts ...grpc.CallOption) (OrderBooksApi_GetOrderBooksClient, error)
}

type orderBooksApiClient struct {
	cc *grpc.ClientConn
}

func NewOrderBooksApiClient(cc *grpc.ClientConn) OrderBooksApiClient {
	return &orderBooksApiClient{cc}
}

func (c *orderBooksApiClient) GetOrderBooks(ctx context.Context, in *OrderBooksRequest, opts ...grpc.CallOption) (OrderBooksApi_GetOrderBooksClient, error) {
	stream, err := c.cc.NewStream(ctx, &_OrderBooksApi_serviceDesc.Streams[0], "/sansigmaprotos.OrderBooksApi/GetOrderBooks", opts...)
	if err != nil {
		return nil, err
	}
	x := &orderBooksApiGetOrderBooksClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type OrderBooksApi_GetOrderBooksClient interface {
	Recv() (*OrderBooks, error)
	grpc.ClientStream
}

type orderBooksApiGetOrderBooksClient struct {
	grpc.ClientStream
}

func (x *orderBooksApiGetOrderBooksClient) Recv() (*OrderBooks, error) {
	m := new(OrderBooks)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// OrderBooksApiServer is the server API for OrderBooksApi service.
type OrderBooksApiServer interface {
	GetOrderBooks(*OrderBooksRequest, OrderBooksApi_GetOrderBooksServer) error
}

func RegisterOrderBooksApiServer(s *grpc.Server, srv OrderBooksApiServer) {
	s.RegisterService(&_OrderBooksApi_serviceDesc, srv)
}

func _OrderBooksApi_GetOrderBooks_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(OrderBooksRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(OrderBooksApiServer).GetOrderBooks(m, &orderBooksApiGetOrderBooksServer{stream})
}

type OrderBooksApi_GetOrderBooksServer interface {
	Send(*OrderBooks) error
	grpc.ServerStream
}

type orderBooksApiGetOrderBooksServer struct {
	grpc.ServerStream
}

func (x *orderBooksApiGetOrderBooksServer) Send(m *OrderBooks) error {
	return x.ServerStream.SendMsg(m)
}

var _OrderBooksApi_serviceDesc = grpc.ServiceDesc{
	ServiceName: "sansigmaprotos.OrderBooksApi",
	HandlerType: (*OrderBooksApiServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "GetOrderBooks",
			Handler:       _OrderBooksApi_GetOrderBooks_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "trade_model.proto",
}
