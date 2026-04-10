---
layout: "page"
title: "SchemaHandlerAttribute Class"
bookmark: "SchemaHandlerAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.055.082"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`SchemaHandlerAttribute`
 🡒 
`Attribute`
 🡒 
`object`

Registers a source generation schema handler for a target type.

## Properties

| Name | Type | Summary |
|---|---|---|
| **TargetType** | Type | The target type handled by the attributed handler. |
| **TypeId** | object |  |

## Constructors

### SchemaHandlerAttribute(Type targetType)

Creates a new **Json.Schema.Generation.SchemaHandlerAttribute** instance.

#### Declaration

```c#
public SchemaHandlerAttribute(Type targetType)
```

| Parameter | Type | Description |
|---|---|---|
| targetType | Type | The target type handled by the schema handler. |


