---
layout: "page"
title: "JsonSchemaExtensions Class"
bookmark: "JsonSchemaExtensions"
permalink: "/api/JsonSchema.Net.DataGeneration/:title/"
0.06.003"
---
**Namespace:** Json.Schema.DataGeneration

**Inheritance:**
`JsonSchemaExtensions`
 🡒 
`object`

Provides extension methods for **Json.Schema.JsonSchema** to generate sample data.

## Methods

### GenerateData(this JsonSchema schema)

Attempts to generate sample data that meets the requirements of the schema.

#### Declaration

```c#
public static GenerationResult GenerateData(this JsonSchema schema)
```

| Parameter | Type | Description |
|---|---|---|
| schema | JsonSchema | The schema. |


#### Returns

A result object indicating success and containing the result or error message.

