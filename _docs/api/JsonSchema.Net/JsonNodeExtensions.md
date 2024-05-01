---
layout: "page"
title: "JsonNodeExtensions Class"
bookmark: "JsonNodeExtensions"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.082"
---
**Namespace:** Json.Schema

**Inheritance:**
`JsonNodeExtensions`
 🡒 
`object`

Provides some schema-related functionality for **System.Text.Json.Nodes.JsonNode**.

## Methods

### GetSchemaValueType(this JsonNode node)

Provides the JSON Schema type of a node.

#### Declaration

```c#
public static SchemaValueType GetSchemaValueType(this JsonNode node)
```

| Parameter | Type | Description |
|---|---|---|
| node | JsonNode | The node. |


#### Returns

The **Json.Schema.SchemaValueType** of the node.

