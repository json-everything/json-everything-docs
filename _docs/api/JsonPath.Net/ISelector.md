---
layout: "page"
title: "ISelector Interface"
bookmark: "ISelector"
permalink: "/api/JsonPath.Net/:title/"
order: "10.08.007"
---
**Namespace:** Json.Path

**Inheritance:**
`ISelector`

Defines a path segment selector.

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


### Evaluate(Node match, JsonNode rootNode)

Evaluates the selector.

#### Declaration

```c#
public abstract IEnumerable<Node> Evaluate(Node match, JsonNode rootNode)
```

| Parameter | Type | Description |
|---|---|---|
| match | Node | The node to evaluate. |
| rootNode | JsonNode | The root node (typically used by filter selectors, e.g. `$[?@foo < $.bar]`) |


#### Returns

A collection of nodes.
            
Semantically, this is a nodelist, but leaving as IEnumerable&lt;Node&gt; allows for deferred execution.

