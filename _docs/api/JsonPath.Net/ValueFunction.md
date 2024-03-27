---
layout: "page"
title: "ValueFunction Class"
bookmark: "ValueFunction"
permalink: "/api/JsonPath.Net/:title/"
order: "10.08.027"
---
**Namespace:** Json.Path

**Inheritance:**
`ValueFunction`
 🡒 
`ValueFunctionDefinition`
 🡒 
`object`

**Implemented interfaces:**

- IReflectiveFunctionDefinition
- IPathFunctionDefinition

Implements the `value()` function which extracts a single value from a nodelist.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Name** | string | Gets the function name. |

## Methods

### Evaluate(NodeList nodeList)

Evaluates the function.

#### Declaration

```c#
public JsonNode Evaluate(NodeList nodeList)
```

| Parameter | Type | Description |
|---|---|---|
| nodeList | NodeList | A nodelist. |


#### Returns

If the nodelist contains a single node, that node's value; otherwise null.

