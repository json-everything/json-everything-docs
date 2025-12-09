---
layout: "page"
title: "IBaseDocument Interface"
bookmark: "IBaseDocument"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.050"
---
**Namespace:** Json.Schema

**Inheritance:**
`IBaseDocument`

Represents an identifiable base document that may be or may contain a JSON Schema.

## Properties

| Name | Type | Summary |
|---|---|---|
| **BaseUri** | Uri | Gets the base URI that applies to this schema.  This may be defined by a parent schema. |

## Methods

### FindSubschema(JsonPointer pointer, BuildContext context)

Finds a schema within the document.

#### Declaration

```c#
public abstract JsonSchemaNode FindSubschema(JsonPointer pointer, BuildContext context)
```

| Parameter | Type | Description |
|---|---|---|
| pointer | JsonPointer | A JSON Pointer to the location of the schema within the document. |
| context | BuildContext | Build context. |


#### Returns

A JSON Schema, if found.

