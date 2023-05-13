---
layout: "page"
title: "SchemaGenerationContextBase Class"
bookmark: "SchemaGenerationContextBase"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.32"
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
| **True** | SchemaGenerationContextBase | Represents a true schema. |
| **False** | SchemaGenerationContextBase | Represents a false schema. |
## Properties

| Name | Type | Summary |
|---|---|---|
| **Type** | Type | The type. |
| **ReferenceCount** | int | The number of times this context has been referenced. |
| **Intents** | List\<ISchemaKeywordIntent\> | The keyword intents required for this type. |
| **Hash** | int | A calculated hash value that represents and identifies this context. |
## Methods

### Apply(JsonSchemaBuilder builder)

Applies the keyword to the **Json.Schema.JsonSchemaBuilder**.

#### Declaration

```c#
public JsonSchema Apply(JsonSchemaBuilder builder)
```
| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The schema builder. |

#### Returns

The schema builder (for fluent syntax support).

