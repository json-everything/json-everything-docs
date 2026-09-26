---
layout: "page"
title: "FetchFunc Delegate"
bookmark: "FetchFunc"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.011"
---
# FetchFunc Delegate

**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`FetchFunc`
 🡒 
`MulticastDelegate`
 🡒 
`Delegate`
 🡒 
`object`

**Implemented interfaces:**

- ICloneable
- ISerializable

Retrieves the document identified by <paramref name="uri" />.

#### Declaration

```c#
public delegate Task<JsonElement?> FetchFunc(Uri uri)
```

## Remarks

The fetched value is the entire external document.  The `$ref`'s URI fragment is
then evaluated against it as a JSON Pointer to locate the referenced component,
which may be any component type.

| Parameter | Type | Description |
|---|---|---|
| uri | Uri | The resource URI |


#### Returns

The document content, or null if it could not be retrieved.

