---
layout: "page"
title: "IfEnumAttribute Class"
bookmark: "IfEnumAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.031"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`IfEnumAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- INestableAttribute
- IConditionalAttribute

Creates multiple condition groups based on the value of an enum property, one group for each defined enum value.

## Remarks

The enum type is inferred from the property.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **GenericParameter** | int | The index of the parameter to which the attribute should apply. Default is -1 to indicate the root. |
| **PropertyName** | string | The property name. |
| **TypeId** | object |  |
| **UseNumbers** | bool | Gets or sets whether to use numbers or names in the condition.  Default is to use names. |

## Constructors

### IfEnumAttribute(string propertyName, bool useNumbers)

Creates a new **Json.Schema.Generation.IfEnumAttribute** instance.

#### Declaration

```c#
public IfEnumAttribute(string propertyName, bool useNumbers)
```

| Parameter | Type | Description |
|---|---|---|
| propertyName | string | The property name. |
| useNumbers | bool | (optional) Whether to use numbers or names in the condition.  Default is to use names. |


