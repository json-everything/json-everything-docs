---
layout: "page"
title: "ExamplesKeyword Class"
bookmark: "ExamplesKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.33"
---
**Namespace:** Json.Schema

**Inheritance:**
`ExamplesKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IEquatable\<ExamplesKeyword\>

Handles `examples`.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |
## Properties

| Name | Type | Summary |
|---|---|---|
| **Values** | IReadOnlyList\<JsonNode\> | The collection of example values. |
## Constructors

### ExamplesKeyword(params JsonNode[] values)

Creates a new **Json.Schema.ExamplesKeyword**.

#### Declaration

```c#
public ExamplesKeyword(params JsonNode[] values)
```
| Parameter | Type | Description |
|---|---|---|
| values | params JsonNode[] | The collection of example values. |

### ExamplesKeyword(IEnumerable\<JsonNode\> values)

Creates a new **Json.Schema.ExamplesKeyword**.

#### Declaration

```c#
public ExamplesKeyword(IEnumerable<JsonNode> values)
```
| Parameter | Type | Description |
|---|---|---|
| values | IEnumerable\<JsonNode\> | The collection of example values. |

## Methods

### Equals(ExamplesKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(ExamplesKeyword other)
```
| Parameter | Type | Description |
|---|---|---|
| other | ExamplesKeyword | An object to compare with this object. |

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

