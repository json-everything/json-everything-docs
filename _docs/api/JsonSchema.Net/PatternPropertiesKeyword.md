---
layout: "page"
title: "PatternPropertiesKeyword Class"
bookmark: "PatternPropertiesKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.076"
---
**Namespace:** Json.Schema

**Inheritance:**
`PatternPropertiesKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IKeyedSchemaCollector

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

### GetConstraint(SchemaConstraint schemaConstraint, IReadOnlyList\<KeywordConstraint\> localConstraints, EvaluationContext context)

Builds a constraint object for a keyword.

#### Declaration

```c#
public KeywordConstraint GetConstraint(SchemaConstraint schemaConstraint, IReadOnlyList<KeywordConstraint> localConstraints, EvaluationContext context)
```

| Parameter | Type | Description |
|---|---|---|
| schemaConstraint | SchemaConstraint | The **Json.Schema.SchemaConstraint** for the schema object that houses this keyword. |
| localConstraints | IReadOnlyList\<KeywordConstraint\> | The set of other **Json.Schema.KeywordConstraint**s that have been processed prior to this one. Will contain the constraints for keyword dependencies. |
| context | EvaluationContext | The **Json.Schema.EvaluationContext**. |


#### Returns

A constraint object.

