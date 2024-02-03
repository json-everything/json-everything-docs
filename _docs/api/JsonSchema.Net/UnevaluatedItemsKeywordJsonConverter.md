---
layout: "page"
title: "UnevaluatedItemsKeywordJsonConverter Class"
bookmark: "UnevaluatedItemsKeywordJsonConverter"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.169"
---
**Namespace:** Json.Schema

**Inheritance:**
`UnevaluatedItemsKeywordJsonConverter`
 🡒 
`WeaklyTypedJsonConverter<UnevaluatedItemsKeyword>`
 🡒 
`JsonConverter<UnevaluatedItemsKeyword>`
 🡒 
`JsonConverter`
 🡒 
`object`

**Implemented interfaces:**

- IWeaklyTypedJsonConverter

JSON converter for **Json.Schema.UnevaluatedItemsKeyword**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |
| **Type** | Type |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to type **Json.Schema.UnevaluatedItemsKeyword**.

#### Declaration

```c#
public override UnevaluatedItemsKeyword Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### Write(Utf8JsonWriter writer, UnevaluatedItemsKeyword value, JsonSerializerOptions options)

Writes a specified value as JSON.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, UnevaluatedItemsKeyword value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | UnevaluatedItemsKeyword | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


