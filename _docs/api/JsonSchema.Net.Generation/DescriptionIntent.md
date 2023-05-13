---
layout: "page"
title: "DescriptionIntent Class"
bookmark: "DescriptionIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.46"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`DescriptionIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `description` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | string | The value. |
## Constructors

### DescriptionIntent(string value)

Creates a new **Json.Schema.Generation.Intents.DescriptionIntent** instance.

#### Declaration

```c#
public DescriptionIntent(string value)
```
| Parameter | Type | Description |
|---|---|---|
| value | string | The value. |

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

