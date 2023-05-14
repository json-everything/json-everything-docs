---
layout: "page"
title: "MaximumKeyword Class"
bookmark: "MaximumKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.59"
---
**Namespace:** Json.Schema

**Inheritance:**
`MaximumKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IEquatable\<MaximumKeyword\>

Handles `maximum`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | decimal | The maximum expected value. |

## Constructors

### MaximumKeyword(decimal value)

Creates a new **Json.Schema.MaximumKeyword**.

#### Declaration

```c#
public MaximumKeyword(decimal value)
```

| Parameter | Type | Description |
|---|---|---|
| value | decimal | The maximum expected value. |


## Methods

### Equals(MaximumKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(MaximumKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | MaximumKeyword | An object to compare with this object. |


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

