---
layout: "page"
title: "DependenciesKeyword Class"
bookmark: "DependenciesKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.014"
---
**Namespace:** Json.Schema

**Inheritance:**
`DependenciesKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IKeyedSchemaCollector
- IEquatable\<DependenciesKeyword\>

Handles `dependencies`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Requirements** | IReadOnlyDictionary\<string, SchemaOrPropertyList\> | The collection of dependencies. |

## Constructors

### DependenciesKeyword(IReadOnlyDictionary\<string, SchemaOrPropertyList\> values)

Creates a new **Json.Schema.DependenciesKeyword**.

#### Declaration

```c#
public DependenciesKeyword(IReadOnlyDictionary<string, SchemaOrPropertyList> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IReadOnlyDictionary\<string, SchemaOrPropertyList\> | The collection of dependencies. |


## Methods

### Equals(DependenciesKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(DependenciesKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | DependenciesKeyword | An object to compare with this object. |


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

