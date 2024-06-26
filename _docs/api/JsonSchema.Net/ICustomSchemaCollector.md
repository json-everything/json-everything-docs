---
layout: "page"
title: "ICustomSchemaCollector Interface"
bookmark: "ICustomSchemaCollector"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.069"
---
**Namespace:** Json.Schema

**Inheritance:**
`ICustomSchemaCollector`

Indicates that the keyword contains subschemas in such a way that does not
fit with **Json.Schema.ISchemaContainer**, **Json.Schema.ISchemaCollector**, or
**Json.Schema.IKeyedSchemaCollector**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Schemas** | IEnumerable\<JsonSchema\> | The subschemas. |

## Methods

### FindSubschema(JsonPointer pointer)

Gets the indicated subschema.

#### Declaration

```c#
public abstract (JsonSchema Schema, int SegmentsConsumed) FindSubschema(JsonPointer pointer)
```

| Parameter | Type | Description |
|---|---|---|
| pointer | JsonPointer |  |


#### Returns

If found, the schema and the number of segments followed to find the subschema; `(null, 0)` otherwise.

