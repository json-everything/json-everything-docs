---
layout: "page"
title: "KeywordConstraint Class"
bookmark: "KeywordConstraint"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.087"
---
**Namespace:** Json.Schema

**Inheritance:**
`KeywordConstraint`
 🡒 
`object`

Describes the constraint applied by a single keyword.

## Remarks

This represents any work that can be performed as part of static analysis of the schema.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ChildDependencies** | SchemaConstraint[] | Gets or sets the collection of schema constraints (i.e. subschemas) that this keyword is dependent upon. The evaluations of these constraints will be available when this keyword is evaluated. |
| **Evaluator** | Action\<KeywordEvaluation, EvaluationContext\> | A method that used to apply the actual constraint behavior. |
| **Keyword** | string | The keyword name. |
| **SiblingDependencies** | KeywordConstraint[] | Gets or sets the collection of keyword constraints (i.e. sibling keywords) that this keyword is dependent upon. The evaluations of these constraints will be available when this keyword is evaluated. |
| **Skip** | KeywordConstraint | Gets a no-op constraint.  Use for keywords that have no assertion or annotation behavior, e.g. `$defs`. |

## Constructors

### KeywordConstraint(string keyword, Action\<KeywordEvaluation, EvaluationContext\> evaluator)

Creates a new keyword constraint.

#### Declaration

```c#
public KeywordConstraint(string keyword, Action<KeywordEvaluation, EvaluationContext> evaluator)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | string | The keyword name. |
| evaluator | Action\<KeywordEvaluation, EvaluationContext\> | A method that used to apply the actual constraint behavior. |


## Methods

### SimpleAnnotation(string keyword, JsonNode value)

Creates a keyword constraint that simply applies an annotation.

#### Declaration

```c#
public static KeywordConstraint SimpleAnnotation(string keyword, JsonNode value)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | string | The keyword name. |
| value | JsonNode | The annotation value. |


#### Returns

A new keyword constraint.

