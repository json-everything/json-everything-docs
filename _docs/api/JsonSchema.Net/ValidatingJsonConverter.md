---
layout: "page"
title: "ValidatingJsonConverter Class"
bookmark: "ValidatingJsonConverter"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.110"
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
| **OutputFormat** | OutputFormat? | Specifies the output format. |
| **RequireFormatValidation** | bool? | Specifies whether the `format` keyword should be required to provide<br>validation results.  Default is false, which just produces annotations<br>for drafts 2019-09 and prior or follows the behavior set forth by the<br>format-annotation vocabulary requirement in the `$vocabulary` keyword in<br>a meta-schema declaring draft 2020-12. |

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

