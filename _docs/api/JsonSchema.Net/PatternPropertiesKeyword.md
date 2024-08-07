---
layout: "page"
title: "PatternPropertiesKeyword Class"
bookmark: "PatternPropertiesKeyword"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.122"
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
| **InvalidPatterns** | IReadOnlyList\<string\> |  |
| **Patterns** | IReadOnlyDictionary\<Regex, JsonSchema\> | The regex patterns of this PatternPropertiesKeyword |
| **PatternValues** | IReadOnlyDictionary\<string, JsonSchema\> | The pattern values of this PatternPropertiesKeyword |

## Constructors

### PatternPropertiesKeyword(IEnumerable\<KeyValuePair\<string, JsonSchema\>\> values)

Creates a new **Json.Schema.PatternPropertiesKeyword**.

#### Declaration

```c#
public PatternPropertiesKeyword(IEnumerable<KeyValuePair<string, JsonSchema>> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IEnumerable\<KeyValuePair\<string, JsonSchema\>\> | The pattern-keyed schemas. |


### PatternPropertiesKeyword(IEnumerable\<KeyValuePair\<Regex, JsonSchema\>\> values)

Creates a new **Json.Schema.PatternPropertiesKeyword**.

#### Declaration

```c#
public PatternPropertiesKeyword(IEnumerable<KeyValuePair<Regex, JsonSchema>> values)
```

| Parameter | Type | Description |
|---|---|---|
| values | IEnumerable\<KeyValuePair\<Regex, JsonSchema\>\> | The pattern-keyed schemas. |


## Methods

### GetConstraint(SchemaConstraint schemaConstraint, ReadOnlySpan\<KeywordConstraint\> localConstraints, EvaluationContext context)

Builds a constraint object for a keyword.

#### Declaration

```c#
public KeywordConstraint GetConstraint(SchemaConstraint schemaConstraint, ReadOnlySpan<KeywordConstraint> localConstraints, EvaluationContext context)
```

| Parameter | Type | Description |
|---|---|---|
| schemaConstraint | SchemaConstraint | The **Json.Schema.SchemaConstraint** for the schema object that houses this keyword. |
| localConstraints | ReadOnlySpan\<KeywordConstraint\> | The set of other **Json.Schema.KeywordConstraint**s that have been processed prior to this one.     Will contain the constraints for keyword dependencies. |
| context | EvaluationContext | The **Json.Schema.EvaluationContext**. |


#### Returns

A constraint object.

