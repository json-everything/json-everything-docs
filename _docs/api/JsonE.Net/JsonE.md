---
layout: "page"
title: "JsonE Class"
bookmark: "JsonE"
permalink: "/api/JsonE.Net/:title/"
order: "10.12.005"
---
**Namespace:** Json.JsonE

**Inheritance:**
`JsonE`
 🡒 
`object`

Models a JSON-e template.

## Methods

### Evaluate(JsonNode template, JsonNode context)

Evaluates the template against a JSON value context.

#### Declaration

```c#
public static JsonNode Evaluate(JsonNode template, JsonNode context)
```

| Parameter | Type | Description |
|---|---|---|
| template | JsonNode |  |
| context | JsonNode | The JSON value context |


#### Returns

A new JSON value result.

