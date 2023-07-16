---
layout: "page"
title: "GenerationResult Class"
bookmark: "GenerationResult"
permalink: "/api/JsonSchema.Net.DataGeneration/:title/"
order: "9.06.002"
---
**Namespace:** Json.Schema.DataGeneration

**Inheritance:**
`GenerationResult`
 🡒 
`object`

Holds the result of an instance generation operation.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ErrorMessage** | string | Gets the error message from the generation, if unsuccessful. |
| **InnerResults** | IEnumerable\<GenerationResult\> | Gets the result objects from nested data generations. |
| **IsSuccess** | bool | Gets whether the data generation was successful. |
| **Result** | JsonNode | Gets the resulting JSON data, if successful. |

