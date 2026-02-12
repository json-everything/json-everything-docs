---
layout: "page"
title: "GenerateJsonSchemaAttribute Class"
bookmark: "GenerateJsonSchemaAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.055.025"
---
**Namespace:** Json.Schema.Generation.Serialization

**Inheritance:**
`GenerateJsonSchemaAttribute`
 🡒 
`Attribute`
 🡒 
`object`

Apply to a type to generate a schema for validation during deserialization
by **Json.Schema.Generation.Serialization.GenerativeValidatingJsonConverter**.

## Remarks

When applied, source generation will create a static property containing a pre-built
**Json.Schema.JsonSchema** for the decorated type at compile time.

## Properties

| Name | Type | Summary |
|---|---|---|
| **PropertyNaming** | NamingConvention | Gets or sets the naming convention to use for property names in the generated schema. |
| **PropertyOrder** | PropertyOrder | Gets or sets the order in which properties will be listed in the schema. |
| **StrictConditionals** | bool | Gets or sets whether properties affected by conditionals are defined globally or only within their respective then subschemas. |
| **TypeId** | object |  |

