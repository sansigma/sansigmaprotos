// Code generated by protoc-gen-go. DO NOT EDIT.
// source: sansigmaprotos/markethub/v1/markethub.proto

package markethub

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	math "math"
	market "sansigmaprotos/type/market"
	orderbook "sansigmaprotos/type/orderbook"
	trade "sansigmaprotos/type/trade"
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

type GetTradesRequest struct {
	Markets []*market.Market `protobuf:"bytes,1,rep,name=markets,proto3" json:"markets,omitempty"`
	// unit is seconds
	VelocityWindowingSize   int64    `protobuf:"varint,2,opt,name=velocity_windowing_size,json=velocityWindowingSize,proto3" json:"velocity_windowing_size,omitempty"`
	VolatilityWindowingSize int64    `protobuf:"varint,3,opt,name=volatility_windowing_size,json=volatilityWindowingSize,proto3" json:"volatility_windowing_size,omitempty"`
	VolumeWindowingSize     int64    `protobuf:"varint,4,opt,name=volume_windowing_size,json=volumeWindowingSize,proto3" json:"volume_windowing_size,omitempty"`
	XXX_NoUnkeyedLiteral    struct{} `json:"-"`
	XXX_unrecognized        []byte   `json:"-"`
	XXX_sizecache           int32    `json:"-"`
}

func (m *GetTradesRequest) Reset()         { *m = GetTradesRequest{} }
func (m *GetTradesRequest) String() string { return proto.CompactTextString(m) }
func (*GetTradesRequest) ProtoMessage()    {}
func (*GetTradesRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_79bb8c5cb47d5d62, []int{0}
}

func (m *GetTradesRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetTradesRequest.Unmarshal(m, b)
}
func (m *GetTradesRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetTradesRequest.Marshal(b, m, deterministic)
}
func (m *GetTradesRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetTradesRequest.Merge(m, src)
}
func (m *GetTradesRequest) XXX_Size() int {
	return xxx_messageInfo_GetTradesRequest.Size(m)
}
func (m *GetTradesRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetTradesRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetTradesRequest proto.InternalMessageInfo

func (m *GetTradesRequest) GetMarkets() []*market.Market {
	if m != nil {
		return m.Markets
	}
	return nil
}

func (m *GetTradesRequest) GetVelocityWindowingSize() int64 {
	if m != nil {
		return m.VelocityWindowingSize
	}
	return 0
}

func (m *GetTradesRequest) GetVolatilityWindowingSize() int64 {
	if m != nil {
		return m.VolatilityWindowingSize
	}
	return 0
}

func (m *GetTradesRequest) GetVolumeWindowingSize() int64 {
	if m != nil {
		return m.VolumeWindowingSize
	}
	return 0
}

type GetTradesResponse struct {
	TradesWithMarket     []*TradesWithMarket `protobuf:"bytes,1,rep,name=trades_with_market,json=tradesWithMarket,proto3" json:"trades_with_market,omitempty"`
	ExchangeStatus       []*ExchangeStatus   `protobuf:"bytes,2,rep,name=exchange_status,json=exchangeStatus,proto3" json:"exchange_status,omitempty"`
	XXX_NoUnkeyedLiteral struct{}            `json:"-"`
	XXX_unrecognized     []byte              `json:"-"`
	XXX_sizecache        int32               `json:"-"`
}

func (m *GetTradesResponse) Reset()         { *m = GetTradesResponse{} }
func (m *GetTradesResponse) String() string { return proto.CompactTextString(m) }
func (*GetTradesResponse) ProtoMessage()    {}
func (*GetTradesResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_79bb8c5cb47d5d62, []int{1}
}

func (m *GetTradesResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetTradesResponse.Unmarshal(m, b)
}
func (m *GetTradesResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetTradesResponse.Marshal(b, m, deterministic)
}
func (m *GetTradesResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetTradesResponse.Merge(m, src)
}
func (m *GetTradesResponse) XXX_Size() int {
	return xxx_messageInfo_GetTradesResponse.Size(m)
}
func (m *GetTradesResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetTradesResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetTradesResponse proto.InternalMessageInfo

func (m *GetTradesResponse) GetTradesWithMarket() []*TradesWithMarket {
	if m != nil {
		return m.TradesWithMarket
	}
	return nil
}

func (m *GetTradesResponse) GetExchangeStatus() []*ExchangeStatus {
	if m != nil {
		return m.ExchangeStatus
	}
	return nil
}

type GetOrderBooksRequest struct {
	Market               []*market.Market `protobuf:"bytes,1,rep,name=market,proto3" json:"market,omitempty"`
	XXX_NoUnkeyedLiteral struct{}         `json:"-"`
	XXX_unrecognized     []byte           `json:"-"`
	XXX_sizecache        int32            `json:"-"`
}

func (m *GetOrderBooksRequest) Reset()         { *m = GetOrderBooksRequest{} }
func (m *GetOrderBooksRequest) String() string { return proto.CompactTextString(m) }
func (*GetOrderBooksRequest) ProtoMessage()    {}
func (*GetOrderBooksRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_79bb8c5cb47d5d62, []int{2}
}

func (m *GetOrderBooksRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetOrderBooksRequest.Unmarshal(m, b)
}
func (m *GetOrderBooksRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetOrderBooksRequest.Marshal(b, m, deterministic)
}
func (m *GetOrderBooksRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetOrderBooksRequest.Merge(m, src)
}
func (m *GetOrderBooksRequest) XXX_Size() int {
	return xxx_messageInfo_GetOrderBooksRequest.Size(m)
}
func (m *GetOrderBooksRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetOrderBooksRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetOrderBooksRequest proto.InternalMessageInfo

func (m *GetOrderBooksRequest) GetMarket() []*market.Market {
	if m != nil {
		return m.Market
	}
	return nil
}

type GetOrderBooksResponse struct {
	All                  []*orderbook.OrderBook `protobuf:"bytes,1,rep,name=all,proto3" json:"all,omitempty"`
	Timestamp            int64                  `protobuf:"varint,2,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	ExchangeStatus       []*ExchangeStatus      `protobuf:"bytes,3,rep,name=exchange_status,json=exchangeStatus,proto3" json:"exchange_status,omitempty"`
	XXX_NoUnkeyedLiteral struct{}               `json:"-"`
	XXX_unrecognized     []byte                 `json:"-"`
	XXX_sizecache        int32                  `json:"-"`
}

func (m *GetOrderBooksResponse) Reset()         { *m = GetOrderBooksResponse{} }
func (m *GetOrderBooksResponse) String() string { return proto.CompactTextString(m) }
func (*GetOrderBooksResponse) ProtoMessage()    {}
func (*GetOrderBooksResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_79bb8c5cb47d5d62, []int{3}
}

func (m *GetOrderBooksResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetOrderBooksResponse.Unmarshal(m, b)
}
func (m *GetOrderBooksResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetOrderBooksResponse.Marshal(b, m, deterministic)
}
func (m *GetOrderBooksResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetOrderBooksResponse.Merge(m, src)
}
func (m *GetOrderBooksResponse) XXX_Size() int {
	return xxx_messageInfo_GetOrderBooksResponse.Size(m)
}
func (m *GetOrderBooksResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetOrderBooksResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetOrderBooksResponse proto.InternalMessageInfo

func (m *GetOrderBooksResponse) GetAll() []*orderbook.OrderBook {
	if m != nil {
		return m.All
	}
	return nil
}

func (m *GetOrderBooksResponse) GetTimestamp() int64 {
	if m != nil {
		return m.Timestamp
	}
	return 0
}

func (m *GetOrderBooksResponse) GetExchangeStatus() []*ExchangeStatus {
	if m != nil {
		return m.ExchangeStatus
	}
	return nil
}

type GetTradesAndOrderBooksRequest struct {
	TradesReq            *GetTradesRequest     `protobuf:"bytes,1,opt,name=trades_req,json=tradesReq,proto3" json:"trades_req,omitempty"`
	OrderbooksReq        *GetOrderBooksRequest `protobuf:"bytes,2,opt,name=orderbooks_req,json=orderbooksReq,proto3" json:"orderbooks_req,omitempty"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *GetTradesAndOrderBooksRequest) Reset()         { *m = GetTradesAndOrderBooksRequest{} }
func (m *GetTradesAndOrderBooksRequest) String() string { return proto.CompactTextString(m) }
func (*GetTradesAndOrderBooksRequest) ProtoMessage()    {}
func (*GetTradesAndOrderBooksRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_79bb8c5cb47d5d62, []int{4}
}

func (m *GetTradesAndOrderBooksRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetTradesAndOrderBooksRequest.Unmarshal(m, b)
}
func (m *GetTradesAndOrderBooksRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetTradesAndOrderBooksRequest.Marshal(b, m, deterministic)
}
func (m *GetTradesAndOrderBooksRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetTradesAndOrderBooksRequest.Merge(m, src)
}
func (m *GetTradesAndOrderBooksRequest) XXX_Size() int {
	return xxx_messageInfo_GetTradesAndOrderBooksRequest.Size(m)
}
func (m *GetTradesAndOrderBooksRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetTradesAndOrderBooksRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetTradesAndOrderBooksRequest proto.InternalMessageInfo

func (m *GetTradesAndOrderBooksRequest) GetTradesReq() *GetTradesRequest {
	if m != nil {
		return m.TradesReq
	}
	return nil
}

func (m *GetTradesAndOrderBooksRequest) GetOrderbooksReq() *GetOrderBooksRequest {
	if m != nil {
		return m.OrderbooksReq
	}
	return nil
}

type GetTradesAndOrderBooksResponse struct {
	TradesRes            *GetTradesResponse     `protobuf:"bytes,1,opt,name=trades_res,json=tradesRes,proto3" json:"trades_res,omitempty"`
	OrderbooksRes        *GetOrderBooksResponse `protobuf:"bytes,2,opt,name=orderbooks_res,json=orderbooksRes,proto3" json:"orderbooks_res,omitempty"`
	ExchangeStatus       []*ExchangeStatus      `protobuf:"bytes,3,rep,name=exchange_status,json=exchangeStatus,proto3" json:"exchange_status,omitempty"`
	XXX_NoUnkeyedLiteral struct{}               `json:"-"`
	XXX_unrecognized     []byte                 `json:"-"`
	XXX_sizecache        int32                  `json:"-"`
}

func (m *GetTradesAndOrderBooksResponse) Reset()         { *m = GetTradesAndOrderBooksResponse{} }
func (m *GetTradesAndOrderBooksResponse) String() string { return proto.CompactTextString(m) }
func (*GetTradesAndOrderBooksResponse) ProtoMessage()    {}
func (*GetTradesAndOrderBooksResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_79bb8c5cb47d5d62, []int{5}
}

func (m *GetTradesAndOrderBooksResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetTradesAndOrderBooksResponse.Unmarshal(m, b)
}
func (m *GetTradesAndOrderBooksResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetTradesAndOrderBooksResponse.Marshal(b, m, deterministic)
}
func (m *GetTradesAndOrderBooksResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetTradesAndOrderBooksResponse.Merge(m, src)
}
func (m *GetTradesAndOrderBooksResponse) XXX_Size() int {
	return xxx_messageInfo_GetTradesAndOrderBooksResponse.Size(m)
}
func (m *GetTradesAndOrderBooksResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetTradesAndOrderBooksResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetTradesAndOrderBooksResponse proto.InternalMessageInfo

func (m *GetTradesAndOrderBooksResponse) GetTradesRes() *GetTradesResponse {
	if m != nil {
		return m.TradesRes
	}
	return nil
}

func (m *GetTradesAndOrderBooksResponse) GetOrderbooksRes() *GetOrderBooksResponse {
	if m != nil {
		return m.OrderbooksRes
	}
	return nil
}

func (m *GetTradesAndOrderBooksResponse) GetExchangeStatus() []*ExchangeStatus {
	if m != nil {
		return m.ExchangeStatus
	}
	return nil
}

type TradeWithAdditionalInfo struct {
	Trade *trade.Trade `protobuf:"bytes,1,opt,name=trade,proto3" json:"trade,omitempty"`
	// 時間あたりの価格変化の移動平均
	Velocity     float64 `protobuf:"fixed64,2,opt,name=velocity,proto3" json:"velocity,omitempty"`
	Acceleration float64 `protobuf:"fixed64,3,opt,name=acceleration,proto3" json:"acceleration,omitempty"`
	// 時間あたりの最大価格差
	Volatility  float64 `protobuf:"fixed64,4,opt,name=volatility,proto3" json:"volatility,omitempty"`
	VolumeBase  float64 `protobuf:"fixed64,5,opt,name=volume_base,json=volumeBase,proto3" json:"volume_base,omitempty"`
	VolumeQuote float64 `protobuf:"fixed64,6,opt,name=volume_quote,json=volumeQuote,proto3" json:"volume_quote,omitempty"`
	// 時間あたりの(buy_volume - sell_volume)/volume
	MomentumRate            float64  `protobuf:"fixed64,7,opt,name=momentum_rate,json=momentumRate,proto3" json:"momentum_rate,omitempty"`
	VelocityWindowingSize   int64    `protobuf:"varint,8,opt,name=velocity_windowing_size,json=velocityWindowingSize,proto3" json:"velocity_windowing_size,omitempty"`
	VolatilityWindowingSize int64    `protobuf:"varint,9,opt,name=volatility_windowing_size,json=volatilityWindowingSize,proto3" json:"volatility_windowing_size,omitempty"`
	VolumeWindowingSize     int64    `protobuf:"varint,10,opt,name=volume_windowing_size,json=volumeWindowingSize,proto3" json:"volume_windowing_size,omitempty"`
	XXX_NoUnkeyedLiteral    struct{} `json:"-"`
	XXX_unrecognized        []byte   `json:"-"`
	XXX_sizecache           int32    `json:"-"`
}

func (m *TradeWithAdditionalInfo) Reset()         { *m = TradeWithAdditionalInfo{} }
func (m *TradeWithAdditionalInfo) String() string { return proto.CompactTextString(m) }
func (*TradeWithAdditionalInfo) ProtoMessage()    {}
func (*TradeWithAdditionalInfo) Descriptor() ([]byte, []int) {
	return fileDescriptor_79bb8c5cb47d5d62, []int{6}
}

func (m *TradeWithAdditionalInfo) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TradeWithAdditionalInfo.Unmarshal(m, b)
}
func (m *TradeWithAdditionalInfo) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TradeWithAdditionalInfo.Marshal(b, m, deterministic)
}
func (m *TradeWithAdditionalInfo) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TradeWithAdditionalInfo.Merge(m, src)
}
func (m *TradeWithAdditionalInfo) XXX_Size() int {
	return xxx_messageInfo_TradeWithAdditionalInfo.Size(m)
}
func (m *TradeWithAdditionalInfo) XXX_DiscardUnknown() {
	xxx_messageInfo_TradeWithAdditionalInfo.DiscardUnknown(m)
}

var xxx_messageInfo_TradeWithAdditionalInfo proto.InternalMessageInfo

func (m *TradeWithAdditionalInfo) GetTrade() *trade.Trade {
	if m != nil {
		return m.Trade
	}
	return nil
}

func (m *TradeWithAdditionalInfo) GetVelocity() float64 {
	if m != nil {
		return m.Velocity
	}
	return 0
}

func (m *TradeWithAdditionalInfo) GetAcceleration() float64 {
	if m != nil {
		return m.Acceleration
	}
	return 0
}

func (m *TradeWithAdditionalInfo) GetVolatility() float64 {
	if m != nil {
		return m.Volatility
	}
	return 0
}

func (m *TradeWithAdditionalInfo) GetVolumeBase() float64 {
	if m != nil {
		return m.VolumeBase
	}
	return 0
}

func (m *TradeWithAdditionalInfo) GetVolumeQuote() float64 {
	if m != nil {
		return m.VolumeQuote
	}
	return 0
}

func (m *TradeWithAdditionalInfo) GetMomentumRate() float64 {
	if m != nil {
		return m.MomentumRate
	}
	return 0
}

func (m *TradeWithAdditionalInfo) GetVelocityWindowingSize() int64 {
	if m != nil {
		return m.VelocityWindowingSize
	}
	return 0
}

func (m *TradeWithAdditionalInfo) GetVolatilityWindowingSize() int64 {
	if m != nil {
		return m.VolatilityWindowingSize
	}
	return 0
}

func (m *TradeWithAdditionalInfo) GetVolumeWindowingSize() int64 {
	if m != nil {
		return m.VolumeWindowingSize
	}
	return 0
}

type TradesWithMarket struct {
	Market               *market.Market             `protobuf:"bytes,1,opt,name=market,proto3" json:"market,omitempty"`
	Trades               []*TradeWithAdditionalInfo `protobuf:"bytes,2,rep,name=trades,proto3" json:"trades,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                   `json:"-"`
	XXX_unrecognized     []byte                     `json:"-"`
	XXX_sizecache        int32                      `json:"-"`
}

func (m *TradesWithMarket) Reset()         { *m = TradesWithMarket{} }
func (m *TradesWithMarket) String() string { return proto.CompactTextString(m) }
func (*TradesWithMarket) ProtoMessage()    {}
func (*TradesWithMarket) Descriptor() ([]byte, []int) {
	return fileDescriptor_79bb8c5cb47d5d62, []int{7}
}

func (m *TradesWithMarket) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TradesWithMarket.Unmarshal(m, b)
}
func (m *TradesWithMarket) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TradesWithMarket.Marshal(b, m, deterministic)
}
func (m *TradesWithMarket) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TradesWithMarket.Merge(m, src)
}
func (m *TradesWithMarket) XXX_Size() int {
	return xxx_messageInfo_TradesWithMarket.Size(m)
}
func (m *TradesWithMarket) XXX_DiscardUnknown() {
	xxx_messageInfo_TradesWithMarket.DiscardUnknown(m)
}

var xxx_messageInfo_TradesWithMarket proto.InternalMessageInfo

func (m *TradesWithMarket) GetMarket() *market.Market {
	if m != nil {
		return m.Market
	}
	return nil
}

func (m *TradesWithMarket) GetTrades() []*TradeWithAdditionalInfo {
	if m != nil {
		return m.Trades
	}
	return nil
}

type ExchangeStatus struct {
	Exchange             string   `protobuf:"bytes,1,opt,name=exchange,proto3" json:"exchange,omitempty"`
	Open                 bool     `protobuf:"varint,2,opt,name=open,proto3" json:"open,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ExchangeStatus) Reset()         { *m = ExchangeStatus{} }
func (m *ExchangeStatus) String() string { return proto.CompactTextString(m) }
func (*ExchangeStatus) ProtoMessage()    {}
func (*ExchangeStatus) Descriptor() ([]byte, []int) {
	return fileDescriptor_79bb8c5cb47d5d62, []int{8}
}

func (m *ExchangeStatus) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ExchangeStatus.Unmarshal(m, b)
}
func (m *ExchangeStatus) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ExchangeStatus.Marshal(b, m, deterministic)
}
func (m *ExchangeStatus) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ExchangeStatus.Merge(m, src)
}
func (m *ExchangeStatus) XXX_Size() int {
	return xxx_messageInfo_ExchangeStatus.Size(m)
}
func (m *ExchangeStatus) XXX_DiscardUnknown() {
	xxx_messageInfo_ExchangeStatus.DiscardUnknown(m)
}

var xxx_messageInfo_ExchangeStatus proto.InternalMessageInfo

func (m *ExchangeStatus) GetExchange() string {
	if m != nil {
		return m.Exchange
	}
	return ""
}

func (m *ExchangeStatus) GetOpen() bool {
	if m != nil {
		return m.Open
	}
	return false
}

func init() {
	proto.RegisterType((*GetTradesRequest)(nil), "ssigma.markethub.v1.GetTradesRequest")
	proto.RegisterType((*GetTradesResponse)(nil), "ssigma.markethub.v1.GetTradesResponse")
	proto.RegisterType((*GetOrderBooksRequest)(nil), "ssigma.markethub.v1.GetOrderBooksRequest")
	proto.RegisterType((*GetOrderBooksResponse)(nil), "ssigma.markethub.v1.GetOrderBooksResponse")
	proto.RegisterType((*GetTradesAndOrderBooksRequest)(nil), "ssigma.markethub.v1.GetTradesAndOrderBooksRequest")
	proto.RegisterType((*GetTradesAndOrderBooksResponse)(nil), "ssigma.markethub.v1.GetTradesAndOrderBooksResponse")
	proto.RegisterType((*TradeWithAdditionalInfo)(nil), "ssigma.markethub.v1.TradeWithAdditionalInfo")
	proto.RegisterType((*TradesWithMarket)(nil), "ssigma.markethub.v1.TradesWithMarket")
	proto.RegisterType((*ExchangeStatus)(nil), "ssigma.markethub.v1.ExchangeStatus")
}

func init() {
	proto.RegisterFile("sansigmaprotos/markethub/v1/markethub.proto", fileDescriptor_79bb8c5cb47d5d62)
}

var fileDescriptor_79bb8c5cb47d5d62 = []byte{
	// 764 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x56, 0x5d, 0x4f, 0xdb, 0x48,
	0x14, 0x5d, 0x27, 0x10, 0xc8, 0xe5, 0x63, 0xd9, 0x61, 0x81, 0x6c, 0xb4, 0x0b, 0x59, 0x23, 0x76,
	0xb3, 0x4b, 0x1b, 0x4a, 0x90, 0xfa, 0xd0, 0xbe, 0x14, 0x0a, 0xa2, 0x95, 0x5a, 0xb5, 0x4c, 0xaa,
	0x22, 0xf5, 0xa1, 0xd1, 0x24, 0xb9, 0x25, 0x2e, 0xb6, 0x27, 0xf1, 0x8c, 0x43, 0xe1, 0x1d, 0xa9,
	0x7f, 0xa6, 0x6f, 0x55, 0xfb, 0x97, 0xda, 0x7f, 0x51, 0x79, 0x3c, 0xb1, 0x71, 0x70, 0x20, 0xa0,
	0xbe, 0x65, 0x66, 0xce, 0x39, 0x3e, 0x77, 0xee, 0x9d, 0xa3, 0xc0, 0xba, 0x60, 0xae, 0xb0, 0x8e,
	0x1c, 0xd6, 0xf1, 0xb8, 0xe4, 0x62, 0xc3, 0x61, 0xde, 0x31, 0xca, 0xb6, 0xdf, 0xd8, 0xe8, 0x6d,
	0xc6, 0x8b, 0x8a, 0x3a, 0x25, 0xf3, 0x42, 0x41, 0x2b, 0xf1, 0x7e, 0x6f, 0xb3, 0x58, 0x1a, 0x50,
	0x90, 0xa7, 0x1d, 0xd4, 0xcc, 0x90, 0x56, 0x5c, 0x49, 0x43, 0x48, 0x8f, 0xb5, 0x50, 0x03, 0x56,
	0xd3, 0x00, 0xdc, 0x6b, 0xa1, 0xd7, 0xe0, 0xfc, 0x38, 0x04, 0x99, 0xdf, 0x0d, 0x98, 0xdb, 0x47,
	0xf9, 0x2a, 0xe0, 0x09, 0x8a, 0x5d, 0x1f, 0x85, 0x24, 0x77, 0x61, 0x22, 0xfc, 0x94, 0x28, 0x18,
	0xa5, 0x6c, 0x79, 0xaa, 0x3a, 0x5f, 0xd1, 0x1e, 0x03, 0x8d, 0xca, 0x73, 0x75, 0x46, 0xfb, 0x18,
	0x72, 0x1f, 0x96, 0x7a, 0x68, 0xf3, 0xa6, 0x25, 0x4f, 0xeb, 0x27, 0x96, 0xdb, 0xe2, 0x27, 0x96,
	0x7b, 0x54, 0x17, 0xd6, 0x19, 0x16, 0x32, 0x25, 0xa3, 0x9c, 0xa5, 0x0b, 0xfd, 0xe3, 0xc3, 0xfe,
	0x69, 0xcd, 0x3a, 0x43, 0xf2, 0x00, 0xfe, 0xe8, 0x71, 0x9b, 0x49, 0xcb, 0x4e, 0x61, 0x66, 0x15,
	0x73, 0x29, 0x06, 0x24, 0xb9, 0x55, 0x58, 0xe8, 0x71, 0xdb, 0x77, 0x70, 0x90, 0x37, 0xa6, 0x78,
	0xf3, 0xe1, 0x61, 0x82, 0x63, 0x7e, 0x31, 0xe0, 0xb7, 0x0b, 0xb5, 0x8a, 0x0e, 0x77, 0x05, 0x92,
	0x1a, 0x10, 0x75, 0x6b, 0xa2, 0x7e, 0x62, 0xc9, 0x76, 0x3d, 0x2c, 0x4a, 0xd7, 0xbd, 0x56, 0x49,
	0xe9, 0x4d, 0x25, 0x14, 0x38, 0xb4, 0x64, 0x5b, 0xdf, 0xc4, 0x9c, 0x1c, 0xd8, 0x21, 0xcf, 0xe0,
	0x57, 0xfc, 0xd0, 0x6c, 0x33, 0xf7, 0x08, 0xeb, 0x42, 0x32, 0xe9, 0x8b, 0x42, 0x46, 0x29, 0xae,
	0xa6, 0x2a, 0xee, 0x69, 0x6c, 0x4d, 0x41, 0xe9, 0x2c, 0x26, 0xd6, 0xe6, 0x63, 0xf8, 0x7d, 0x1f,
	0xe5, 0x8b, 0xa0, 0x75, 0x3b, 0x9c, 0x1f, 0x47, 0x7d, 0x5a, 0x87, 0x5c, 0xc2, 0x6e, 0x6a, 0x9b,
	0x34, 0xc4, 0xfc, 0x64, 0xc0, 0xc2, 0x80, 0x8a, 0xbe, 0x81, 0x32, 0x64, 0x99, 0x6d, 0x6b, 0x8d,
	0xc5, 0x84, 0x46, 0x84, 0xa6, 0x01, 0x84, 0xfc, 0x09, 0x79, 0x69, 0x39, 0x28, 0x24, 0x73, 0x3a,
	0xba, 0xb7, 0xf1, 0x46, 0x5a, 0xd1, 0xd9, 0xdb, 0x17, 0xfd, 0xd5, 0x80, 0xbf, 0xa2, 0x6e, 0x6d,
	0xbb, 0xad, 0xcb, 0xe5, 0xef, 0x02, 0xe8, 0xce, 0x79, 0xd8, 0x2d, 0x18, 0x25, 0x63, 0x68, 0xc7,
	0x06, 0x27, 0x9c, 0xe6, 0x65, 0x7f, 0x49, 0x5e, 0xc2, 0x6c, 0xf4, 0x28, 0x42, 0xa5, 0x8c, 0x52,
	0xfa, 0x6f, 0x98, 0xd2, 0x25, 0x23, 0x74, 0x26, 0x16, 0xa0, 0xd8, 0x35, 0x3f, 0x66, 0x60, 0x79,
	0x98, 0x73, 0x7d, 0xe5, 0x7b, 0x17, 0xac, 0x0b, 0x6d, 0xfd, 0x9f, 0xeb, 0xac, 0x87, 0xdc, 0xd8,
	0xbb, 0x20, 0x07, 0x03, 0xde, 0x85, 0xf6, 0xfe, 0xff, 0x28, 0xde, 0xb5, 0x5c, 0xc2, 0xbc, 0xf8,
	0xc9, 0x4d, 0xfc, 0x9c, 0x85, 0x25, 0x65, 0x3f, 0x78, 0x1b, 0xdb, 0xad, 0x96, 0x25, 0x2d, 0xee,
	0x32, 0xfb, 0xa9, 0xfb, 0x8e, 0x93, 0x32, 0x8c, 0xab, 0x4a, 0x74, 0xf9, 0x24, 0x31, 0x78, 0x8a,
	0x44, 0x43, 0x00, 0x29, 0xc2, 0x64, 0x3f, 0x41, 0x54, 0x81, 0x06, 0x8d, 0xd6, 0xc4, 0x84, 0x69,
	0xd6, 0x6c, 0xa2, 0x8d, 0x1e, 0x0b, 0xb4, 0x55, 0x6e, 0x18, 0x34, 0xb1, 0x47, 0x96, 0x01, 0xe2,
	0x1c, 0x51, 0x09, 0x61, 0xd0, 0x0b, 0x3b, 0x64, 0x05, 0xa6, 0x74, 0x98, 0x34, 0x98, 0xc0, 0xc2,
	0x78, 0x04, 0xf0, 0x1d, 0xdc, 0x61, 0x02, 0xc9, 0xdf, 0x30, 0xad, 0x01, 0x5d, 0x9f, 0x4b, 0x2c,
	0xe4, 0x14, 0x42, 0x93, 0x0e, 0x82, 0x2d, 0xb2, 0x0a, 0x33, 0x0e, 0x77, 0xd0, 0x95, 0xbe, 0x53,
	0xf7, 0x98, 0xc4, 0xc2, 0x44, 0x68, 0xa4, 0xbf, 0x49, 0x99, 0xc4, 0xab, 0x92, 0x72, 0xf2, 0xd6,
	0x49, 0x99, 0xbf, 0x65, 0x52, 0xc2, 0xf0, 0xa4, 0x3c, 0x37, 0x60, 0x6e, 0x30, 0xe5, 0x12, 0x69,
	0x63, 0x5c, 0x93, 0x36, 0x64, 0x17, 0x72, 0xe1, 0x98, 0xea, 0xdc, 0xbb, 0x33, 0x3c, 0x49, 0x2f,
	0x8f, 0x06, 0xd5, 0x5c, 0xf3, 0x11, 0xcc, 0x26, 0x07, 0x2c, 0x18, 0x85, 0xfe, 0x88, 0x29, 0x1b,
	0x79, 0x1a, 0xad, 0x09, 0x81, 0x31, 0xde, 0x41, 0x57, 0x8d, 0xc8, 0x24, 0x55, 0xbf, 0xab, 0xdf,
	0x32, 0x40, 0x42, 0x6b, 0x4f, 0xfc, 0x46, 0x0d, 0xbd, 0x9e, 0xd5, 0xc4, 0xd7, 0x9b, 0xe4, 0x2d,
	0xe4, 0xa3, 0x87, 0x45, 0x46, 0xcb, 0x8c, 0xe2, 0x88, 0xef, 0xd3, 0xfc, 0xe5, 0x9e, 0x41, 0xde,
	0xc3, 0x4c, 0xe2, 0xb5, 0x91, 0xd1, 0xd3, 0xa4, 0x78, 0x83, 0xc7, 0xab, 0xbe, 0x75, 0x6e, 0xc0,
	0x62, 0x7a, 0xdc, 0x90, 0xea, 0xd5, 0x96, 0xd3, 0x52, 0xb5, 0xb8, 0x75, 0x23, 0x4e, 0xec, 0x63,
	0xe7, 0xdf, 0x37, 0x6b, 0x57, 0xfc, 0xed, 0x79, 0x18, 0x2d, 0x1a, 0x39, 0x75, 0xbc, 0xf5, 0x23,
	0x00, 0x00, 0xff, 0xff, 0x73, 0xb3, 0x6d, 0x3c, 0x26, 0x09, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// MarketHubServiceV1Client is the client API for MarketHubServiceV1 service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MarketHubServiceV1Client interface {
	GetTrades(ctx context.Context, in *GetTradesRequest, opts ...grpc.CallOption) (MarketHubServiceV1_GetTradesClient, error)
	GetOrderBooks(ctx context.Context, in *GetOrderBooksRequest, opts ...grpc.CallOption) (MarketHubServiceV1_GetOrderBooksClient, error)
	GetTradesAndOrderBooks(ctx context.Context, in *GetTradesAndOrderBooksRequest, opts ...grpc.CallOption) (MarketHubServiceV1_GetTradesAndOrderBooksClient, error)
}

type marketHubServiceV1Client struct {
	cc *grpc.ClientConn
}

func NewMarketHubServiceV1Client(cc *grpc.ClientConn) MarketHubServiceV1Client {
	return &marketHubServiceV1Client{cc}
}

func (c *marketHubServiceV1Client) GetTrades(ctx context.Context, in *GetTradesRequest, opts ...grpc.CallOption) (MarketHubServiceV1_GetTradesClient, error) {
	stream, err := c.cc.NewStream(ctx, &_MarketHubServiceV1_serviceDesc.Streams[0], "/ssigma.markethub.v1.MarketHubServiceV1/GetTrades", opts...)
	if err != nil {
		return nil, err
	}
	x := &marketHubServiceV1GetTradesClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type MarketHubServiceV1_GetTradesClient interface {
	Recv() (*GetTradesResponse, error)
	grpc.ClientStream
}

type marketHubServiceV1GetTradesClient struct {
	grpc.ClientStream
}

func (x *marketHubServiceV1GetTradesClient) Recv() (*GetTradesResponse, error) {
	m := new(GetTradesResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *marketHubServiceV1Client) GetOrderBooks(ctx context.Context, in *GetOrderBooksRequest, opts ...grpc.CallOption) (MarketHubServiceV1_GetOrderBooksClient, error) {
	stream, err := c.cc.NewStream(ctx, &_MarketHubServiceV1_serviceDesc.Streams[1], "/ssigma.markethub.v1.MarketHubServiceV1/GetOrderBooks", opts...)
	if err != nil {
		return nil, err
	}
	x := &marketHubServiceV1GetOrderBooksClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type MarketHubServiceV1_GetOrderBooksClient interface {
	Recv() (*GetOrderBooksResponse, error)
	grpc.ClientStream
}

type marketHubServiceV1GetOrderBooksClient struct {
	grpc.ClientStream
}

func (x *marketHubServiceV1GetOrderBooksClient) Recv() (*GetOrderBooksResponse, error) {
	m := new(GetOrderBooksResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *marketHubServiceV1Client) GetTradesAndOrderBooks(ctx context.Context, in *GetTradesAndOrderBooksRequest, opts ...grpc.CallOption) (MarketHubServiceV1_GetTradesAndOrderBooksClient, error) {
	stream, err := c.cc.NewStream(ctx, &_MarketHubServiceV1_serviceDesc.Streams[2], "/ssigma.markethub.v1.MarketHubServiceV1/GetTradesAndOrderBooks", opts...)
	if err != nil {
		return nil, err
	}
	x := &marketHubServiceV1GetTradesAndOrderBooksClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type MarketHubServiceV1_GetTradesAndOrderBooksClient interface {
	Recv() (*GetTradesAndOrderBooksResponse, error)
	grpc.ClientStream
}

type marketHubServiceV1GetTradesAndOrderBooksClient struct {
	grpc.ClientStream
}

func (x *marketHubServiceV1GetTradesAndOrderBooksClient) Recv() (*GetTradesAndOrderBooksResponse, error) {
	m := new(GetTradesAndOrderBooksResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// MarketHubServiceV1Server is the server API for MarketHubServiceV1 service.
type MarketHubServiceV1Server interface {
	GetTrades(*GetTradesRequest, MarketHubServiceV1_GetTradesServer) error
	GetOrderBooks(*GetOrderBooksRequest, MarketHubServiceV1_GetOrderBooksServer) error
	GetTradesAndOrderBooks(*GetTradesAndOrderBooksRequest, MarketHubServiceV1_GetTradesAndOrderBooksServer) error
}

func RegisterMarketHubServiceV1Server(s *grpc.Server, srv MarketHubServiceV1Server) {
	s.RegisterService(&_MarketHubServiceV1_serviceDesc, srv)
}

func _MarketHubServiceV1_GetTrades_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(GetTradesRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(MarketHubServiceV1Server).GetTrades(m, &marketHubServiceV1GetTradesServer{stream})
}

type MarketHubServiceV1_GetTradesServer interface {
	Send(*GetTradesResponse) error
	grpc.ServerStream
}

type marketHubServiceV1GetTradesServer struct {
	grpc.ServerStream
}

func (x *marketHubServiceV1GetTradesServer) Send(m *GetTradesResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _MarketHubServiceV1_GetOrderBooks_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(GetOrderBooksRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(MarketHubServiceV1Server).GetOrderBooks(m, &marketHubServiceV1GetOrderBooksServer{stream})
}

type MarketHubServiceV1_GetOrderBooksServer interface {
	Send(*GetOrderBooksResponse) error
	grpc.ServerStream
}

type marketHubServiceV1GetOrderBooksServer struct {
	grpc.ServerStream
}

func (x *marketHubServiceV1GetOrderBooksServer) Send(m *GetOrderBooksResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _MarketHubServiceV1_GetTradesAndOrderBooks_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(GetTradesAndOrderBooksRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(MarketHubServiceV1Server).GetTradesAndOrderBooks(m, &marketHubServiceV1GetTradesAndOrderBooksServer{stream})
}

type MarketHubServiceV1_GetTradesAndOrderBooksServer interface {
	Send(*GetTradesAndOrderBooksResponse) error
	grpc.ServerStream
}

type marketHubServiceV1GetTradesAndOrderBooksServer struct {
	grpc.ServerStream
}

func (x *marketHubServiceV1GetTradesAndOrderBooksServer) Send(m *GetTradesAndOrderBooksResponse) error {
	return x.ServerStream.SendMsg(m)
}

var _MarketHubServiceV1_serviceDesc = grpc.ServiceDesc{
	ServiceName: "ssigma.markethub.v1.MarketHubServiceV1",
	HandlerType: (*MarketHubServiceV1Server)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "GetTrades",
			Handler:       _MarketHubServiceV1_GetTrades_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "GetOrderBooks",
			Handler:       _MarketHubServiceV1_GetOrderBooks_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "GetTradesAndOrderBooks",
			Handler:       _MarketHubServiceV1_GetTradesAndOrderBooks_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "sansigmaprotos/markethub/v1/markethub.proto",
}