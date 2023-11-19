---
layout: "page"
title: "MapRule Class"
bookmark: "MapRule"
permalink: "/api/JsonLogic/:title/"
order: "9.11.020"
---
**Namespace:** Json.Logic.Rules

**Inheritance:**
`MapRule`
 🡒 
`Rule`
 🡒 
`object`

Handles the `map` operation.

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

