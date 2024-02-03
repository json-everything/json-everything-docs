---
layout: "page"
title: "OrderingKeywordJsonConverter Class"
bookmark: "OrderingKeywordJsonConverter"
permalink: "/api/JsonSchema.Net.ArrayExt/:title/"
order: "10.03.005"
---
**Namespace:** Json.Schema.ArrayExt

**Inheritance:**
`OrderingKeywordJsonConverter`
 🡒 
`WeaklyTypedJsonConverter<OrderingKeyword>`
 🡒 
`JsonConverter<OrderingKeyword>`
 🡒 
`JsonConverter`
 🡒 
`object`

**Implemented interfaces:**

- IWeaklyTypedJsonConverter

JSON converter for **Json.Schema.ArrayExt.OrderingKeyword**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |
| **Type** | Type |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to type **Json.Schema.ArrayExt.OrderingKeyword**.

#### Declaration

```c#
public override OrderingKeyword Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### Write(Utf8JsonWriter writer, OrderingKeyword value, JsonSerializerOptions options)

Writes a specified value as JSON.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, OrderingKeyword value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | OrderingKeyword | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


