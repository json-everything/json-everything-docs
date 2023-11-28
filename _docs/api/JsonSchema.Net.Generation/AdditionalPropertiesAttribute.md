---
layout: "page"
title: "AdditionalPropertiesAttribute Class"
bookmark: "AdditionalPropertiesAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.002"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`AdditionalPropertiesAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler

Applies an `additionalProperties` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **BoolValue** | bool? | If the attribute value represents a boolean schema, gets the boolean value. |
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **TypeId** | object |  |
| **TypeValue** | Type | If the attribute value represents a type schema, gets the type. |

## Constructors

### AdditionalPropertiesAttribute(bool boolSchema)

Creates a new **Json.Schema.Generation.AdditionalPropertiesAttribute** instance.

#### Declaration

```c#
public AdditionalPropertiesAttribute(bool boolSchema)
```

| Parameter | Type | Description |
|---|---|---|
| boolSchema | bool | A boolean schema. |


### AdditionalPropertiesAttribute(Type typeSchema)

Creates a new **Json.Schema.Generation.AdditionalPropertiesAttribute** instance.

#### Declaration

```c#
public AdditionalPropertiesAttribute(Type typeSchema)
```

| Parameter | Type | Description |
|---|---|---|
| typeSchema | Type | A type to generate the a schema for the keyword. |


