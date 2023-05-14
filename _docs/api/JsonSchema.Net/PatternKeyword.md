---
layout: "page"
title: "PatternKeyword Class"
bookmark: "PatternKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.73"
---
**Namespace:** Json.Schema

**Inheritance:**
`PatternKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IEquatable\<PatternKeyword\>

Handles `pattern`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **InvalidPattern** | string | If the pattern is invalid or unsupported by **System.Text.RegularExpressions.Regex**, it will appear here. |
| **Value** | Regex | The regular expression. |

## Constructors

### PatternKeyword(Regex value)

Creates a new **Json.Schema.PatternKeyword**.

#### Declaration

```c#
public PatternKeyword(Regex value)
```

| Parameter | Type | Description |
|---|---|---|
| value | Regex | The regular expression. |


## Methods

### Equals(PatternKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(PatternKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | PatternKeyword | An object to compare with this object. |


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

