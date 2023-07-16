---
layout: "page"
title: "RecursiveAnchorKeyword Class"
bookmark: "RecursiveAnchorKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.084"
---
**Namespace:** Json.Schema

**Inheritance:**
`RecursiveAnchorKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IEquatable\<RecursiveAnchorKeyword\>

Handles `$recursiveAnchor`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | bool | Gets the value. |

## Constructors

### RecursiveAnchorKeyword(bool value)

Creates a new **Json.Schema.RecursiveAnchorKeyword**.

#### Declaration

```c#
public RecursiveAnchorKeyword(bool value)
```

| Parameter | Type | Description |
|---|---|---|
| value | bool | The value. |


## Methods

### Equals(RecursiveAnchorKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(RecursiveAnchorKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | RecursiveAnchorKeyword | An object to compare with this object. |


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

