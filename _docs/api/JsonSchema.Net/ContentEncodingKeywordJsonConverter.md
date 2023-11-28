---
layout: "page"
title: "ContentEncodingKeywordJsonConverter Class"
bookmark: "ContentEncodingKeywordJsonConverter"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.018"
---
**Namespace:** Json.Schema

**Inheritance:**
`ContentEncodingKeywordJsonConverter`
 🡒 
`JsonConverter<ContentEncodingKeyword>`
 🡒 
`JsonConverter`
 🡒 
`object`

JSON converter for **Json.Schema.ContentEncodingKeyword**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to type **Json.Schema.ContentEncodingKeyword**.

#### Declaration

```c#
public override ContentEncodingKeyword Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### Write(Utf8JsonWriter writer, ContentEncodingKeyword value, JsonSerializerOptions options)

Writes a specified value as JSON.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, ContentEncodingKeyword value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | ContentEncodingKeyword | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


