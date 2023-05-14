---
layout: "page"
title: "DependentSchemasKeyword Class"
bookmark: "DependentSchemasKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.16"
---
**Namespace:** Json.Schema

**Inheritance:**
`DependentSchemasKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IKeyedSchemaCollector
- IEquatable\<DependentSchemasKeyword\>

Handles `dependentSchemas`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Schemas** | IReadOnlyDictionary\<string, JsonSchema\> | The collection of "schema"-type dependencies. |

## Constructors

### DependentSchemasKeyword(IReadOnlyDictionary\<string, JsonSchema\> values)

Creates a new **Json.Schema.DependentSchemasKeyword**.

#### Declaration

```c#
public DependentSchemasKeyword(IReadOnlyDictionary<string, JsonSchema> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IReadOnlyDictionary\<string, JsonSchema\> | The collection of "schema"-type dependencies. |


## Methods

### Equals(DependentSchemasKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(DependentSchemasKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | DependentSchemasKeyword | An object to compare with this object. |


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

