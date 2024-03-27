---
layout: "page"
title: "InterpreterException Class"
bookmark: "InterpreterException"
permalink: "/api/JsonE.Net/:title/"
order: "10.12.004"
---
**Namespace:** Json.JsonE

**Inheritance:**
`InterpreterException`
 🡒 
`Exception`
 🡒 
`object`

**Implemented interfaces:**

- ISerializable

Thrown from **Json.JsonE.JsonE.Evaluate(System.Text.Json.Nodes.JsonNode,System.Text.Json.Nodes.JsonNode)** when a template cannot be evaluated.

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

### InterpreterException(string message)

Creates a new instance of **Json.JsonE.InterpreterException**.

#### Declaration

```c#
public InterpreterException(string message)
```

| Parameter | Type | Description |
|---|---|---|
| message | string | The error message. |


