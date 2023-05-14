---
layout: "page"
title: "MatchFunction Class"
bookmark: "MatchFunction"
permalink: "/api/JsonPath.Net/:title/"
order: "9.07.12"
---
**Namespace:** Json.Path

**Inheritance:**
`MatchFunction`
 🡒 
`LogicalFunctionDefinition`
 🡒 
`object`

**Implemented interfaces:**

- IReflectiveFunctionDefinition
- IPathFunctionDefinition

Implements the `match()` function which determines if a string exactly matches a regular
expression (using implicit anchoring).

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

true if the whole string is a match for the pattern; false otherwise.

