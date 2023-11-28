---
layout: "page"
title: "EvaluationContext Class"
bookmark: "EvaluationContext"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.052"
---
**Namespace:** Json.Schema

**Inheritance:**
`EvaluationContext`
 🡒 
`object`

Provides contextual data for generating constraints and performing evaluations.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Dialect** | Dictionary\<Uri, Vocabulary[]\> | The vocabularies defined by the schema in the local scope. |
| **EvaluatingAs** | SpecVersion | Gets the spec version that the schema is currently being evaluated under. |
| **Options** | EvaluationOptions | Gets the evaluation options. |
| **Scope** | DynamicScope | Gets the dynamic scope. |

