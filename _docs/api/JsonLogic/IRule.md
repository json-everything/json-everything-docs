---
layout: "page"
title: "IRule Interface"
bookmark: "IRule"
permalink: "/api/JsonLogic/:title/"
order: "10.11.010"
---
**Namespace:** Json.Logic

**Inheritance:**
`IRule`

Defines functionality for a model-less approach to evaluating JSON Logic rules.

## Methods

### Apply(JsonNode args, EvaluationContext context)

Applies the rule.

#### Declaration

```c#
public abstract JsonNode Apply(JsonNode args, EvaluationContext context)
```

| Parameter | Type | Description |
|---|---|---|
| args | JsonNode | The arguments. |
| context | EvaluationContext | The context. |


#### Returns

The result.

