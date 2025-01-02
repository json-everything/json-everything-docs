---
layout: "page"
title: "IfMaxAttribute Class"
bookmark: "IfMaxAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.033"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`IfMaxAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- INestableAttribute
- IConditionalAttribute

Creates or amends a condition group by defining an expected maximum value in a property.

## Remarks

The specific keywords which are added depend on the type of the targeted property.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **GenericParameter** | int | The index of the parameter to which the attribute should apply. Default is -1 to indicate the root. |
| **IsExclusive** | bool | Gets or sets whether the value should be exclusive. |
| **PropertyName** | string | The property name. |
| **TypeId** | object |  |
| **Value** | double | The expected maximum value. |

## Constructors

### IfMaxAttribute(string propertyName, double value, object group)

Creates a new **Json.Schema.Generation.IfAttribute** instance.

#### Declaration

```c#
public IfMaxAttribute(string propertyName, double value, object group)
```

| Parameter | Type | Description |
|---|---|---|
| propertyName | string | The name of the property. |
| value | double | The expected maximum value for the property. |
| group | object | The condition group. |


#### Remarks

The <paramref name="value" /> parameter is provided as a `double` but stored as a `decimal`
because `decimal` is not a valid attribute parameter type.
As such, to prevent overflows, the value is clamped to the `decimal` range prior to being converted
when applied as the `maximum` or `exclusiveMaximum` keywords.

