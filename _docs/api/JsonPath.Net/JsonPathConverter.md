---
layout: "page"
title: "JsonPathConverter Class"
bookmark: "JsonPathConverter"
permalink: "/api/JsonPath.Net/:title/"
order: "9.08.010"
---
**Namespace:** Json.Path

**Inheritance:**
`JsonPathConverter`
 🡒 
`JsonConverter<JsonPath>`
 🡒 
`JsonConverter`
 🡒 
`object`

JSON converter for **Json.Path.JsonPath**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to type **Json.Path.JsonPath**.

#### Declaration

```c#
public override JsonPath Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### Write(Utf8JsonWriter writer, JsonPath value, JsonSerializerOptions options)

Writes a specified value as JSON.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, JsonPath value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | JsonPath | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


