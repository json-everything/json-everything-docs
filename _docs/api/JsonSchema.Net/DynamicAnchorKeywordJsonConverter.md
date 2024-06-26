---
layout: "page"
title: "DynamicAnchorKeywordJsonConverter Class"
bookmark: "DynamicAnchorKeywordJsonConverter"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.044"
---
**Namespace:** Json.Schema

**Inheritance:**
`DynamicAnchorKeywordJsonConverter`
 🡒 
`WeaklyTypedJsonConverter<DynamicAnchorKeyword>`
 🡒 
`JsonConverter<DynamicAnchorKeyword>`
 🡒 
`JsonConverter`
 🡒 
`object`

**Implemented interfaces:**

- IWeaklyTypedJsonConverter

JSON converter for **Json.Schema.DynamicAnchorKeyword**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |
| **Type** | Type |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to type **Json.Schema.DynamicAnchorKeyword**.

#### Declaration

```c#
public override DynamicAnchorKeyword Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### Write(Utf8JsonWriter writer, DynamicAnchorKeyword value, JsonSerializerOptions options)

Writes a specified value as JSON.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, DynamicAnchorKeyword value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | DynamicAnchorKeyword | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


