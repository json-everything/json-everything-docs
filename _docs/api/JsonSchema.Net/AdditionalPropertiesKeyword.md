---
layout: "page"
title: "AdditionalPropertiesKeyword Class"
bookmark: "AdditionalPropertiesKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.01"
---
**Namespace:** Json.Schema

**Inheritance:**
`AdditionalPropertiesKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- ISchemaContainer
- IEquatable\<AdditionalPropertiesKeyword\>

Handles `additionalProperties`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Schema** | JsonSchema | The schema by which to evaluate additional properties. |

## Constructors

### AdditionalPropertiesKeyword(JsonSchema value)

Creates a new **Json.Schema.AdditionalPropertiesKeyword**.

#### Declaration

```c#
public AdditionalPropertiesKeyword(JsonSchema value)
```

| Parameter | Type | Description |
|---|---|---|
| value | JsonSchema | The keyword's schema. |


## Methods

### Equals(AdditionalPropertiesKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(AdditionalPropertiesKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | AdditionalPropertiesKeyword | An object to compare with this object. |


#### Returns

true if the current object is equal to the <paramref name="other">other</paramref> parameter; otherwise, false.

### Equals(object obj)

Determines whether the specified object is equal to the current object.

#### Declaration

```c#
public override bool Equals(object obj)
```

| Parameter | Type | Description |
|---|---|---|
| obj | object | The object to compare with the current object. |


#### Returns

true if the specified object  is equal to the current object; otherwise, false.

### Evaluate(EvaluationContext context)

Performs evaluation for the keyword.

#### Declaration

```c#
public void Evaluate(EvaluationContext context)
```

| Parameter | Type | Description |
|---|---|---|
| context | EvaluationContext | Contextual details for the evaluation process. |


### GetHashCode()

Serves as the default hash function.

#### Declaration

```c#
public override int GetHashCode()
```


#### Returns

A hash code for the current object.

