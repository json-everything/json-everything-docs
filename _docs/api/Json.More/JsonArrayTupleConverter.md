---
layout: "page"
title: "JsonArrayTupleConverter Class"
bookmark: "JsonArrayTupleConverter"
permalink: "/api/Json.More/:title/"
order: "10.12.002"
---
**Namespace:** Json.More

**Inheritance:**
`JsonArrayTupleConverter`
 🡒 
`JsonConverterFactory`
 🡒 
`JsonConverter`
 🡒 
`object`

Provides JSON serialization for the **System.ValueTuple`1** family of types.

## Remarks

WARNING: This converter is not AOT-friendly.

## Properties

| Name | Type | Summary |
|---|---|---|
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

A converter which is compatible with <paramref name="typeToConvert" />.

