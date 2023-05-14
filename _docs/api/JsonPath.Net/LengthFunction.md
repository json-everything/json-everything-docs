---
layout: "page"
title: "LengthFunction Class"
bookmark: "LengthFunction"
permalink: "/api/JsonPath.Net/:title/"
order: "9.07.10"
---
**Namespace:** Json.Path

**Inheritance:**
`LengthFunction`
 🡒 
`ValueFunctionDefinition`
 🡒 
`object`

**Implemented interfaces:**

- IReflectiveFunctionDefinition
- IPathFunctionDefinition

Implements the `length()` function to get:
- the length of a string
- the count of values in an array
- the count of values in an object

## Properties

| Name | Type | Summary |
|---|---|---|
| **Name** | string | Gets the function name. |

## Methods

### Evaluate(JsonNode value)

Evaluates the function.

#### Declaration

```c#
public JsonNode Evaluate(JsonNode value)
```

| Parameter | Type | Description |
|---|---|---|
| value | JsonNode | An object, array, or string |


#### Returns

If an object or array, the number of items it contains; if a string, the length.

