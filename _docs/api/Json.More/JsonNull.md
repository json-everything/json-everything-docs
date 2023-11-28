---
layout: "page"
title: "JsonNull Class"
bookmark: "JsonNull"
permalink: "/api/Json.More/:title/"
order: "10.12.008"
---
**Namespace:** Json.More

**Inheritance:**
`JsonNull`
 🡒 
`object`

Provides a **System.Text.Json.Nodes.JsonNode** instance to use as null.

## Remarks

.Net has decided to unify JSON null with .Net null.  This decision has a number
of consequences.  This value is provided to get around some of these issues.
            
This class *should not be used as a property value*, but rather as a signal to indicate
that null was explicitly passed rather than a property missing.
            
See https://github.com/dotnet/runtime/issues/68128 for more information.

## Properties

| Name | Type | Summary |
|---|---|---|
| **SignalNode** | JsonNode | Provides a static instance of this class wrapped in a **System.Text.Json.Nodes.JsonNode**. |

