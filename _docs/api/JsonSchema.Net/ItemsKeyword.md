---
layout: "page"
title: "ItemsKeyword Class"
bookmark: "ItemsKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.047"
---
**Namespace:** Json.Schema

**Inheritance:**
`ItemsKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- ISchemaContainer
- ISchemaCollector
- IEquatable\<ItemsKeyword\>

Handles `items`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **ArraySchemas** | IReadOnlyList\<JsonSchema\> | The collection of schemas for the "schema array" form. |
| **SingleSchema** | JsonSchema | The schema for the "single schema" form. |

## Constructors

### ItemsKeyword(JsonSchema value)

Creates a new **Json.Schema.ItemsKeyword**.

#### Declaration

```c#
public ItemsKeyword(JsonSchema value)
```

| Parameter | Type | Description |
|---|---|---|
| value | JsonSchema | The schema for the "single schema" form. |


### ItemsKeyword(params JsonSchema[] values)

Creates a new **Json.Schema.ItemsKeyword**.

#### Declaration

```c#
public ItemsKeyword(params JsonSchema[] values)
```

| Parameter | Type | Description |
|---|---|---|
| values | params JsonSchema[] | The collection of schemas for the "schema array" form. |


#### Remarks

Using the `params` constructor to build an array-form `items` keyword with a single schema
will confuse the compiler.  To achieve this, you'll need to explicitly specify the array.

### ItemsKeyword(IEnumerable\<JsonSchema\> values)

Creates a new **Json.Schema.ItemsKeyword**.

#### Declaration

```c#
public ItemsKeyword(IEnumerable<JsonSchema> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IEnumerable\<JsonSchema\> | The collection of schemas for the "schema array" form. |


## Methods

### Equals(ItemsKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(ItemsKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | ItemsKeyword | An object to compare with this object. |


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

