---
layout: "page"
title: "PropertyNamesKeywordJsonConverter Class"
bookmark: "PropertyNamesKeywordJsonConverter"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.134"
---
**Namespace:** Json.Schema

**Inheritance:**
`PropertyNamesKeywordJsonConverter`
 🡒 
`JsonConverter<PropertyNamesKeyword>`
 🡒 
`JsonConverter`
 🡒 
`object`

JSON converter for **Json.Schema.PropertyNamesKeyword**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to type **Json.Schema.PropertyNamesKeyword**.

#### Declaration

```c#
public override PropertyNamesKeyword Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### Write(Utf8JsonWriter writer, PropertyNamesKeyword value, JsonSerializerOptions options)

Writes a specified value as JSON.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, PropertyNamesKeyword value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | PropertyNamesKeyword | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


