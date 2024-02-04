---
layout: "page"
title: "UniqueKeysKeywordJsonConverter Class"
bookmark: "UniqueKeysKeywordJsonConverter"
permalink: "/api/JsonSchema.Net.ArrayExt/:title/"
order: "10.03.008"
---
**Namespace:** Json.Schema.ArrayExt

**Inheritance:**
`UniqueKeysKeywordJsonConverter`
 🡒 
`WeaklyTypedJsonConverter<UniqueKeysKeyword>`
 🡒 
`JsonConverter<UniqueKeysKeyword>`
 🡒 
`JsonConverter`
 🡒 
`object`

**Implemented interfaces:**

- IWeaklyTypedJsonConverter

JSON converter for **Json.Schema.ArrayExt.UniqueKeysKeyword**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |
| **Type** | Type |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to type **Json.Schema.ArrayExt.UniqueKeysKeyword**.

#### Declaration

```c#
public override UniqueKeysKeyword Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### Write(Utf8JsonWriter writer, UniqueKeysKeyword value, JsonSerializerOptions options)

Writes a specified value as JSON.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, UniqueKeysKeyword value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | UniqueKeysKeyword | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


