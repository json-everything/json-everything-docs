---
layout: "page"
title: "RefResolutionException Class"
bookmark: "RefResolutionException"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.044"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`RefResolutionException`
 🡒 
`Exception`
 🡒 
`object`

**Implemented interfaces:**

- ISerializable

Thrown when a `$ref` cannot be resolved.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Data** | IDictionary |  |
| **HelpLink** | string |  |
| **HResult** | int |  |
| **InnerException** | Exception |  |
| **Message** | string |  |
| **Source** | string |  |
| **StackTrace** | string |  |
| **TargetSite** | MethodBase |  |

## Constructors

### RefResolutionException(string message)



#### Declaration

```c#
public RefResolutionException(string message)
```

| Parameter | Type | Description |
|---|---|---|
| message | string | The exception message. |


