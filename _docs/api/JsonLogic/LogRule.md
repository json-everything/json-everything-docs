---
layout: "page"
title: "LogRule Class"
bookmark: "LogRule"
permalink: "/api/JsonLogic/:title/"
order: "10.11.020"
---
**Namespace:** Json.Logic.Rules

**Inheritance:**
`LogRule`
 🡒 
`Rule`
 🡒 
`object`

**Implemented interfaces:**

- IRule

Handles the `log` operation.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Logger** | ILogicLogger | Gets or sets the logger used for logic operations. |

## Methods

### Apply(JsonNode data, JsonNode contextData)

Applies the rule to the input data.

#### Declaration

```c#
public override JsonNode Apply(JsonNode data, JsonNode contextData)
```

| Parameter | Type | Description |
|---|---|---|
| data | JsonNode | The input data. |
| contextData | JsonNode | Optional secondary data.  Used by a few operators to pass a secondary     data context to inner operators. |


#### Returns

The result of the rule.

