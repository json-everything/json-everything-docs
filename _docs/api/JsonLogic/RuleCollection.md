---
layout: "page"
title: "RuleCollection Class"
bookmark: "RuleCollection"
permalink: "/api/JsonLogic/:title/"
order: "10.10.035"
---
**Namespace:** Json.Logic.Rules

**Inheritance:**
`RuleCollection`
 🡒 
`Rule`
 🡒 
`object`

Provides a stand-in "rule" for collections of rules.

## Remarks

This is not exactly part of the specification, but it helps things in this library.

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

