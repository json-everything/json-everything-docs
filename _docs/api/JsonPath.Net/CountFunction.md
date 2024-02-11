---
layout: "page"
title: "CountFunction Class"
bookmark: "CountFunction"
permalink: "/api/JsonPath.Net/:title/"
order: "10.07.000"
---
**Namespace:** Json.Path

**Inheritance:**
`CountFunction`
 🡒 
`ValueFunctionDefinition`
 🡒 
`object`

**Implemented interfaces:**

- IReflectiveFunctionDefinition
- IPathFunctionDefinition

Implements the `count()` function which returns the number of nodes
in a nodelist.

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
| nodeList | NodeList | A nodelist |


#### Returns

The number of nodes in the nodelist.

