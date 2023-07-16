---
layout: "page"
title: "PropertyDependenciesKeyword Class"
bookmark: "PropertyDependenciesKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.080"
---
**Namespace:** Json.Schema

**Inheritance:**
`PropertyDependenciesKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- ICustomSchemaCollector
- IEquatable\<PropertyDependenciesKeyword\>

Handles the `propertyDependencies` keyword.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Dependencies** | IReadOnlyDictionary\<string, PropertyDependency\> | Gets the collection of dependencies. |

## Constructors

### PropertyDependenciesKeyword(IReadOnlyDictionary\<string, PropertyDependency\> dependencies)

Creates a new instance of the **Json.Schema.PropertyDependenciesKeyword**.

#### Declaration

```c#
public PropertyDependenciesKeyword(IReadOnlyDictionary<string, PropertyDependency> dependencies)
```

| Parameter | Type | Description |
|---|---|---|
| dependencies | IReadOnlyDictionary\<string, PropertyDependency\> | The collection of dependencies. |


## Methods

### Equals(PropertyDependenciesKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(PropertyDependenciesKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | PropertyDependenciesKeyword | An object to compare with this object. |


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

