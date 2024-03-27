---
layout: "page"
title: "RefIntent Class"
bookmark: "RefIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.071"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`RefIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `$ref` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Reference** | Uri | The reference. |

## Constructors

### RefIntent(Uri reference)

Creates a new **Json.Schema.Generation.Intents.RefIntent** instance.

#### Declaration

```c#
public RefIntent(Uri reference)
```

| Parameter | Type | Description |
|---|---|---|
| reference | Uri | The reference. |


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


