---
layout: "page"
title: "RefResolutionException Class"
bookmark: "RefResolutionException"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "10.02.008"
---
**Namespace:** Json.Schema

**Inheritance:**
`RefResolutionException`
 🡒 
`Exception`
 🡒 
`object`

**Implemented interfaces:**

- ISerializable

Thrown when a reference cannot be resolved.

## Remarks

This class will be moved into a future version of JsonSchema.Net.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Data** | IDictionary |  |
| **HelpLink** | string |  |
| **HResult** | int |  |
| **InnerException** | Exception |  |
| **Message** | string |  |
| **References** | IEnumerable\<string\> | The URI that could not be resolved. |
| **Source** | string |  |
| **StackTrace** | string |  |
| **TargetSite** | MethodBase |  |

## Constructors

### RefResolutionException(IEnumerable\<string\> references, Exception innerException)

Thrown when a reference cannot be resolved.

#### Declaration

```c#
public RefResolutionException(IEnumerable<string> references, Exception innerException)
```

| Parameter | Type | Description |
|---|---|---|
| references | IEnumerable\<string\> | The references that could not be resolved. |
| innerException | Exception | The exception that caused this error. |


