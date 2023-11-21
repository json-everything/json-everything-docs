---
layout: "page"
title: "ExternalDocsKeyword Class"
bookmark: "ExternalDocsKeyword"
permalink: "/api/JsonSchema.Net.OpenApi/:title/"
order: "9.04.004"
---
**Namespace:** Json.Schema.OpenApi

**Inheritance:**
`ExternalDocsKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `example`.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Description** | string | A description of the target documentation. CommonMark syntax MAY be used for rich text representation. |
| **Extensions** | IReadOnlyDictionary\<string, JsonNode\> | Allows extensions to the OpenAPI Schema. The field name MUST begin with `x-`, for example, `x-internal-id`. Field names beginning `x-oai-` and `x-oas-` are reserved for uses defined by the OpenAPI Initiative. The value can be null, a primitive, an array or an object. |
| **Url** | Uri | The URL for the target documentation. This MUST be in the form of a URL. |

## Constructors

### ExternalDocsKeyword(Uri url, string description, IReadOnlyDictionary\<string, JsonNode\> extensions)

Creates a new **Json.Schema.OpenApi.ExternalDocsKeyword**.

#### Declaration

```c#
public ExternalDocsKeyword(Uri url, string description, IReadOnlyDictionary<string, JsonNode> extensions)
```

| Parameter | Type | Description |
|---|---|---|
| url | Uri | The URL for the target documentation. This MUST be in the form of a URL. |
| description | string | A description of the target documentation. CommonMark syntax MAY be used for rich text representation. |
| extensions | IReadOnlyDictionary\<string, JsonNode\> | Allows extensions to the OpenAPI Schema. The field name MUST begin with `x-`, for example, `x-internal-id`. Field names beginning `x-oai-` and `x-oas-` are reserved for uses defined by the OpenAPI Initiative. The value can be null, a primitive, an array or an object. |


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

