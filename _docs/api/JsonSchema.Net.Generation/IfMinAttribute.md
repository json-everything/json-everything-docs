---
layout: "page"
title: "IfMinAttribute Class"
bookmark: "IfMinAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.30"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`IfMinAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- IConditionAttribute

Creates or amends a condition group by defining an expected minimum value in a property.

## Remarks

The specific keywords which are added depend on the type of the targeted property.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **IsExclusive** | bool | Gets or sets whether the value should be exclusive. |
| **PropertyName** | string | The property name. |
| **TypeId** | object |  |
| **Value** | double | The expected minimum value. |

## Constructors

### IfMinAttribute(string propertyName, double value, object group)

Creates a new **Json.Schema.Generation.IfAttribute** instance.

#### Declaration

```c#
public IfMinAttribute(string propertyName, double value, object group)
```

| Parameter | Type | Description |
|---|---|---|
| propertyName | string | The name of the property. |
| value | double | The expected minimum value for the property. |
| group | object | The condition group. |


