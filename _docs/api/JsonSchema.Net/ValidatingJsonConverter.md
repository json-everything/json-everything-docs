---
layout: "page"
title: "ValidatingJsonConverter Class"
bookmark: "ValidatingJsonConverter"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.178"
---
**Namespace:** Json.Schema.Serialization

**Inheritance:**
`ValidatingJsonConverter`
 🡒 
`JsonConverterFactory`
 🡒 
`JsonConverter`
 🡒 
`object`

Adds schema validation for types decorated with the **Json.Schema.Serialization.JsonSchemaAttribute**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Options** | EvaluationOptions | Provides evaluation options for the validator. |
| **OutputFormat** | OutputFormat? | (Obsolete) Specifies the output format. |
| **RequireFormatValidation** | bool? | (Obsolete) Specifies whether the `format` keyword should be required to provide validation results.  Default is false, which just produces annotations for drafts 2019-09 and prior or follows the behavior set forth by the format-annotation vocabulary requirement in the `$vocabulary` keyword in a meta-schema declaring draft 2020-12. |
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

### CreateConverter(Type typeToConvert, JsonSerializerOptions options)

Creates a converter for a specified type.

#### Declaration

```c#
public override JsonConverter CreateConverter(Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| typeToConvert | Type | The type handled by the converter. |
| options | JsonSerializerOptions | The serialization options to use. |


#### Returns

An instance of a **System.Text.Json.Serialization.JsonConverter`1** where `T` is compatible with <paramref name="typeToConvert" />.
If <see langword="null" /> is returned, a **System.NotSupportedException** will be thrown.

### MapType(JsonSchema schema)

Adds an explicit type/schema mapping for types external types which cannot be decorated with **Json.Schema.Serialization.JsonSchemaAttribute**.

#### Declaration

```c#
public static void MapType(JsonSchema schema)
```

| Parameter | Type | Description |
|---|---|---|
| schema | JsonSchema |  |


