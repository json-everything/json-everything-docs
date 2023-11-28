---
layout: "page"
title: "Rule Class"
bookmark: "Rule"
permalink: "/api/JsonLogic/:title/"
order: "10.11.035"
---
**Namespace:** Json.Logic

**Inheritance:**
`Rule`
 🡒 
`object`

Provides a base class for rules.

## Methods

### Apply(JsonNode data, JsonNode contextData)

Applies the rule to the input data.

#### Declaration

```c#
public abstract JsonNode Apply(JsonNode data, JsonNode contextData)
```

| Parameter | Type | Description |
|---|---|---|
| data | JsonNode | The input data. |
| contextData | JsonNode | Optional secondary data.  Used by a few operators to pass a secondary     data context to inner operators. |


#### Returns

The result of the rule.

