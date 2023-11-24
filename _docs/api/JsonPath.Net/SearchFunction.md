---
layout: "page"
title: "SearchFunction Class"
bookmark: "SearchFunction"
permalink: "/api/JsonPath.Net/:title/"
0.08.025"
---
**Namespace:** Json.Path

**Inheritance:**
`SearchFunction`
 🡒 
`LogicalFunctionDefinition`
 🡒 
`object`

**Implemented interfaces:**

- IReflectiveFunctionDefinition
- IPathFunctionDefinition

Implements the `match()` function which determines if any substring within
a string matches a regular expression.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Name** | string | Gets the function name. |

## Methods

### Evaluate(JsonNode value, JsonNode pattern)

Evaluates the function.

#### Declaration

```c#
public bool Evaluate(JsonNode value, JsonNode pattern)
```

| Parameter | Type | Description |
|---|---|---|
| value | JsonNode | The value to test. |
| pattern | JsonNode | The iregexp pattern to test against. |


#### Returns

true if the string contains a match for the pattern; false otherwise.

