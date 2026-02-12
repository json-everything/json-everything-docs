---
layout: "page"
title: "VocabularyRegistry Class"
bookmark: "VocabularyRegistry"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.116"
---
**Namespace:** Json.Schema

**Inheritance:**
`VocabularyRegistry`
 🡒 
`object`

Provides a registry for managing JSON Schema vocabularies, allowing registration and unregistration of custom
vocabularies in addition to well-known official vocabularies.

## Remarks

The registry maintains a set of official vocabularies that cannot be modified or removed. Use the
            **Json.Schema.VocabularyRegistry.Global** property to access a shared, application-wide registry instance. Getting vocabularies via

## Properties

| Name | Type | Summary |
|---|---|---|
| **Global** | VocabularyRegistry | Gets the global registry of vocabularies available throughout the application. |

## Methods

### Register(Vocabulary vocabulary)

Registers a custom vocabulary for use within the system.

#### Declaration

```c#
public void Register(Vocabulary vocabulary)
```

| Parameter | Type | Description |
|---|---|---|
| vocabulary | Vocabulary | The vocabulary to register. The vocabulary's identifier must not conflict with any official vocabularies. |


#### Remarks

Registering a vocabulary allows it to be referenced and used in subsequent operations. Official

### Unregister(Uri vocabularyId)

Removes the vocabulary identified by the specified URI from the registry.

#### Declaration

```c#
public void Unregister(Uri vocabularyId)
```

| Parameter | Type | Description |
|---|---|---|
| vocabularyId | Uri | The URI that uniquely identifies the vocabulary to remove. Cannot be an official vocabulary. |


