---
layout: "page"
title: "JsonSchemaJsonConverter Class"
bookmark: "JsonSchemaJsonConverter"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.065"
---
**Namespace:** Json.Schema

**Inheritance:**
`JsonSchemaJsonConverter`
 🡒 
`JsonConverter<JsonSchema>`
 🡒 
`JsonConverter`
 🡒 
`object`

Provides custom serialization and deserialization logic for **Json.Schema.JsonSchema** objects when using
System.Text.Json.

## Remarks

Use this converter to enable reading and writing of **Json.Schema.JsonSchema** instances with

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |
| **Type** | Type |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Deserializes a JSON value from the specified reader into a **Json.Schema.JsonSchema** instance.

#### Declaration

```c#
public override JsonSchema Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The **System.Text.Json.Utf8JsonReader** positioned at the JSON value to read. The reader must be at the start of a valid |
| typeToConvert | Type | The type to convert the JSON value to. This parameter is ignored; the method always returns a **Json.Schema.JsonSchema**. |
| options | JsonSerializerOptions | The serializer options to use when reading the JSON value. Must not be \<see langword="null" /\>. |


#### Returns

A **Json.Schema.JsonSchema** instance representing the deserialized schema, or <see langword="null" /> if the JSON

### Write(Utf8JsonWriter writer, JsonSchema value, JsonSerializerOptions options)

Writes the specified JSON schema to the provided writer using the given serializer options.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, JsonSchema value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to which the JSON schema will be written. Must not be null. |
| value | JsonSchema | The JSON schema to write. Must not be null. |
| options | JsonSerializerOptions | The serializer options to use when writing the JSON schema. Must not be null. |


