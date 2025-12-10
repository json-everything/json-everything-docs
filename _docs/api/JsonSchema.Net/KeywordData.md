---
layout: "page"
title: "KeywordData Class"
bookmark: "KeywordData"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.068"
---
**Namespace:** Json.Schema

**Inheritance:**
`KeywordData`
 🡒 
`object`

Represents the data and metadata associated with a JSON Schema keyword, including its handler, raw value, evaluated
value, and any associated subschemas.

## Remarks

Instances of this class are used during JSON Schema processing to track keyword-specific
            information. The properties provide access to both the raw JSON representation and the processed value, as well as

## Properties

| Name | Type | Summary |
|---|---|---|
| **Handler** | IKeywordHandler | Gets the keyword handler used to process keyword-related operations. |
| **RawValue** | JsonElement | Gets the underlying JSON value represented by this instance. |
| **Subschemas** | JsonSchemaNode[] | Gets or sets the collection of subschema nodes. |
| **Value** | object | Gets or sets a value. |

