---
layout: "page"
title: "GenerativeValidatingJsonConverter Class"
bookmark: "GenerativeValidatingJsonConverter"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.055.026"
---
**Namespace:** Json.Schema.Generation.Serialization

**Inheritance:**
`GenerativeValidatingJsonConverter`
 🡒 
`ValidatingJsonConverter`
 🡒 
`JsonConverterFactory`
 🡒 
`JsonConverter`
 🡒 
`object`

Extends **Json.Schema.Serialization.ValidatingJsonConverter** to also allow for
schema generation using **Json.Schema.Generation.Serialization.GenerateJsonSchemaAttribute**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **BuildOptions** | BuildOptions | Gets the build options used for the schema build step. |
| **EvaluationOptions** | EvaluationOptions |  |
| **GeneratorConfiguration** | SchemaGeneratorConfiguration | Provides options for the generator. |
| **Type** | Type |  |

## Methods

### CanConvert(Type typeToConvert)

When overridden in a derived class, determines whether the converter instance can convert the specified object type.

#### Declaration

```c#
public override bool CanConvert(Type typeToConvert)
```

| Parameter | Type | Description |
|---|---|---|
| typeToConvert | Type | The type of the object to check whether it can be converted by this converter instance. |


#### Returns

<see langword="true" /> if the instance can convert the specified object type; otherwise, <see langword="false" />.

