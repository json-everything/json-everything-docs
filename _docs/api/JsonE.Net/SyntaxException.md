---
layout: "page"
title: "SyntaxException Class"
bookmark: "SyntaxException"
permalink: "/api/JsonE.Net/:title/"
order: "10.12.009"
---
**Namespace:** Json.JsonE

**Inheritance:**
`SyntaxException`
 🡒 
`JsonEException`
 🡒 
`Exception`
 🡒 
`object`

**Implemented interfaces:**

- ISerializable

Thrown from **Json.JsonE.JsonE.Evaluate(System.Text.Json.Nodes.JsonNode,System.Text.Json.Nodes.JsonNode)** when an expression contains invalid syntax.

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

### SyntaxException(string message)

Creates a new instance of **Json.JsonE.SyntaxException**.

#### Declaration

```c#
public SyntaxException(string message)
```

| Parameter | Type | Description |
|---|---|---|
| message | string | The error message. |


