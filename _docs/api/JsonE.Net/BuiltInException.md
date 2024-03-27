---
layout: "page"
title: "BuiltInException Class"
bookmark: "BuiltInException"
permalink: "/api/JsonE.Net/:title/"
order: "10.12.000"
---
**Namespace:** Json.JsonE

**Inheritance:**
`BuiltInException`
 🡒 
`JsonEException`
 🡒 
`Exception`
 🡒 
`object`

**Implemented interfaces:**

- ISerializable

Thrown from **Json.JsonE.JsonE.Evaluate(System.Text.Json.Nodes.JsonNode,System.Text.Json.Nodes.JsonNode)** when a built-in function cannot be evaluated.

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

### BuiltInException(string message)

Creates a new instance of **Json.JsonE.BuiltInException**.

#### Declaration

```c#
public BuiltInException(string message)
```

| Parameter | Type | Description |
|---|---|---|
| message | string | The error message. |


