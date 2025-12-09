---
layout: "page"
title: "BuildOptions Class"
bookmark: "BuildOptions"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.009"
---
**Namespace:** Json.Schema

**Inheritance:**
`BuildOptions`
 🡒 
`object`

Provides configuration options for schema building, including registries and dialect selection.

## Remarks

Use this class to customize how schemas are built, such as specifying registries for
            schemas, vocabularies, and dialects. The options set in this class determine how schema resolution and dialect
            selection are performed during the build process. The static **Json.Schema.BuildOptions.Default** property provides a set of

## Properties

| Name | Type | Summary |
|---|---|---|
| **Default** | BuildOptions | The default settings. |
| **Dialect** | Dialect | Gets the dialect to be used when building schemas with these options. |
| **DialectRegistry** | DialectRegistry | The local dialect registry.  If a dialect is not found here, it will automatically check the global registry as well. |
| **SchemaRegistry** | SchemaRegistry | The local schema registry.  If a schema is not found here, it will automatically check the global registry as well. |
| **VocabularyRegistry** | VocabularyRegistry | The local vocabulary registry.  If a vocabulary is not found here, it will automatically check the global registry as well. |

