---
layout: "page"
title: "PatternAttribute Class"
bookmark: "PatternAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.060"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`PatternAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler

Applies a `pattern` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **TypeId** | object |  |
| **Value** | string | The regular expression pattern. |

## Constructors

### PatternAttribute(string value)

Creates a new **Json.Schema.Generation.PatternAttribute** instance.

#### Declaration

```c#
public PatternAttribute(string value)
```

| Parameter | Type | Description |
|---|---|---|
| value | string | The value. |


