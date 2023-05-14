---
layout: "page"
title: "AllOfKeyword Class"
bookmark: "AllOfKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.02"
---
**Namespace:** Json.Schema

**Inheritance:**
`AllOfKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- ISchemaCollector
- IEquatable\<AllOfKeyword\>

Handles `allOf`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Schemas** | IReadOnlyList\<JsonSchema\> | The keywords schema collection. |

## Constructors

### AllOfKeyword(params JsonSchema[] values)

Creates a new **Json.Schema.AllOfKeyword**.

#### Declaration

```c#
public AllOfKeyword(params JsonSchema[] values)
```

| Parameter | Type | Description |
|---|---|---|
| values | params JsonSchema[] | The set of schemas. |


### AllOfKeyword(IEnumerable\<JsonSchema\> values)

Creates a new **Json.Schema.AllOfKeyword**.

#### Declaration

```c#
public AllOfKeyword(IEnumerable<JsonSchema> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IEnumerable\<JsonSchema\> | The set of schemas. |


## Methods

### Equals(AllOfKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(AllOfKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | AllOfKeyword | An object to compare with this object. |


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

