---
layout: "page"
title: "TitleIntent Class"
bookmark: "TitleIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.65"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`TitleIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `title` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | string | The value. |
## Constructors

### TitleIntent(string value)

Creates a new **Json.Schema.Generation.Intents.TitleIntent** instance.

#### Declaration

```c#
public TitleIntent(string value)
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

