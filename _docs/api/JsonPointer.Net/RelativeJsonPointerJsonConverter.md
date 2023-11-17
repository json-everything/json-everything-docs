---
layout: "page"
title: "RelativeJsonPointerJsonConverter Class"
bookmark: "RelativeJsonPointerJsonConverter"
permalink: "/api/JsonPointer.Net/:title/"
order: "9.10.011"
---
**Namespace:** Json.Pointer

**Inheritance:**
`RelativeJsonPointerJsonConverter`
 🡒 
`JsonConverter<RelativeJsonPointer>`
 🡒 
`JsonConverter`
 🡒 
`object`

Converter for **Json.Pointer.RelativeJsonPointer**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to type **Json.Pointer.RelativeJsonPointer**.

#### Declaration

```c#
public override RelativeJsonPointer Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### Write(Utf8JsonWriter writer, RelativeJsonPointer value, JsonSerializerOptions options)

Writes a specified value as JSON.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, RelativeJsonPointer value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | RelativeJsonPointer | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


