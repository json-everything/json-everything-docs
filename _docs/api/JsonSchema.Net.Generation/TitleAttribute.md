---
layout: "page"
title: "TitleAttribute Class"
bookmark: "TitleAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.079"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`TitleAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- INestableAttribute
- IAttributeHandler

Applies a `title` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **GenericParameter** | int | The index of the parameter to which the attribute should apply. Default is -1 to indicate the root. |
| **Title** | string | The title. |
| **TypeId** | object |  |

## Constructors

### TitleAttribute(string title)

Creates a new **Json.Schema.Generation.TitleAttribute** instance.

#### Declaration

```c#
public TitleAttribute(string title)
```

| Parameter | Type | Description |
|---|---|---|
| title | string | The value. |


