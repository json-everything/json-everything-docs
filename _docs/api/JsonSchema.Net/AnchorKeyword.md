---
layout: "page"
title: "AnchorKeyword Class"
bookmark: "AnchorKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.03"
---
**Namespace:** Json.Schema

**Inheritance:**
`AnchorKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IEquatable\<AnchorKeyword\>

Handles `$anchor`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Anchor** | string | The value of the anchor. |

## Constructors

### AnchorKeyword(string anchor)

Creates a new **Json.Schema.AnchorKeyword**.

#### Declaration

```c#
public AnchorKeyword(string anchor)
```

| Parameter | Type | Description |
|---|---|---|
| anchor | string | The anchor value. |


## Methods

### Equals(AnchorKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(AnchorKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | AnchorKeyword | An object to compare with this object. |


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

