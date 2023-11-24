---
layout: "page"
title: "JsonNodeBaseDocument Class"
bookmark: "JsonNodeBaseDocument"
permalink: "/api/JsonSchema.Net/:title/"
0.01.078"
---
**Namespace:** Json.Schema

**Inheritance:**
`JsonNodeBaseDocument`
 🡒 
`object`

**Implemented interfaces:**

- IBaseDocument

Provides a general **Json.Schema.IBaseDocument** implementation for a **System.Text.Json.Nodes.JsonNode**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **BaseUri** | Uri | Gets the base URI that applies to this schema.  This may be defined by a parent schema. |

## Constructors

### JsonNodeBaseDocument(JsonNode node, Uri baseUri)

Creates a new **Json.Schema.JsonNodeBaseDocument**.

#### Declaration

```c#
public JsonNodeBaseDocument(JsonNode node, Uri baseUri)
```

| Parameter | Type | Description |
|---|---|---|
| node | JsonNode | The JsonNode. |
| baseUri | Uri | The identifying base URI. |


## Methods

### FindSubschema(JsonPointer pointer, EvaluationOptions options)

Finds a schema within the document.

#### Declaration

```c#
public JsonSchema FindSubschema(JsonPointer pointer, EvaluationOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| pointer | JsonPointer | A JSON Pointer to the location of the schema within the document. |
| options | EvaluationOptions | Evaluation options.  This is needed for internal processing. |


#### Returns

A JSON Schema, if found.

