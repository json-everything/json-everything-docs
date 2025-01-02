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
| **BasedOn** | TypeGenerationContext | Gets the context this is based on. |
| **Intents** | List\<ISchemaKeywordIntent\> | The keyword intents required for this type. |
| **NullableRef** | bool | Indicates whether the member is marked as a nullable reference type. |
| **Parameter** | int | Gets or sets the generic parameter that this context represents. A null value (default) represents the root type. |
| **Type** | Type | The type. |

