---
layout: "page"
title: "CommentKeyword Class"
bookmark: "CommentKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.05"
---
**Namespace:** Json.Schema

**Inheritance:**
`CommentKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IEquatable\<CommentKeyword\>

Handles `$comment`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |
## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | string | The comment value. |
## Constructors

### CommentKeyword(string value)

Creates a new **Json.Schema.CommentKeyword**.

#### Declaration

```c#
public CommentKeyword(string value)
```
| Parameter | Type | Description |
|---|---|---|
| value | string | The comment value. |

## Methods

### Equals(CommentKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(CommentKeyword other)
```
| Parameter | Type | Description |
|---|---|---|
| other | CommentKeyword | An object to compare with this object. |

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

