---
layout: "page"
title: "UnevaluatedPropertiesKeyword Class"
bookmark: "UnevaluatedPropertiesKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.102"
---
**Namespace:** Json.Schema

**Inheritance:**
`UnevaluatedPropertiesKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- ISchemaContainer
- IEquatable\<UnevaluatedPropertiesKeyword\>

Handles `unevaluatedProperties`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Schema** | JsonSchema | The schema by which to evaluate additional properties. |

## Constructors

### UnevaluatedPropertiesKeyword(JsonSchema value)

Creates a new **Json.Schema.UnevaluatedPropertiesKeyword**.

#### Declaration

```c#
public UnevaluatedPropertiesKeyword(JsonSchema value)
```

| Parameter | Type | Description |
|---|---|---|
| value | JsonSchema |  |


## Methods

### Equals(UnevaluatedPropertiesKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(UnevaluatedPropertiesKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | UnevaluatedPropertiesKeyword | An object to compare with this object. |


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

