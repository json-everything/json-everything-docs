---
layout: "page"
title: "AnchorKeywordJsonConverter Class"
bookmark: "AnchorKeywordJsonConverter"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.007"
---
**Namespace:** Json.Schema

**Inheritance:**
`AnchorKeywordJsonConverter`
 🡒 
`JsonConverter<AnchorKeyword>`
 🡒 
`JsonConverter`
 🡒 
`object`

JSON converter for **Json.Schema.AnchorKeyword**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to type **Json.Schema.AnchorKeyword**.

#### Declaration

```c#
public override AnchorKeyword Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### Write(Utf8JsonWriter writer, AnchorKeyword value, JsonSerializerOptions options)

Writes a specified value as JSON.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, AnchorKeyword value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | AnchorKeyword | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


