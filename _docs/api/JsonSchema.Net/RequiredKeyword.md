---
layout: "page"
title: "RequiredKeyword Class"
bookmark: "RequiredKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.88"
---
**Namespace:** Json.Schema

**Inheritance:**
`RequiredKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IEquatable\<RequiredKeyword\>

Handles `requires`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Properties** | IReadOnlyList\<string\> | The required properties. |

## Constructors

### RequiredKeyword(params string[] values)

Creates a new **Json.Schema.RequiredKeyword**.

#### Declaration

```c#
public RequiredKeyword(params string[] values)
```

| Parameter | Type | Description |
|---|---|---|
| values | params string[] | The required properties. |


### RequiredKeyword(IEnumerable\<string\> values)

Creates a new **Json.Schema.RequiredKeyword**.

#### Declaration

```c#
public RequiredKeyword(IEnumerable<string> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IEnumerable\<string\> | The required properties. |


## Methods

### Equals(RequiredKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(RequiredKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | RequiredKeyword | An object to compare with this object. |


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

