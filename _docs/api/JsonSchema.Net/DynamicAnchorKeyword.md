---
layout: "page"
title: "DynamicAnchorKeyword Class"
bookmark: "DynamicAnchorKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.23"
---
**Namespace:** Json.Schema

**Inheritance:**
`DynamicAnchorKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IEquatable\<DynamicAnchorKeyword\>

Handles `$dynamicAnchor`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |
## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | string | Gets the anchor value. |
## Constructors

### DynamicAnchorKeyword(string value)

Creates a new **Json.Schema.DynamicAnchorKeyword**.

#### Declaration

```c#
public DynamicAnchorKeyword(string value)
```
| Parameter | Type | Description |
|---|---|---|
| value | string | The anchor value. |

## Methods

### Equals(DynamicAnchorKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(DynamicAnchorKeyword other)
```
| Parameter | Type | Description |
|---|---|---|
| other | DynamicAnchorKeyword | An object to compare with this object. |

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

