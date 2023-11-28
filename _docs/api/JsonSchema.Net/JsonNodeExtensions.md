---
layout: "page"
title: "JsonNodeExtensions Class"
bookmark: "JsonNodeExtensions"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.079"
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

### VerifyJsonObject(this JsonObject obj)

Verifies that a **System.Text.Json.Nodes.JsonObject** doesn't have any duplicate keys and can
therefore be processed.

#### Declaration

```c#
public static bool VerifyJsonObject(this JsonObject obj)
```

| Parameter | Type | Description |
|---|---|---|
| obj | JsonObject | The object. |


#### Returns

true if the the object can be processed; false otherwise.

#### Remarks

See https://github.com/dotnet/runtime/issues/70604 for more information.

