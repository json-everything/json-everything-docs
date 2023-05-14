---
layout: "page"
title: "JsonSchemaAttribute Class"
bookmark: "JsonSchemaAttribute"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.51"
---
**Namespace:** Json.Schema.Serialization

**Inheritance:**
`JsonSchemaAttribute`
 🡒 
`Attribute`
 🡒 
`object`

Identifies a **Json.Schema.JsonSchema** to use when deserializing a type.

## Properties

| Name | Type | Summary |
|---|---|---|
| **TypeId** | object |  |

## Constructors

### JsonSchemaAttribute(Type declaringType, string memberName)

Identifies a **Json.Schema.JsonSchema** to use when deserializing a type.

#### Declaration

```c#
public JsonSchemaAttribute(Type declaringType, string memberName)
```

| Parameter | Type | Description |
|---|---|---|
| declaringType | Type | The type declaring the schema. |
| memberName | string | The property or field name for the schema.  This member must be public and static. |


