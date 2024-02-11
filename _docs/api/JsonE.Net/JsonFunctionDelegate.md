---
layout: "page"
title: "JsonFunctionDelegate Delegate"
bookmark: "JsonFunctionDelegate"
permalink: "/api/JsonE.Net/:title/"
order: "10.11.008"
---
# JsonFunctionDelegate Delegate

**Namespace:** Json.JsonE

**Inheritance:**
`JsonFunctionDelegate`
 🡒 
`MulticastDelegate`
 🡒 
`Delegate`
 🡒 
`object`

**Implemented interfaces:**

- ICloneable
- ISerializable

Defines a signature for custom JSON-e functions.

#### Declaration

```c#
public delegate JsonNode JsonFunctionDelegate(JsonNode[] arguments, EvaluationContext context)
```

| Parameter | Type | Description |
|---|---|---|
| arguments | JsonNode[] |  |
| context | EvaluationContext |  |


#### Returns



