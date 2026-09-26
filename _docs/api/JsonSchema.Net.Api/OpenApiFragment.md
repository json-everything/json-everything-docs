---
layout: "page"
title: "OpenApiFragment Class"
bookmark: "OpenApiFragment"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.026"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`OpenApiFragment`
 🡒 
`object`

One assembly's contribution to an OpenAPI document.

## Remarks

Each project that references this package emits a fragment describing the API surface
it declares.  `AddOpenApi()` collects the fragments from the entry assembly and
everything it references, then assembles them into a single document, so controllers
declared in a class library are included without that library knowing about the host.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ComponentNames** | IReadOnlyDictionary\<Type, string\> | Gets or sets the component name for each type with a schema. |
| **EnumFormat** | EnumFormat | Gets or sets how the assembly's generated schemas describe enumerations by default, from its `JsonSchemaDefaultEnumFormat` build property. |
| **Name** | string | Gets or sets the name of the description this fragment contributes to, or null for the default description. |
| **Operations** | IReadOnlyList\<OpenApiFragmentOperation\> | Gets or sets the operations declared by this assembly. |
| **Schemas** | IReadOnlyDictionary\<string, JsonSchema\> | Gets or sets the component schemas declared by this assembly, keyed by component name. |

