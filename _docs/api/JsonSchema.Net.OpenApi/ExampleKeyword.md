---
layout: "page"
title: "ExampleKeyword Class"
bookmark: "ExampleKeyword"
permalink: "/api/JsonSchema.Net.OpenApi/:title/"
order: "9.04.001"
---
**Namespace:** Json.Schema.OpenApi

**Inheritance:**
`ExampleKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `example`.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | JsonNode | The example value. |

## Constructors

### ExampleKeyword(JsonNode value)

Creates a new **Json.Schema.OpenApi.ExampleKeyword**.

#### Declaration

```c#
public ExampleKeyword(JsonNode value)
```

| Parameter | Type | Description |
|---|---|---|
| value | JsonNode | The example value. |


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
| localConstraints | IReadOnlyList\<KeywordConstraint\> | The set of other **Json.Schema.KeywordConstraint**s that have been processed prior to this one.<br>Will contain the constraints for keyword dependencies. |
| context | EvaluationContext | The **Json.Schema.EvaluationContext**. |


#### Returns

A constraint object.

