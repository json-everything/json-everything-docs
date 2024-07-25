---
layout: "page"
title: "MemberGenerationContext Class"
bookmark: "MemberGenerationContext"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.051"
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
| **Attributes** | List\<Attribute\> | Gets the set of member attributes. |
| **BasedOn** | SchemaGenerationContextBase | Gets the context this is based on. |
| **Hash** | int | A calculated hash value that represents and identifies this context. |
| **Intents** | List\<ISchemaKeywordIntent\> | The keyword intents required for this type. |
| **ReferenceCount** | int | The number of times this context has been referenced. |
| **Type** | Type | The type. |

