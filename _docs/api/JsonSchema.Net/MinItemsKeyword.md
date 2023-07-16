---
layout: "page"
title: "MinItemsKeyword Class"
bookmark: "MinItemsKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.066"
---
**Namespace:** Json.Schema

**Inheritance:**
`MinItemsKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IEquatable\<MinItemsKeyword\>

Handles `minItems`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | uint | The expected minimum number of items. |

## Constructors

### MinItemsKeyword(uint value)

Create a new **Json.Schema.MinItemsKeyword**.

#### Declaration

```c#
public MinItemsKeyword(uint value)
```

| Parameter | Type | Description |
|---|---|---|
| value | uint | The expected minimum number of items. |


## Methods

### Equals(MinItemsKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(MinItemsKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | MinItemsKeyword | An object to compare with this object. |


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

