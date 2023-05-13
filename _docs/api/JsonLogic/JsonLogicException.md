---
layout: "page"
title: "JsonLogicException Class"
bookmark: "JsonLogicException"
permalink: "/api/JsonLogic/:title/"
order: "9.10.01"
---
**Namespace:** Json.Logic

**Inheritance:**
`JsonLogicException`
 🡒 
`Exception`
 🡒 
`object`

**Implemented interfaces:**

- ISerializable

Thrown when a rule cannot be processed or deserialized.

## Properties

| Name | Type | Summary |
|---|---|---|
| **TargetSite** | MethodBase |  |
| **Message** | string |  |
| **Data** | IDictionary |  |
| **InnerException** | Exception |  |
| **HelpLink** | string |  |
| **Source** | string |  |
| **HResult** | int |  |
| **StackTrace** | string |  |
## Constructors

### JsonLogicException(string message)

Creates a new instance of the **Json.Logic.JsonLogicException** class.

#### Declaration

```c#
public JsonLogicException(string message)
```
| Parameter | Type | Description |
|---|---|---|
| message | string | The exception message. |

