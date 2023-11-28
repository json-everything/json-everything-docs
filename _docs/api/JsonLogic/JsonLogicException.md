---
layout: "page"
title: "JsonLogicException Class"
bookmark: "JsonLogicException"
permalink: "/api/JsonLogic/:title/"
order: "10.11.010"
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
| **Data** | IDictionary |  |
| **HelpLink** | string |  |
| **HResult** | int |  |
| **InnerException** | Exception |  |
| **Message** | string |  |
| **Source** | string |  |
| **StackTrace** | string |  |
| **TargetSite** | MethodBase |  |

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


