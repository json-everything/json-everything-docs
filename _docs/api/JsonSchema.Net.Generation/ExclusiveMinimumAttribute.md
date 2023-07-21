---
layout: "page"
title: "ExclusiveMinimumAttribute Class"
bookmark: "ExclusiveMinimumAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.019"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`ExclusiveMinimumAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler

Applies an `exclusiveMinimum` keyword.

## Remarks

The `value` parameter is provided in the constructor as a `double` but stored as a `decimal`
because `decimal` is not a valid attribute parameter type.
As such, to prevent overflows, the value is clamped to the `decimal` range prior to being converted.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **TypeId** | object |  |
| **Value** | decimal | The exclusive minimum. |

## Constructors

### ExclusiveMinimumAttribute(double value)

Creates a new **Json.Schema.Generation.ExclusiveMinimumAttribute** instance.

#### Declaration

```c#
public ExclusiveMinimumAttribute(double value)
```

| Parameter | Type | Description |
|---|---|---|
| value | double | The value. |


#### Remarks

The <paramref name="value" /> parameter is provided as a `double` but stored as a `decimal`
because `decimal` is not a valid attribute parameter type.
As such, to prevent overflows, the value is clamped to the `decimal` range prior to being converted.

