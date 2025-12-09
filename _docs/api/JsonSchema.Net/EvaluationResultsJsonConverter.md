---
layout: "page"
title: "EvaluationResultsJsonConverter Class"
bookmark: "EvaluationResultsJsonConverter"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.042"
---
**Namespace:** Json.Schema

**Inheritance:**
`EvaluationResultsJsonConverter`
 🡒 
`WeaklyTypedJsonConverter<EvaluationResults>`
 🡒 
`JsonConverter<EvaluationResults>`
 🡒 
`JsonConverter`
 🡒 
`object`

**Implemented interfaces:**

- IWeaklyTypedJsonConverter

Default converter for **Json.Schema.EvaluationResults**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |
| **Type** | Type |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to type **Json.Schema.EvaluationResults**.

#### Declaration

```c#
public override EvaluationResults Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### Write(Utf8JsonWriter writer, EvaluationResults value, JsonSerializerOptions options)

Writes a specified value as JSON.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, EvaluationResults value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | EvaluationResults | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


