---
layout: "page"
title: "IBaseDocument Interface"
bookmark: "IBaseDocument"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.37"
---
**Namespace:** Json.Schema

**Inheritance:**
`IBaseDocument`

Represents an identifiable or locatable base document that may be or contain a JSON Schema.

## Properties

| Name | Type | Summary |
|---|---|---|
| **BaseUri** | Uri | Gets the base URI that applies to this schema.  This may be defined by a parent schema. |

## Methods

### FindSubschema(JsonPointer pointer, EvaluationOptions options)

Finds a schema within the document.

#### Declaration

```c#
public abstract JsonSchema FindSubschema(JsonPointer pointer, EvaluationOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| pointer | JsonPointer | A JSON Pointer to the location of the schema within the document. |
| options | EvaluationOptions | Evaluation options.  This is needed for internal processing. |


#### Returns

A JSON Schema, if found.

