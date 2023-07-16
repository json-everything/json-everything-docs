---
layout: "page"
title: "EnumKeyword Class"
bookmark: "EnumKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.026"
---
**Namespace:** Json.Schema

**Inheritance:**
`EnumKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IEquatable\<EnumKeyword\>

Handles `enum`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **RequireUniqueValues** | bool | Gets or sets whether the keyword will check for unique values when deserializing. |
| **Values** | IReadOnlyCollection\<JsonNode\> | The collection of enum values. |

## Constructors

### EnumKeyword(params JsonNode[] values)

Creates a new **Json.Schema.EnumKeyword**.

#### Declaration

```c#
public EnumKeyword(params JsonNode[] values)
```

| Parameter | Type | Description |
|---|---|---|
| values | params JsonNode[] | The collection of enum values. |


### EnumKeyword(IEnumerable\<JsonNode\> values)

Creates a new **Json.Schema.EnumKeyword**.

#### Declaration

```c#
public EnumKeyword(IEnumerable<JsonNode> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IEnumerable\<JsonNode\> | The collection of enum values. |


## Methods

### Equals(EnumKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(EnumKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | EnumKeyword | An object to compare with this object. |


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

