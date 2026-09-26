---
layout: "page"
title: "PathCollection Class"
bookmark: "PathCollection"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.039"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`PathCollection`
 🡒 
`Dictionary<PathTemplate, PathItem>`
 🡒 
`object`

**Implemented interfaces:**

- IDictionary\<PathTemplate, PathItem\>
- ICollection\<KeyValuePair\<PathTemplate, PathItem\>\>
- IEnumerable\<KeyValuePair\<PathTemplate, PathItem\>\>
- IEnumerable
- IDictionary
- ICollection
- IReadOnlyDictionary\<PathTemplate, PathItem\>
- IReadOnlyCollection\<KeyValuePair\<PathTemplate, PathItem\>\>
- ISerializable
- IDeserializationCallback
- IRefTargetContainer

Models a path collection.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Capacity** | int |  |
| **Comparer** | IEqualityComparer\<PathTemplate\> |  |
| **Count** | int |  |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **Item** | PathItem |  |
| **Keys** | KeyCollection |  |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |
| **Values** | ValueCollection |  |

