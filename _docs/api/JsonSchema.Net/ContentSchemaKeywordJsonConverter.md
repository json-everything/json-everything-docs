---
layout: "page"
title: "ContentSchemaKeywordJsonConverter Class"
bookmark: "ContentSchemaKeywordJsonConverter"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.022"
---
**Namespace:** Json.Schema

**Inheritance:**
`ContentSchemaKeywordJsonConverter`
 🡒 
`JsonConverter<ContentSchemaKeyword>`
 🡒 
`JsonConverter`
 🡒 
`object`

JSON converter for **Json.Schema.ContentSchemaKeyword**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to type **Json.Schema.ContentSchemaKeyword**.

#### Declaration

```c#
public override ContentSchemaKeyword Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### Write(Utf8JsonWriter writer, ContentSchemaKeyword value, JsonSerializerOptions options)

Writes a specified value as JSON.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, ContentSchemaKeyword value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | ContentSchemaKeyword | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


