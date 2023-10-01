---
layout: "page"
title: "IFilterExpression Interface"
bookmark: "IFilterExpression"
permalink: "/api/JsonPath.Net/:title/"
order: "9.08.004"
---
**Namespace:** Json.Path

**Inheritance:**
`IFilterExpression`

Exposes the filter expression.

## Methods

### BuildString(StringBuilder builder)

Builds a string using a string builder.

#### Declaration

```c#
public abstract void BuildString(StringBuilder builder)
```

| Parameter | Type | Description |
|---|---|---|
| builder | StringBuilder | The string builder. |


### Evaluate(JsonNode globalParameter, JsonNode localParameter)

Evaluates the selector.

#### Declaration

```c#
public abstract bool Evaluate(JsonNode globalParameter, JsonNode localParameter)
```

| Parameter | Type | Description |
|---|---|---|
| globalParameter | JsonNode | The root node of the data, represented by `$`. |
| localParameter | JsonNode | The current node in the filter, represented by `@`. |


#### Returns

true if the node should be selected; false otherwise.

