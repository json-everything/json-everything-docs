---
layout: "page"
title: "OpenApiDocumentJsonConverter Class"
bookmark: "OpenApiDocumentJsonConverter"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.024"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`OpenApiDocumentJsonConverter`
 🡒 
`JsonConverter<OpenApiDocument>`
 🡒 
`JsonConverter`
 🡒 
`object`

JSON converter for **Json.Schema.Api.OpenApi.OpenApiDocument**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |
| **Type** | Type |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to an **Json.Schema.Api.OpenApi.OpenApiDocument**.

#### Declaration

```c#
public override OpenApiDocument Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### Write(Utf8JsonWriter writer, OpenApiDocument value, JsonSerializerOptions options)

Writes a specified value as JSON.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, OpenApiDocument value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | OpenApiDocument | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


