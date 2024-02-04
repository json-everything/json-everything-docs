---
layout: "page"
title: "DiscriminatorKeywordJsonConverter Class"
bookmark: "DiscriminatorKeywordJsonConverter"
permalink: "/api/JsonSchema.Net.OpenApi/:title/"
order: "10.04.001"
---
**Namespace:** Json.Schema.OpenApi

**Inheritance:**
`DiscriminatorKeywordJsonConverter`
 🡒 
`WeaklyTypedJsonConverter<DiscriminatorKeyword>`
 🡒 
`JsonConverter<DiscriminatorKeyword>`
 🡒 
`JsonConverter`
 🡒 
`object`

**Implemented interfaces:**

- IWeaklyTypedJsonConverter

JSON converter for **Json.Schema.OpenApi.DiscriminatorKeyword**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |
| **Type** | Type |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to type **Json.Schema.OpenApi.DiscriminatorKeyword**.

#### Declaration

```c#
public override DiscriminatorKeyword Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### Write(Utf8JsonWriter writer, DiscriminatorKeyword value, JsonSerializerOptions options)

Writes a specified value as JSON.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, DiscriminatorKeyword value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | DiscriminatorKeyword | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


