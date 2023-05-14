---
layout: "page"
title: "UnrecognizedKeyword Class"
bookmark: "UnrecognizedKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.105"
---
**Namespace:** Json.Schema

**Inheritance:**
`UnrecognizedKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IEquatable\<UnrecognizedKeyword\>

Handles unrecognized keywords.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The name or key of the keyword. |
| **Value** | JsonNode | The value of the keyword. |

## Constructors

### UnrecognizedKeyword(string name, JsonNode value)

Creates a new **Json.Schema.UnrecognizedKeyword**.

#### Declaration

```c#
public UnrecognizedKeyword(string name, JsonNode value)
```

| Parameter | Type | Description |
|---|---|---|
| name | string | The name of the keyword. |
| value | JsonNode | The value of the keyword. |


## Methods

### Equals(UnrecognizedKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(UnrecognizedKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | UnrecognizedKeyword | An object to compare with this object. |


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

