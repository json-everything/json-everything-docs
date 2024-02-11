---
layout: "page"
title: "TemplateException Class"
bookmark: "TemplateException"
permalink: "/api/JsonE.Net/:title/"
order: "10.11.010"
---
**Namespace:** Json.JsonE

**Inheritance:**
`TemplateException`
 🡒 
`JsonEException`
 🡒 
`Exception`
 🡒 
`object`

**Implemented interfaces:**

- ISerializable

Thrown from **Json.JsonE.JsonE.Evaluate(System.Text.Json.Nodes.JsonNode,System.Text.Json.Nodes.JsonNode)** when a template is invalid.

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

### TemplateException(string message)

Creates a new instance of **Json.JsonE.TemplateException**.

#### Declaration

```c#
public TemplateException(string message)
```

| Parameter | Type | Description |
|---|---|---|
| message | string | The error message. |


