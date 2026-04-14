---
layout: "page"
title: "ValidatingJsonConverter<T> Class"
bookmark: "ValidatingJsonConverter`1"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.113"
---
**Namespace:** Json.Schema.Serialization

**Inheritance:**
`ValidatingJsonConverter<T>`
 🡒 
`WeaklyTypedJsonConverter<T>`
 🡒 
`JsonConverter<T>`
 🡒 
`JsonConverter`
 🡒 
`object`

**Implemented interfaces:**

- IWeaklyTypedJsonConverter
- IValidatingJsonConverter

DO NOT USE THIS CLASS DIRECTLY.  INSTEAD, REGISTER THE NON-GENERIC CONVERTER WITH YOUR SERIALIZER OPTIONS.
Validates JSON against a schema during deserialization.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |
| **Options** | EvaluationOptions | Gets or sets the evaluation options for schema validation. |
| **Type** | Type |  |

## Constructors

### ValidatingJsonConverter\<T\>(JsonSchema schema, Func\<JsonSerializerOptions, JsonSerializerOptions\> optionsFactory)

Creates a new instance of **Json.Schema.Serialization.ValidatingJsonConverter`1**.

#### Declaration

```c#
public ValidatingJsonConverter`1(JsonSchema schema, Func<JsonSerializerOptions, JsonSerializerOptions> optionsFactory)
```

| Parameter | Type | Description |
|---|---|---|
| schema | JsonSchema | The JSON schema to validate against. |
| optionsFactory | Func\<JsonSerializerOptions, JsonSerializerOptions\> | A factory function to create serializer options without validating converters to avoid recursion. |


## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and validates JSON data against the schema.

#### Declaration

```c#
public override T Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader to use for reading JSON. |
| typeToConvert | Type | The type to convert to. |
| options | JsonSerializerOptions | The serializer options. |


#### Returns

The deserialized object.

### ReadAsPropertyName(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads a dictionary key from a JSON property name.

#### Declaration

```c#
public override T ReadAsPropertyName(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The **System.Text.Json.Utf8JsonReader** to read from. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | The options to use when reading the value. |


#### Returns

The value that was converted.

### Write(Utf8JsonWriter writer, T value, JsonSerializerOptions options)

Writes the JSON representation of the object.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, T value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to use for writing JSON. |
| value | T | The value to serialize. |
| options | JsonSerializerOptions | The serializer options. |


### WriteAsPropertyName(Utf8JsonWriter writer, T value, JsonSerializerOptions options)

Writes a dictionary key as a JSON property name.

#### Declaration

```c#
public override void WriteAsPropertyName(Utf8JsonWriter writer, T value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The **System.Text.Json.Utf8JsonWriter** to write to. |
| value | T | The value to convert. The value of **System.Text.Json.Serialization.JsonConverter`1.HandleNull** determines if the converter handles \<see langword="null" /\> values. |
| options | JsonSerializerOptions | The options to use when writing the value. |


