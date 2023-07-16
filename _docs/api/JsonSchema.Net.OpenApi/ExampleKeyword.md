---
layout: "page"
title: "ExampleKeyword Class"
bookmark: "ExampleKeyword"
permalink: "/api/JsonSchema.Net.OpenApi/:title/"
order: "9.04.001"
---
**Namespace:** Json.Schema.OpenApi

**Inheritance:**
`ExampleKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IEquatable\<ExampleKeyword\>

Handles `example`.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | JsonNode | The example value. |

## Constructors

### ExampleKeyword(JsonNode value)

Creates a new **Json.Schema.OpenApi.ExampleKeyword**.

#### Declaration

```c#
public ExampleKeyword(JsonNode value)
```

| Parameter | Type | Description |
|---|---|---|
| value | JsonNode | The example value. |


## Methods

### Equals(ExampleKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(ExampleKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | ExampleKeyword | An object to compare with this object. |


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

