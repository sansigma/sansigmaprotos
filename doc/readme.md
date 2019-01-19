# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [trade_model.proto](#trade_model.proto)
    - [Arbitrage](#sansigmaprotos.Arbitrage)
    - [AssetPair](#sansigmaprotos.AssetPair)
    - [BidAsk](#sansigmaprotos.BidAsk)
    - [OrderBook](#sansigmaprotos.OrderBook)
    - [OrderBooks](#sansigmaprotos.OrderBooks)
    - [OrderBooksRequest](#sansigmaprotos.OrderBooksRequest)
    - [OrderPanel](#sansigmaprotos.OrderPanel)
    - [Spread](#sansigmaprotos.Spread)
    - [Trade](#sansigmaprotos.Trade)
  
    - [Arbitrage.ArbitrageType](#sansigmaprotos.Arbitrage.ArbitrageType)
    - [OrderPanel.OrderSide](#sansigmaprotos.OrderPanel.OrderSide)
  
  
    - [OrderBookStreamApi](#sansigmaprotos.OrderBookStreamApi)
    - [OrderBooksApi](#sansigmaprotos.OrderBooksApi)
  

- [Scalar Value Types](#scalar-value-types)



<a name="trade_model.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## trade_model.proto



<a name="sansigmaprotos.Arbitrage"></a>

### Arbitrage



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [Arbitrage.ArbitrageType](#sansigmaprotos.Arbitrage.ArbitrageType) |  |  |
| orders | [OrderPanel](#sansigmaprotos.OrderPanel) | repeated |  |
| profit | [double](#double) |  |  |
| profit_rate | [double](#double) |  |  |
| investment | [double](#double) |  |  |
| profit_asset | [string](#string) |  |  |






<a name="sansigmaprotos.AssetPair"></a>

### AssetPair



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base | [string](#string) |  |  |
| quote | [string](#string) |  |  |






<a name="sansigmaprotos.BidAsk"></a>

### BidAsk



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| price | [double](#double) |  |  |
| amount | [double](#double) |  |  |






<a name="sansigmaprotos.OrderBook"></a>

### OrderBook



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exchange | [string](#string) |  |  |
| base | [string](#string) |  |  |
| quote | [string](#string) |  |  |
| symbol | [string](#string) |  |  |
| bids | [BidAsk](#sansigmaprotos.BidAsk) | repeated |  |
| asks | [BidAsk](#sansigmaprotos.BidAsk) | repeated |  |
| timestamp | [int64](#int64) |  |  |






<a name="sansigmaprotos.OrderBooks"></a>

### OrderBooks



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| all | [OrderBook](#sansigmaprotos.OrderBook) | repeated |  |
| timestamp | [int64](#int64) |  |  |






<a name="sansigmaprotos.OrderBooksRequest"></a>

### OrderBooksRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base | [string](#string) |  |  |
| quote | [string](#string) |  |  |
| exchanges | [string](#string) | repeated |  |






<a name="sansigmaprotos.OrderPanel"></a>

### OrderPanel



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exchange | [string](#string) |  |  |
| base | [string](#string) |  |  |
| quote | [string](#string) |  |  |
| side | [OrderPanel.OrderSide](#sansigmaprotos.OrderPanel.OrderSide) |  |  |
| price | [double](#double) |  |  |
| depth_amount | [double](#double) |  |  |
| order_amount | [double](#double) |  |  |






<a name="sansigmaprotos.Spread"></a>

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






<a name="sansigmaprotos.Trade"></a>

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





 


<a name="sansigmaprotos.Arbitrage.ArbitrageType"></a>

### Arbitrage.ArbitrageType


| Name | Number | Description |
| ---- | ------ | ----------- |
| SIMPLE | 0 |  |
| TRIANGULAR | 1 |  |
| CIRCLE | 2 |  |



<a name="sansigmaprotos.OrderPanel.OrderSide"></a>

### OrderPanel.OrderSide


| Name | Number | Description |
| ---- | ------ | ----------- |
| BUY | 0 |  |
| SELL | 1 |  |


 

 


<a name="sansigmaprotos.OrderBookStreamApi"></a>

### OrderBookStreamApi


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetOrderBook | [AssetPair](#sansigmaprotos.AssetPair) | [OrderBook](#sansigmaprotos.OrderBook) stream |  |


<a name="sansigmaprotos.OrderBooksApi"></a>

### OrderBooksApi


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetOrderBooks | [OrderBooksRequest](#sansigmaprotos.OrderBooksRequest) | [OrderBooks](#sansigmaprotos.OrderBooks) stream |  |

 



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

