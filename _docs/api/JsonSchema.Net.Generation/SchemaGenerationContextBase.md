---
layout: "page"
title: "SchemaGenerationContextBase Class"
bookmark: "SchemaGenerationContextBase"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.077"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`SchemaGenerationContextBase`
 🡒 
`object`

Provides base functionality and data for generation contexts.

## Fields

| Name | Type | Summary |
|---|---|---|
| **False** | SchemaGenerationContextBase | Represents a false schema. |
| **True** | SchemaGenerationContextBase | Represents a true schema. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Intents** | List\<ISchemaKeywordIntent\> | The keyword intents required for this type. |
| **Type** | Type | The type. |

## Methods

### Apply(JsonSchemaBuilder builder)

Applies the keyword to the **Json.Schema.JsonSchemaBuilder**.

#### Declaration

```c#
public JsonSchemaBuilder Apply(JsonSchemaBuilder builder)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The schema builder. |


#### Returns

The schema builder (for fluent syntax support).

