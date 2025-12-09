---
layout: "page"
title: "EvaluationContext Struct"
bookmark: "EvaluationContext"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.039"
---
**Namespace:** Json.Schema

**Inheritance:**
`EvaluationContext`
 🡒 
`ValueType`
 🡒 
`object`

Provides contextual information used during schema evaluation, including options, scope, instance data, and
evaluation paths.

## Remarks

The EvaluationContext struct encapsulates all relevant data required for evaluating a JSON schema
            against an instance. It includes evaluation options, dynamic scope for reference resolution, pointers to the current
            evaluation and instance locations, and access to the schema registry.  When building custom keywords that use
            subschemas, create a new context by copying this one and modifying the **Json.Schema.EvaluationContext.EvaluationPath**, **Json.Schema.EvaluationContext.Instance**,

## Properties

| Name | Type | Summary |
|---|---|---|
| **EvaluatedKeywords** | List\<KeywordEvaluation\> | Gets the collection of keyword evaluations that have been performed for the current instance. |
| **EvaluationPath** | JsonPointer | Gets or sets a JSON Pointer representing the path through the schemas and across references to the currently evaluated subschema. |
| **Instance** | JsonElement | Gets the JSON element that represents the instance data. |
| **InstanceLocation** | JsonPointer | Gets or sets the JSON Pointer indicating the location of the instance within the JSON document. |
| **InstanceRoot** | JsonElement | Gets the JSON element that represents the instance data root. |
| **Options** | EvaluationOptions | Gets the evaluation options. |
| **RefIgnoresSiblingKeywords** | bool | Gets a value indicating whether reference resolution ignores sibling keywords during processing. |
| **SchemaRegistry** | SchemaRegistry | Gets the schema registry used to manage and retrieve schema resources. |
| **Scope** | DynamicScope | Gets the dynamic scope. |

