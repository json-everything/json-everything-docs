---
layout: "page"
title: "JsonElementBaseDocument Class"
bookmark: "JsonElementBaseDocument"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.057"
---
**Namespace:** Json.Schema

**Inheritance:**
`JsonElementBaseDocument`
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

### JsonElementBaseDocument(JsonElement node, Uri baseUri)

Creates a new **Json.Schema.JsonElementBaseDocument**.

#### Declaration

```c#
public JsonElementBaseDocument(JsonElement node, Uri baseUri)
```

| Parameter | Type | Description |
|---|---|---|
| node | JsonElement | The JsonNode. |
| baseUri | Uri | The identifying base URI. |


## Methods

### FindSubschema(JsonPointer pointer, BuildContext context)

Finds a schema within the document.

#### Declaration

```c#
public JsonSchemaNode FindSubschema(JsonPointer pointer, BuildContext context)
```

| Parameter | Type | Description |
|---|---|---|
| pointer | JsonPointer | A JSON Pointer to the location of the schema within the document. |
| context | BuildContext | Build context. |


#### Returns

A JSON Schema, if found.

