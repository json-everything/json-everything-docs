---
layout: "page"
title: "JsonPathIdentifier Class"
bookmark: "JsonPathIdentifier"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "10.02.003"
---
**Namespace:** Json.Schema.Data

**Inheritance:**
`JsonPathIdentifier`
 🡒 
`object`

**Implemented interfaces:**

- IDataResourceIdentifier

Handles data references that are JSON Paths.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Query** | JsonPath | Gets the JSON Path query. |

## Constructors

### JsonPathIdentifier(JsonPath query)

Creates a new **Json.Schema.Data.JsonPathIdentifier**.

#### Declaration

```c#
public JsonPathIdentifier(JsonPath query)
```

| Parameter | Type | Description |
|---|---|---|
| query | JsonPath |  |


## Methods

### TryResolve(KeywordEvaluation evaluation, SchemaRegistry registry, out JsonNode value)

Resolves a resource.

#### Declaration

```c#
public bool TryResolve(KeywordEvaluation evaluation, SchemaRegistry registry, out JsonNode value)
```

| Parameter | Type | Description |
|---|---|---|
| evaluation | KeywordEvaluation | The evaluation being process.  This will help identify. |
| registry | SchemaRegistry | The schema registry. |
| value | out JsonNode | The value, if **evaluation** was resolvable. |


#### Returns

True if resolution was successful; false otherwise.

