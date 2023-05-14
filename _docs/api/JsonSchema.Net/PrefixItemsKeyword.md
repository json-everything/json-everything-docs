---
layout: "page"
title: "PrefixItemsKeyword Class"
bookmark: "PrefixItemsKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.78"
---
**Namespace:** Json.Schema

**Inheritance:**
`PrefixItemsKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- ISchemaCollector
- IEquatable\<PrefixItemsKeyword\>

Handles `items`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **ArraySchemas** | IReadOnlyList\<JsonSchema\> | The collection of schemas for the "schema array" form. |

## Constructors

### PrefixItemsKeyword(params JsonSchema[] values)

Creates a new **Json.Schema.PrefixItemsKeyword**.

#### Declaration

```c#
public PrefixItemsKeyword(params JsonSchema[] values)
```

| Parameter | Type | Description |
|---|---|---|
| values | params JsonSchema[] | The collection of schemas for the "schema array" form. |


#### Remarks

Using the `params` constructor to build an array-form `items` keyword with a single schema
will confuse the compiler.  To achieve this, you'll need to explicitly specify the array.

### PrefixItemsKeyword(IEnumerable\<JsonSchema\> values)

Creates a new **Json.Schema.PrefixItemsKeyword**.

#### Declaration

```c#
public PrefixItemsKeyword(IEnumerable<JsonSchema> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IEnumerable\<JsonSchema\> | The collection of schemas for the "schema array" form. |


## Methods

### Equals(PrefixItemsKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(PrefixItemsKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | PrefixItemsKeyword | An object to compare with this object. |


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

