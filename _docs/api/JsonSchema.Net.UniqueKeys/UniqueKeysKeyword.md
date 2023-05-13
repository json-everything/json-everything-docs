---
layout: "page"
title: "UniqueKeysKeyword Class"
bookmark: "UniqueKeysKeyword"
permalink: "/api/JsonSchema.Net.UniqueKeys/:title/"
order: "9.03.03"
---
**Namespace:** Json.Schema.UniqueKeys

**Inheritance:**
`UniqueKeysKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IEquatable\<UniqueKeysKeyword\>

Represents the `data` keyword.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |
## Properties

| Name | Type | Summary |
|---|---|---|
| **Keys** | IEnumerable\<JsonPointer\> | The collection of keywords and references. |
## Constructors

### UniqueKeysKeyword(IEnumerable\<JsonPointer\> references)

Creates an instance of the **Json.Schema.UniqueKeys.UniqueKeysKeyword** class.

#### Declaration

```c#
public UniqueKeysKeyword(IEnumerable<JsonPointer> references)
```
| Parameter | Type | Description |
|---|---|---|
| references | IEnumerable\<JsonPointer\> | The collection of keywords and references. |

## Methods

### Equals(UniqueKeysKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(UniqueKeysKeyword other)
```
| Parameter | Type | Description |
|---|---|---|
| other | UniqueKeysKeyword | An object to compare with this object. |

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

