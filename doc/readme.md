# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [trade_model.proto](#trade_model.proto)
    - [Arbitrage](#sansigmabuffers.Arbitrage)
    - [AssetPair](#sansigmabuffers.AssetPair)
    - [BidAskSchema](#sansigmabuffers.BidAskSchema)
    - [OrderBook](#sansigmabuffers.OrderBook)
    - [OrderBooks](#sansigmabuffers.OrderBooks)
    - [OrderBooksRequest](#sansigmabuffers.OrderBooksRequest)
    - [OrderPanel](#sansigmabuffers.OrderPanel)
    - [Spread](#sansigmabuffers.Spread)
    - [Trade](#sansigmabuffers.Trade)
  
    - [Arbitrage.ArbitrageType](#sansigmabuffers.Arbitrage.ArbitrageType)
    - [OrderPanel.OrderSide](#sansigmabuffers.OrderPanel.OrderSide)
  
  
    - [OrderBookStreamApi](#sansigmabuffers.OrderBookStreamApi)
    - [OrderBooksApi](#sansigmabuffers.OrderBooksApi)
  

- [Scalar Value Types](#scalar-value-types)



<a name="trade_model.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## trade_model.proto



<a name="sansigmabuffers.Arbitrage"></a>

### Arbitrage



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [Arbitrage.ArbitrageType](#sansigmabuffers.Arbitrage.ArbitrageType) |  |  |
| orders | [OrderPanel](#sansigmabuffers.OrderPanel) | repeated |  |
| profit | [double](#double) |  |  |
| profit_rate | [double](#double) |  |  |
| investment | [double](#double) |  |  |
| profit_asset | [string](#string) |  |  |






<a name="sansigmabuffers.AssetPair"></a>

### AssetPair



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base | [string](#string) |  |  |
| quote | [string](#string) |  |  |






<a name="sansigmabuffers.BidAskSchema"></a>

### BidAskSchema



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| price | [double](#double) |  |  |
| amount | [double](#double) |  |  |






<a name="sansigmabuffers.OrderBook"></a>

### OrderBook



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exchange | [string](#string) |  |  |
| base | [string](#string) |  |  |
| quote | [string](#string) |  |  |
| bids | [BidAskSchema](#sansigmabuffers.BidAskSchema) | repeated |  |
| asks | [BidAskSchema](#sansigmabuffers.BidAskSchema) | repeated |  |
| timestamp | [int64](#int64) |  |  |
| key | [string](#string) |  |  |






<a name="sansigmabuffers.OrderBooks"></a>

### OrderBooks



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| all | [OrderBook](#sansigmabuffers.OrderBook) | repeated |  |
| timestamp | [int64](#int64) |  |  |






<a name="sansigmabuffers.OrderBooksRequest"></a>

### OrderBooksRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base | [string](#string) |  |  |
| quote | [string](#string) |  |  |
| exclude_exchange | [string](#string) | repeated |  |






<a name="sansigmabuffers.OrderPanel"></a>

### OrderPanel



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exchange | [string](#string) |  |  |
| base | [string](#string) |  |  |
| quote | [string](#string) |  |  |
| side | [OrderPanel.OrderSide](#sansigmabuffers.OrderPanel.OrderSide) |  |  |
| price | [double](#double) |  |  |
| depth_amount | [double](#double) |  |  |
| order_amount | [double](#double) |  |  |






<a name="sansigmabuffers.Spread"></a>

### Spread



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| long_exchange | [string](#string) |  |  |
| short_exchange | [string](#string) |  |  |
| base | [string](#string) |  |  |
| quote | [string](#string) |  |  |
| profit_rate | [double](#double) |  |  |
| profit | [double](#double) |  |  |
| timestamp | [int64](#int64) |  |  |
| invested_capital | [double](#double) |  |  |






<a name="sansigmabuffers.Trade"></a>

### Trade



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| trade_id | [string](#string) |  |  |
| exchange | [string](#string) |  |  |
| base | [string](#string) |  |  |
| quote | [string](#string) |  |  |
| price | [double](#double) |  |  |
| amount | [double](#double) |  |  |
| timestamp | [int64](#int64) |  |  |
| side | [string](#string) |  |  |





 


<a name="sansigmabuffers.Arbitrage.ArbitrageType"></a>

### Arbitrage.ArbitrageType


| Name | Number | Description |
| ---- | ------ | ----------- |
| SIMPLE | 0 |  |
| TRIANGULAR | 1 |  |
| CIRCLE | 2 |  |



<a name="sansigmabuffers.OrderPanel.OrderSide"></a>

### OrderPanel.OrderSide


| Name | Number | Description |
| ---- | ------ | ----------- |
| BUY | 0 |  |
| SELL | 1 |  |


 

 


<a name="sansigmabuffers.OrderBookStreamApi"></a>

### OrderBookStreamApi


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetOrderBook | [AssetPair](#sansigmabuffers.AssetPair) | [OrderBook](#sansigmabuffers.OrderBook) stream |  |


<a name="sansigmabuffers.OrderBooksApi"></a>

### OrderBooksApi


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetOrderBooks | [OrderBooksRequest](#sansigmabuffers.OrderBooksRequest) | [OrderBooks](#sansigmabuffers.OrderBooks) stream |  |

 



## Scalar Value Types

| .proto Type | Notes | C++ Type | Java Type | Python Type |
| ----------- | ----- | -------- | --------- | ----------- |
| <a name="double" /> double |  | double | double | float |
| <a name="float" /> float |  | float | float | float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long |
| <a name="bool" /> bool |  | bool | boolean | boolean |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str |

