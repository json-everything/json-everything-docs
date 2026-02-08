---
layout: "page"
title: "ExclusiveMaximumAttribute Class"
bookmark: "ExclusiveMaximumAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.055.020"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`ExclusiveMaximumAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- INestableAttribute
- IAttributeHandler

Applies an `exclusiveMaximum` keyword.

## Remarks

The `value` parameter is provided in the constructor as a `double` but stored as a `decimal`
because `decimal` is not a valid attribute parameter type.
As such, to prevent overflows, the value is clamped to the `decimal` range prior to being converted.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **GenericParameter** | int | The index of the parameter to which the attribute should apply. Default is -1 to indicate the root. |
| **TypeId** | object |  |
| **Value** | decimal | The exclusive maximum. |

## Constructors

### ExclusiveMaximumAttribute(double value)

Creates a new **Json.Schema.Generation.ExclusiveMaximumAttribute** instance.

#### Declaration

```c#
public ExclusiveMaximumAttribute(double value)
```

| Parameter | Type | Description |
|---|---|---|
| value | double | The value. |


#### Remarks

The <paramref name="value" /> parameter is provided as a `double` but stored as a `decimal`
because `decimal` is not a valid attribute parameter type.
As such, to prevent overflows, the value is clamped to the `decimal` range prior to being converted.

