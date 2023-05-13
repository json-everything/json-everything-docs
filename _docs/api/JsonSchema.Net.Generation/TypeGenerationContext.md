---
layout: "page"
title: "TypeGenerationContext Class"
bookmark: "TypeGenerationContext"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.38"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`TypeGenerationContext`
 🡒 
`SchemaGenerationContextBase`
 🡒 
`object`

Provides a context for generating schemas for types.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Type** | Type | The type. |
| **ReferenceCount** | int | The number of times this context has been referenced. |
| **Intents** | List\<ISchemaKeywordIntent\> | The keyword intents required for this type. |
| **Hash** | int | A calculated hash value that represents and identifies this context. |
