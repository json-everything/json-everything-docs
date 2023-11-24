---
layout: "page"
title: "IfAttribute Class"
bookmark: "IfAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
0.05.028"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`IfAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- IConditionAttribute

Creates or amends a condition group by expecting a value in a property.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **PropertyName** | string | The property name. |
| **TypeId** | object |  |
| **Value** | object | The expected property value. |

## Constructors

### IfAttribute(string propertyName, object value, object group)

Creates a new **Json.Schema.Generation.IfAttribute** instance.

#### Declaration

```c#
public IfAttribute(string propertyName, object value, object group)
```

| Parameter | Type | Description |
|---|---|---|
| propertyName | string | The name of the property. |
| value | object | The expected value for the property (should be JSON-compatible). |
| group | object | The condition group. |


