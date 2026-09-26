---
layout: "page"
title: "UnknownData Class"
bookmark: "UnknownData"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.061"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`UnknownData`
 🡒 
`Dictionary<string, JsonNode>`
 🡒 
`object`

**Implemented interfaces:**

- IDictionary\<string, JsonNode\>
- ICollection\<KeyValuePair\<string, JsonNode\>\>
- IEnumerable\<KeyValuePair\<string, JsonNode\>\>
- IEnumerable
- IDictionary
- ICollection
- IReadOnlyDictionary\<string, JsonNode\>
- IReadOnlyCollection\<KeyValuePair\<string, JsonNode\>\>
- ISerializable
- IDeserializationCallback

Holds properties that are present in the source JSON but are not recognized by this library.

## Remarks

Unrecognized properties are captured here rather than rejected, so that a document
written against a later version of the specification still loads, and so that
serializing it again does not silently discard them.
            
This is distinct from **Json.Schema.Api.OpenApi.ExtensionData**, which holds only the `x-` prefixed
vendor extensions defined by the specification.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Capacity** | int |  |
| **Comparer** | IEqualityComparer\<string\> |  |
| **Count** | int |  |
| **Item** | JsonNode |  |
| **Keys** | KeyCollection |  |
| **Values** | ValueCollection |  |

