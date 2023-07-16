---
layout: "page"
title: "SliceSelector Class"
bookmark: "SliceSelector"
permalink: "/api/JsonPath.Net/:title/"
order: "9.07.026"
---
**Namespace:** Json.Path

**Inheritance:**
`SliceSelector`
 🡒 
`object`

**Implemented interfaces:**

- ISelector

Represents a slice selector in the form `start : end : step`.

## Properties

| Name | Type | Summary |
|---|---|---|
| **End** | int? | Gets the end. |
| **Start** | int? | Gets the start. |
| **Step** | int? | Gets the step. |

## Methods

### BuildString(StringBuilder builder)

Builds a string using a string builder.

#### Declaration

```c#
public void BuildString(StringBuilder builder)
```

| Parameter | Type | Description |
|---|---|---|
| builder | StringBuilder | The string builder. |


### Evaluate(Node match, JsonNode rootNode)

Evaluates the selector.

#### Declaration

```c#
public IEnumerable<Node> Evaluate(Node match, JsonNode rootNode)
```

| Parameter | Type | Description |
|---|---|---|
| match | Node | The node to evaluate. |
| rootNode | JsonNode | The root node (typically used by filter selectors, e.g. `$[?@foo < $.bar]`) |


#### Returns

A collection of nodes.
            
Semantically, this is a nodelist, but leaving as IEnumerable&lt;Node&gt; allows for deferred execution.

### ToString()

Returns a string that represents the current object.

#### Declaration

```c#
public override string ToString()
```


#### Returns

A string that represents the current object.

