---
layout: "page"
title: "ContentMediaTypeKeywordJsonConverter Class"
bookmark: "ContentMediaTypeKeywordJsonConverter"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.020"
---
**Namespace:** Json.Schema

**Inheritance:**
`ContentMediaTypeKeywordJsonConverter`
 🡒 
`JsonConverter<ContentMediaTypeKeyword>`
 🡒 
`JsonConverter`
 🡒 
`object`

JSON converter for **Json.Schema.ContentMediaTypeKeyword**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to type **Json.Schema.ContentMediaTypeKeyword**.

#### Declaration

```c#
public override ContentMediaTypeKeyword Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### Write(Utf8JsonWriter writer, ContentMediaTypeKeyword value, JsonSerializerOptions options)

Writes a specified value as JSON.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, ContentMediaTypeKeyword value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | ContentMediaTypeKeyword | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


