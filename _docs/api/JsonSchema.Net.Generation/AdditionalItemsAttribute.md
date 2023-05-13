---
layout: "page"
title: "AdditionalItemsAttribute Class"
bookmark: "AdditionalItemsAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.00"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`AdditionalItemsAttribute`
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
| **TypeValue** | Type | If the attribute value represents a type schema, gets the type. |
| **TypeId** | object |  |
## Constructors

### AdditionalItemsAttribute(bool boolSchema)

Creates a new **Json.Schema.Generation.AdditionalPropertiesAttribute** instance.

#### Declaration

```c#
public AdditionalItemsAttribute(bool boolSchema)
```
| Parameter | Type | Description |
|---|---|---|
| boolSchema | bool | A boolean schema. |

### AdditionalItemsAttribute(Type typeSchema)

Creates a new **Json.Schema.Generation.AdditionalPropertiesAttribute** instance.

#### Declaration

```c#
public AdditionalItemsAttribute(Type typeSchema)
```
| Parameter | Type | Description |
|---|---|---|
| typeSchema | Type | A type to generate the a schema for the keyword. |

