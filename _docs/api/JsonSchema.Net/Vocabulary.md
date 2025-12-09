---
layout: "page"
title: "Vocabulary Class"
bookmark: "Vocabulary"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.111"
---
**Namespace:** Json.Schema

**Inheritance:**
`Vocabulary`
 🡒 
`object`

Represents a collection of keyword handlers associated with a specific vocabulary identifier.

## Remarks

Only JSON Schema drafts 2019-09 and 2020-12 make use of vocabularies. A vocabulary defines a set of
            keywords and their corresponding handlers, typically used to interpret or validate structured data according
            to a particular specification. The vocabulary is identified by a unique URI, and its keywords determine the

## Properties

| Name | Type | Summary |
|---|---|---|
| **Draft201909_Applicator** | Vocabulary | Gets the Applicator vocabulary definition in JSON Schema Draft 2019-09. |
| **Draft201909_Content** | Vocabulary | Gets the Content vocabulary definition in JSON Schema Draft 2019-09. |
| **Draft201909_Core** | Vocabulary | Gets the Core vocabulary definition in JSON Schema Draft 2019-09. |
| **Draft201909_Format** | Vocabulary | Gets the Format vocabulary definition in JSON Schema Draft 2019-09. |
| **Draft201909_MetaData** | Vocabulary | Gets the Meta-Data vocabulary definition in JSON Schema Draft 2019-09. |
| **Draft201909_Validation** | Vocabulary | Gets the Validation vocabulary definition in JSON Schema Draft 2019-09. |
| **Draft202012_Applicator** | Vocabulary | Gets the Applicator vocabulary definition in JSON Schema Draft 2019-09. |
| **Draft202012_Content** | Vocabulary | Gets the Content vocabulary definition in JSON Schema Draft 2019-09. |
| **Draft202012_Core** | Vocabulary | Gets the Core vocabulary definition in JSON Schema Draft 2019-09. |
| **Draft202012_FormatAnnotation** | Vocabulary | Gets the Format-Annotation vocabulary definition in JSON Schema Draft 2019-09. |
| **Draft202012_FormatAssertion** | Vocabulary | Gets the Format-Assertion vocabulary definition in JSON Schema Draft 2019-09. |
| **Draft202012_MetaData** | Vocabulary | Gets the Meta-Data vocabulary definition in JSON Schema Draft 2019-09. |
| **Draft202012_Unevaluated** | Vocabulary | Gets the Unevaluated vocabulary definition in JSON Schema Draft 2019-09. |
| **Draft202012_Validation** | Vocabulary | Gets the Validation vocabulary definition in JSON Schema Draft 2019-09. |
| **Id** | Uri | Gets the unique identifier for this resource as a URI. |
| **Keywords** | IKeywordHandler[] | Gets the collection of keyword handlers associated with the current instance. |

## Constructors

### Vocabulary(Uri id, IEnumerable\<IKeywordHandler\> keywords)

Initializes a new instance of the Vocabulary class with the specified identifier and keyword handlers.

#### Declaration

```c#
public Vocabulary(Uri id, IEnumerable<IKeywordHandler> keywords)
```

| Parameter | Type | Description |
|---|---|---|
| id | Uri | The unique identifier for the vocabulary. Cannot be null. |
| keywords | IEnumerable\<IKeywordHandler\> | One or more collections of keyword handlers to associate with the vocabulary. |


#### Remarks

All provided keyword handler collections are combined into a single set for the vocabulary.

