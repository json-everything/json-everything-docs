---
layout: "page"
title: "FormatIntent Class"
bookmark: "FormatIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.16"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`FormatIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `format` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Format** | Format | The format. |

## Constructors

### FormatIntent(Format format)

Creates a new **Json.Schema.Generation.Intents.FormatIntent** instance.

#### Declaration

```c#
public FormatIntent(Format format)
```

| Parameter | Type | Description |
|---|---|---|
| format | Format | The format. |


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


