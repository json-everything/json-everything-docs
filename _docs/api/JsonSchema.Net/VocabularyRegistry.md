---
layout: "page"
title: "VocabularyRegistry Class"
bookmark: "VocabularyRegistry"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.112"
---
**Namespace:** Json.Schema

**Inheritance:**
`VocabularyRegistry`
 🡒 
`object`

A registry for vocabularies.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Global** | VocabularyRegistry | The global registry. |

## Methods

### Get(Uri vocabularyId)

Retrieves the vocabulary associated with the URI ID, if known.

#### Declaration

```c#
public Vocabulary Get(Uri vocabularyId)
```

| Parameter | Type | Description |
|---|---|---|
| vocabularyId | Uri | The URI ID. |


#### Returns

The vocabulary, if known; otherwise null.

### IsKnown(Uri vocabularyId)

Indicates whether a vocabulary is known by URI ID and/or anchor.

#### Declaration

```c#
public bool IsKnown(Uri vocabularyId)
```

| Parameter | Type | Description |
|---|---|---|
| vocabularyId | Uri | The URI ID. |


#### Returns

`true`, if registered in either this or the global registry;
`false` otherwise.

### Register(Vocabulary vocabulary)

Registers a vocabulary.  This does not register the vocabulary's
keywords.  This must be done separately.

#### Declaration

```c#
public void Register(Vocabulary vocabulary)
```

| Parameter | Type | Description |
|---|---|---|
| vocabulary | Vocabulary |  |


