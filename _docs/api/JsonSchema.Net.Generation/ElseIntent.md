---
layout: "page"
title: "ElseIntent Class"
bookmark: "ElseIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.018"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`ElseIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create an `else` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Subschema** | IEnumerable\<ISchemaKeywordIntent\> | A set of intents used to define the subschema. |

## Constructors

### ElseIntent(IEnumerable\<ISchemaKeywordIntent\> subschema)

Creates a new **Json.Schema.Generation.Intents.ElseIntent** instance.

#### Declaration

```c#
public ElseIntent(IEnumerable<ISchemaKeywordIntent> subschema)
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


