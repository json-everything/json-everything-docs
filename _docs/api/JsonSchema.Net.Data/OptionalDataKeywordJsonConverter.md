---
layout: "page"
title: "OptionalDataKeywordJsonConverter Class"
bookmark: "OptionalDataKeywordJsonConverter"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "10.02.010"
---
**Namespace:** Json.Schema.Data

**Inheritance:**
`OptionalDataKeywordJsonConverter`
 🡒 
`WeaklyTypedJsonConverter<OptionalDataKeyword>`
 🡒 
`JsonConverter<OptionalDataKeyword>`
 🡒 
`JsonConverter`
 🡒 
`object`

**Implemented interfaces:**

- IWeaklyTypedJsonConverter

JSON converter for **Json.Schema.Data.DataKeyword**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |
| **Type** | Type |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to type **Json.Schema.Data.DataKeyword**.

#### Declaration

```c#
public override OptionalDataKeyword Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### Write(Utf8JsonWriter writer, OptionalDataKeyword value, JsonSerializerOptions options)

Writes a specified value as JSON.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, OptionalDataKeyword value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | OptionalDataKeyword | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


