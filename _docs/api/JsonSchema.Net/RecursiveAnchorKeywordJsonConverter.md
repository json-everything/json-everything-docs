---
layout: "page"
title: "RecursiveAnchorKeywordJsonConverter Class"
bookmark: "RecursiveAnchorKeywordJsonConverter"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.138"
---
**Namespace:** Json.Schema

**Inheritance:**
`RecursiveAnchorKeywordJsonConverter`
 🡒 
`JsonConverter<RecursiveAnchorKeyword>`
 🡒 
`JsonConverter`
 🡒 
`object`

JSON converter for **Json.Schema.RecursiveAnchorKeyword**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to type **Json.Schema.RecursiveAnchorKeyword**.

#### Declaration

```c#
public override RecursiveAnchorKeyword Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### Write(Utf8JsonWriter writer, RecursiveAnchorKeyword value, JsonSerializerOptions options)

Writes a specified value as JSON.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, RecursiveAnchorKeyword value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | RecursiveAnchorKeyword | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


