---
layout: "page"
title: "TypeIntent Class"
bookmark: "TypeIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.66"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`TypeIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `type` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Type** | SchemaValueType | The type. |
## Constructors

### TypeIntent(SchemaValueType type)

Creates a new **Json.Schema.Generation.Intents.TypeIntent** instance.

#### Declaration

```c#
public TypeIntent(SchemaValueType type)
```
| Parameter | Type | Description |
|---|---|---|
| type | SchemaValueType | The type. |

## Methods

### Apply(JsonSchemaBuilder builder)

Applies the keyword to the **Json.Schema.JsonSchemaBuilder**.

#### Declaration

```c#
public void Apply(JsonSchemaBuilder builder)
```
| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |

