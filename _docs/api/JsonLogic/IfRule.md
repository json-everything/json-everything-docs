---
layout: "page"
title: "IfRule Class"
bookmark: "IfRule"
permalink: "/api/JsonLogic/:title/"
order: "10.11.007"
---
**Namespace:** Json.Logic.Rules

**Inheritance:**
`IfRule`
 🡒 
`Rule`
 🡒 
`object`

Handles the `if` and `?:` operations.

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

