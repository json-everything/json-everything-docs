---
layout: "page"
title: "MinimumKeyword Class"
bookmark: "MinimumKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.66"
---
**Namespace:** Json.Schema

**Inheritance:**
`MinimumKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IEquatable\<MinimumKeyword\>

Handles `minimum`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |
## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | decimal | The minimum expected value. |
## Constructors

### MinimumKeyword(decimal value)

Creates a new **Json.Schema.MinimumKeyword**.

#### Declaration

```c#
public MinimumKeyword(decimal value)
```
| Parameter | Type | Description |
|---|---|---|
| value | decimal | The minimum expected value. |

## Methods

### Equals(MinimumKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(MinimumKeyword other)
```
| Parameter | Type | Description |
|---|---|---|
| other | MinimumKeyword | An object to compare with this object. |

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

Performs evaluation for the keyword.S

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

