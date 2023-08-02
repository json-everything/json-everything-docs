---
layout: "page"
title: "Pre202012EvaluationResultsJsonConverter Class"
bookmark: "Pre202012EvaluationResultsJsonConverter"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.077"
---
**Namespace:** Json.Schema

**Inheritance:**
`Pre202012EvaluationResultsJsonConverter`
 🡒 
`JsonConverter<EvaluationResults>`
 🡒 
`JsonConverter`
 🡒 
`object`

Produces output formats specified by 2019-09 and 2020-12.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |

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


