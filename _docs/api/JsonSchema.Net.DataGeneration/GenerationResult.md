---
layout: "page"
title: "GenerationResult Class"
bookmark: "GenerationResult"
permalink: "/api/JsonSchema.Net.DataGeneration/:title/"
order: "10.07.002"
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
| **Location** | JsonPointer? | Gets the relative instance location at which this failure occurred, if known. |
| **Result** | JsonNode | Gets the resulting JSON data, if successful. |
| **SchemaLocations** | IReadOnlyList\<JsonPointer\> | Gets the related schema locations for this failure, if known. |

