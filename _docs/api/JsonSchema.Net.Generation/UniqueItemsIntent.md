---
layout: "page"
title: "UniqueItemsIntent Class"
bookmark: "UniqueItemsIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.67"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`UniqueItemsIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `uniqueItems` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | bool | The value. |
## Constructors

### UniqueItemsIntent(bool value)

Creates a new **Json.Schema.Generation.Intents.UniqueItemsIntent** instance.

#### Declaration

```c#
public UniqueItemsIntent(bool value)
```
| Parameter | Type | Description |
|---|---|---|
| value | bool | The value. |

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

