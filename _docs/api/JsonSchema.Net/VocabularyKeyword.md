---
layout: "page"
title: "VocabularyKeyword Class"
bookmark: "VocabularyKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.108"
---
**Namespace:** Json.Schema

**Inheritance:**
`VocabularyKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IEquatable\<VocabularyKeyword\>

Handles `$vocabulary`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |
## Properties

| Name | Type | Summary |
|---|---|---|
| **Vocabulary** | IReadOnlyDictionary\<Uri, bool\> | The collection of vocabulary requirements. |
## Constructors

### VocabularyKeyword(IReadOnlyDictionary\<Uri, bool\> values)

Creates a new **Json.Schema.VocabularyKeyword**.

#### Declaration

```c#
public VocabularyKeyword(IReadOnlyDictionary<Uri, bool> values)
```
| Parameter | Type | Description |
|---|---|---|
| values | IReadOnlyDictionary\<Uri, bool\> | The collection of vocabulary requirements. |

## Methods

### Equals(VocabularyKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(VocabularyKeyword other)
```
| Parameter | Type | Description |
|---|---|---|
| other | VocabularyKeyword | An object to compare with this object. |

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

