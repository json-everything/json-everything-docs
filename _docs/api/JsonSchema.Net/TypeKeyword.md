---
layout: "page"
title: "TypeKeyword Class"
bookmark: "TypeKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.98"
---
**Namespace:** Json.Schema

**Inheritance:**
`TypeKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IEquatable\<TypeKeyword\>

Handles `type`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |
## Properties

| Name | Type | Summary |
|---|---|---|
| **Type** | SchemaValueType | The expected type. |
## Constructors

### TypeKeyword(SchemaValueType type)

Creates a new **Json.Schema.TypeKeyword**.

#### Declaration

```c#
public TypeKeyword(SchemaValueType type)
```
| Parameter | Type | Description |
|---|---|---|
| type | SchemaValueType | The expected type. |

### TypeKeyword(params SchemaValueType[] types)

Creates a new **Json.Schema.TypeKeyword**.

#### Declaration

```c#
public TypeKeyword(params SchemaValueType[] types)
```
| Parameter | Type | Description |
|---|---|---|
| types | params SchemaValueType[] | The expected types. |

### TypeKeyword(IEnumerable\<SchemaValueType\> types)

Creates a new **Json.Schema.TypeKeyword**.

#### Declaration

```c#
public TypeKeyword(IEnumerable<SchemaValueType> types)
```
| Parameter | Type | Description |
|---|---|---|
| types | IEnumerable\<SchemaValueType\> | The expected types. |

## Methods

### Equals(TypeKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(TypeKeyword other)
```
| Parameter | Type | Description |
|---|---|---|
| other | TypeKeyword | An object to compare with this object. |

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

