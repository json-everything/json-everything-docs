---
layout: "page"
title: "Vocabularies Class"
bookmark: "Vocabularies"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "10.02.011"
---
**Namespace:** Json.Schema.Data

**Inheritance:**
`Vocabularies`
 🡒 
`object`

Declares the vocabularies of the supported drafts.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Data** | Vocabulary | The data vocabulary. |
| **DataId** | string | The data vocabulary ID. |

## Methods

### Register(VocabularyRegistry vocabRegistry, SchemaRegistry schemaRegistry)

Registers the all components required to use the data vocabulary.

#### Declaration

```c#
public static void Register(VocabularyRegistry vocabRegistry, SchemaRegistry schemaRegistry)
```


