---
layout: "page"
title: "IfIntent Class"
bookmark: "IfIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.032"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`IfIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create an `if` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Subschema** | IEnumerable\<ISchemaKeywordIntent\> | A set of intents used to define the subschema. |

## Constructors

### IfIntent(IEnumerable\<ISchemaKeywordIntent\> subschema)

Creates a new **Json.Schema.Generation.Intents.IfIntent** instance.

#### Declaration

```c#
public IfIntent(IEnumerable<ISchemaKeywordIntent> subschema)
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


