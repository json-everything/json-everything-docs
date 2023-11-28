---
layout: "page"
title: "UniqueKeysKeywordJsonConverter Class"
bookmark: "UniqueKeysKeywordJsonConverter"
permalink: "/api/JsonSchema.Net.UniqueKeys/:title/"
order: "10.03.004"
---
**Namespace:** Json.Schema.UniqueKeys

**Inheritance:**
`UniqueKeysKeywordJsonConverter`
 🡒 
`JsonConverter<UniqueKeysKeyword>`
 🡒 
`JsonConverter`
 🡒 
`object`

JSON converter for **Json.Schema.UniqueKeys.UniqueKeysKeyword**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to type **Json.Schema.UniqueKeys.UniqueKeysKeyword**.

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


