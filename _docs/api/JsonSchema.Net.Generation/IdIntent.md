---
layout: "page"
title: "IdIntent Class"
bookmark: "IdIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.055.031"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`IdIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create an `$id` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Id** | Uri | The URI to use as the schema's ID. |

## Constructors

### IdIntent(Uri uri)

Creates a new **Json.Schema.Generation.Intents.IdIntent** instance.

#### Declaration

```c#
public IdIntent(Uri uri)
```


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


