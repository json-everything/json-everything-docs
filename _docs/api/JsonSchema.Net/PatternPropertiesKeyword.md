---
layout: "page"
title: "PatternPropertiesKeyword Class"
bookmark: "PatternPropertiesKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.074"
---
**Namespace:** Json.Schema

**Inheritance:**
`PatternPropertiesKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IKeyedSchemaCollector
- IEquatable\<PatternPropertiesKeyword\>

Handles `patternProperties`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **InvalidPatterns** | IReadOnlyList\<string\> | If any pattern is invalid or unsupported by **System.Text.RegularExpressions.Regex**, it will appear here. |
| **Patterns** | IReadOnlyDictionary\<Regex, JsonSchema\> | The pattern-keyed schemas. |

## Constructors

### PatternPropertiesKeyword(IReadOnlyDictionary\<Regex, JsonSchema\> values)

Creates a new **Json.Schema.PatternPropertiesKeyword**.

#### Declaration

```c#
public PatternPropertiesKeyword(IReadOnlyDictionary<Regex, JsonSchema> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IReadOnlyDictionary\<Regex, JsonSchema\> | The pattern-keyed schemas. |


## Methods

### Equals(PatternPropertiesKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(PatternPropertiesKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | PatternPropertiesKeyword | An object to compare with this object. |


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

