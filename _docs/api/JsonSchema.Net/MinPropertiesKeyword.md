---
layout: "page"
title: "MinPropertiesKeyword Class"
bookmark: "MinPropertiesKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.69"
---
**Namespace:** Json.Schema

**Inheritance:**
`MinPropertiesKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IEquatable\<MinPropertiesKeyword\>

Handles `minProperties`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |
## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | uint | The minimum expected number of properties. |
## Constructors

### MinPropertiesKeyword(uint value)

Creates a new **Json.Schema.MinPropertiesKeyword**.

#### Declaration

```c#
public MinPropertiesKeyword(uint value)
```
| Parameter | Type | Description |
|---|---|---|
| value | uint | The minimum expected number of properties. |

## Methods

### Equals(MinPropertiesKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(MinPropertiesKeyword other)
```
| Parameter | Type | Description |
|---|---|---|
| other | MinPropertiesKeyword | An object to compare with this object. |

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

