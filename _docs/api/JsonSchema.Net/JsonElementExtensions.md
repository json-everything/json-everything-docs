---
layout: "page"
title: "JsonElementExtensions Class"
bookmark: "JsonElementExtensions"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.058"
---
**Namespace:** Json.Schema

**Inheritance:**
`JsonElementExtensions`
 🡒 
`object`

Provides some schema-related functionality for **System.Text.Json.JsonElement**.

## Fields

| Name | Type | Summary |
|---|---|---|
| **False** | JsonElement | Represents a JSON Boolean value of \<see langword="false" /\> as a **System.Text.Json.JsonElement**. |
| **True** | JsonElement | Represents a JSON element with the boolean value \<see langword="true" /\>. |

## Methods

### GetSchemaValueType(this JsonElement element)

Provides the JSON Schema type for a value.

#### Declaration

```c#
public static SchemaValueType GetSchemaValueType(this JsonElement element)
```

| Parameter | Type | Description |
|---|---|---|
| element | JsonElement | The node. |


#### Returns

The **Json.Schema.SchemaValueType** of the value.

