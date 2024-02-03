---
layout: "page"
title: "ExamplesKeywordJsonConverter Class"
bookmark: "ExamplesKeywordJsonConverter"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.058"
---
**Namespace:** Json.Schema

**Inheritance:**
`ExamplesKeywordJsonConverter`
 🡒 
`WeaklyTypedJsonConverter<ExamplesKeyword>`
 🡒 
`JsonConverter<ExamplesKeyword>`
 🡒 
`JsonConverter`
 🡒 
`object`

**Implemented interfaces:**

- IWeaklyTypedJsonConverter

JSON converter for **Json.Schema.ExamplesKeyword**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |
| **Type** | Type |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to type **Json.Schema.ExamplesKeyword**.

#### Declaration

```c#
public override ExamplesKeyword Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### Write(Utf8JsonWriter writer, ExamplesKeyword value, JsonSerializerOptions options)

Writes a specified value as JSON.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, ExamplesKeyword value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | ExamplesKeyword | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


