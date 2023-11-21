---
layout: "page"
title: "ExternalDocsKeywordJsonConverter Class"
bookmark: "ExternalDocsKeywordJsonConverter"
permalink: "/api/JsonSchema.Net.OpenApi/:title/"
order: "9.04.005"
---
**Namespace:** Json.Schema.OpenApi

**Inheritance:**
`ExternalDocsKeywordJsonConverter`
 🡒 
`JsonConverter<ExternalDocsKeyword>`
 🡒 
`JsonConverter`
 🡒 
`object`

JSON converter for **Json.Schema.OpenApi.ExternalDocsKeyword**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to type **Json.Schema.OpenApi.ExternalDocsKeyword**.

#### Declaration

```c#
public override ExternalDocsKeyword Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### Write(Utf8JsonWriter writer, ExternalDocsKeyword value, JsonSerializerOptions options)

Writes a specified value as JSON.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, ExternalDocsKeyword value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | ExternalDocsKeyword | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


