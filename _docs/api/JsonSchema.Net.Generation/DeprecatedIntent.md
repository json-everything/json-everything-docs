---
layout: "page"
title: "DeprecatedIntent Class"
bookmark: "DeprecatedIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.055.014"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`DeprecatedIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `deprecated` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Value** | bool | The value. |

## Constructors

### DeprecatedIntent(bool value)

Creates a new **Json.Schema.Generation.Intents.DeprecatedIntent** instance.

#### Declaration

```c#
public DeprecatedIntent(bool value)
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


