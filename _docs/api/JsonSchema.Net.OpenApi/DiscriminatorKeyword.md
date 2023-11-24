---
layout: "page"
title: "DiscriminatorKeyword Class"
bookmark: "DiscriminatorKeyword"
permalink: "/api/JsonSchema.Net.OpenApi/:title/"
0.04.000"
---
**Namespace:** Json.Schema.OpenApi

**Inheritance:**
`DiscriminatorKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `example`.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Extensions** | IReadOnlyDictionary\<string, JsonNode\> | Allows extensions to the OpenAPI Schema. The field name MUST begin with `x-`, for example, `x-internal-id`. Field names beginning `x-oai-` and `x-oas-` are reserved for uses defined by the OpenAPI Initiative. The value can be null, a primitive, an array or an object. |
| **Mapping** | IReadOnlyDictionary\<string, string\> | An object to hold mappings between payload values and schema names or references. |
| **PropertyName** | string | The name of the property in the payload that will hold the discriminator value. |

## Constructors

### DiscriminatorKeyword(string propertyName, IReadOnlyDictionary\<string, string\> mapping, IReadOnlyDictionary\<string, JsonNode\> extensions)

Creates a new **Json.Schema.OpenApi.DiscriminatorKeyword**.

#### Declaration

```c#
public DiscriminatorKeyword(string propertyName, IReadOnlyDictionary<string, string> mapping, IReadOnlyDictionary<string, JsonNode> extensions)
```

| Parameter | Type | Description |
|---|---|---|
| propertyName | string | The name of the property in the payload that will hold the discriminator value. |
| mapping | IReadOnlyDictionary\<string, string\> | An object to hold mappings between payload values and schema names or references. |
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

