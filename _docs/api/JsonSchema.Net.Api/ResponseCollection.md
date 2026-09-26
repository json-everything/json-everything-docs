---
layout: "page"
title: "ResponseCollection Class"
bookmark: "ResponseCollection"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.048"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`ResponseCollection`
 🡒 
`Dictionary<HttpStatusCode, Response>`
 🡒 
`object`

**Implemented interfaces:**

- IDictionary\<HttpStatusCode, Response\>
- ICollection\<KeyValuePair\<HttpStatusCode, Response\>\>
- IEnumerable\<KeyValuePair\<HttpStatusCode, Response\>\>
- IEnumerable
- IDictionary
- ICollection
- IReadOnlyDictionary\<HttpStatusCode, Response\>
- IReadOnlyCollection\<KeyValuePair\<HttpStatusCode, Response\>\>
- ISerializable
- IDeserializationCallback
- IRefTargetContainer

Models a response collection.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Capacity** | int |  |
| **Comparer** | IEqualityComparer\<HttpStatusCode\> |  |
| **Count** | int |  |
| **Default** | Response | Gets or sets the default response for the collection. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **Item** | Response |  |
| **Keys** | KeyCollection |  |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |
| **Values** | ValueCollection |  |

