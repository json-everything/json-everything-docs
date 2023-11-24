---
layout: "page"
title: "PatternIntent Class"
bookmark: "PatternIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
0.05.061"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`PatternIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `pattern` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | string | The value. |

## Constructors

### PatternIntent(string value)

Creates a new **Json.Schema.Generation.Intents.PatternIntent** instance.

#### Declaration

```c#
public PatternIntent(string value)
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


