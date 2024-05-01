---
layout: "page"
title: "DataRefResolutionException Class"
bookmark: "DataRefResolutionException"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "10.02.002"
---
**Namespace:** Json.Schema

**Inheritance:**
`DataRefResolutionException`
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

### DataRefResolutionException(IEnumerable\<string\> references, Exception innerException)

Thrown when a reference cannot be resolved.

#### Declaration

```c#
public DataRefResolutionException(IEnumerable<string> references, Exception innerException)
```

| Parameter | Type | Description |
|---|---|---|
| references | IEnumerable\<string\> | The references that could not be resolved. |
| innerException | Exception | The exception that caused this error. |


