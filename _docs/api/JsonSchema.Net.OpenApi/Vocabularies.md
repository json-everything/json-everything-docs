---
layout: "page"
title: "Vocabularies Class"
bookmark: "Vocabularies"
permalink: "/api/JsonSchema.Net.OpenApi/:title/"
order: "9.04.07"
---
**Namespace:** Json.Schema.OpenApi

**Inheritance:**
`Vocabularies`
 🡒 
`object`

Declares the vocabularies of the supported drafts.

## Fields

| Name | Type | Summary |
|---|---|---|
| **OpenApi** | Vocabulary | The data vocabulary. |
| **OpenApiId** | string | The data vocabulary ID. |
## Methods

### Register(VocabularyRegistry vocabRegistry, SchemaRegistry schemaRegistry)

Registers the all components required to use the data vocabulary.

#### Declaration

```c#
public static void Register(VocabularyRegistry vocabRegistry, SchemaRegistry schemaRegistry)
```

