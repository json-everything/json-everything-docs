---
layout: "page"
title: "ExclusiveMinimumAttribute Class"
bookmark: "ExclusiveMinimumAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.055.023"
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

- INestableAttribute
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
| **GenericParameter** | int | The index of the parameter to which the attribute should apply. Default is -1 to indicate the root. |
| **TypeId** | object |  |
| **Value** | decimal | The exclusive minimum. |

## Constructors

### ExclusiveMinimumAttribute(double value, bool useNet10CompatibleRounding)

Creates a new **Json.Schema.Generation.ExclusiveMinimumAttribute** instance.

#### Declaration

```c#
public ExclusiveMinimumAttribute(double value, bool useNet10CompatibleRounding)
```

| Parameter | Type | Description |
|---|---|---|
| value | double | The value. |
| useNet10CompatibleRounding | bool | (.Net 11 only) `>true` forces .Net 10 and earlier rounding from `>double` to `>decimal` |


#### Remarks

The <paramref name="value" /> parameter is provided as a `double` but stored as a `decimal`
because `decimal` is not a valid attribute parameter type.
As such, to prevent overflows, the value is clamped to the `decimal` range prior to being converted.

