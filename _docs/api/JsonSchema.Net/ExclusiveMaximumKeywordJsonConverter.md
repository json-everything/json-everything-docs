---
layout: "page"
title: "ExclusiveMaximumKeywordJsonConverter Class"
bookmark: "ExclusiveMaximumKeywordJsonConverter"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.058"
---
**Namespace:** Json.Schema

**Inheritance:**
`ExclusiveMaximumKeywordJsonConverter`
 🡒 
`JsonConverter<ExclusiveMaximumKeyword>`
 🡒 
`JsonConverter`
 🡒 
`object`

JSON converter for **Json.Schema.ExclusiveMaximumKeyword**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to type **Json.Schema.ExclusiveMaximumKeyword**.

#### Declaration

```c#
public override ExclusiveMaximumKeyword Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### Write(Utf8JsonWriter writer, ExclusiveMaximumKeyword value, JsonSerializerOptions options)

Writes a specified value as JSON.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, ExclusiveMaximumKeyword value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | ExclusiveMaximumKeyword | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


