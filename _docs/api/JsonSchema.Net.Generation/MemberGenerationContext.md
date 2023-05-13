---
layout: "page"
title: "MemberGenerationContext Class"
bookmark: "MemberGenerationContext"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.19"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`MemberGenerationContext`
 🡒 
`SchemaGenerationContextBase`
 🡒 
`object`

Provides context for object members to include those attributes.

## Properties

| Name | Type | Summary |
|---|---|---|
| **BasedOn** | SchemaGenerationContextBase | Gets the context this is based on. |
| **Attributes** | List\<Attribute\> | Gets the set of member attributes. |
| **Type** | Type | The type. |
| **ReferenceCount** | int | The number of times this context has been referenced. |
| **Intents** | List\<ISchemaKeywordIntent\> | The keyword intents required for this type. |
| **Hash** | int | A calculated hash value that represents and identifies this context. |
