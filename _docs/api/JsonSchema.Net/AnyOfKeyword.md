---
layout: "page"
title: "AnyOfKeyword Class"
bookmark: "AnyOfKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.004"
---
**Namespace:** Json.Schema

**Inheritance:**
`AnyOfKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- ISchemaCollector
- IEquatable\<AnyOfKeyword\>

Handles `anyOf`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Schemas** | IReadOnlyList\<JsonSchema\> | The keywords schema collection. |

## Constructors

### AnyOfKeyword(params JsonSchema[] values)

Creates a new **Json.Schema.AnyOfKeyword**.

#### Declaration

```c#
public AnyOfKeyword(params JsonSchema[] values)
```

| Parameter | Type | Description |
|---|---|---|
| values | params JsonSchema[] | The set of schemas. |


### AnyOfKeyword(IEnumerable\<JsonSchema\> values)

Creates a new **Json.Schema.AnyOfKeyword**.

#### Declaration

```c#
public AnyOfKeyword(IEnumerable<JsonSchema> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IEnumerable\<JsonSchema\> | The set of schemas. |


## Methods

### Equals(AnyOfKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(AnyOfKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | AnyOfKeyword | An object to compare with this object. |


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

