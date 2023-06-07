---
layout: "page"
title: "AnyOfIntent Class"
bookmark: "AnyOfIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.05"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`AnyOfIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `anyOf` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Subschemas** | List\<IEnumerable\<ISchemaKeywordIntent\>\> | Gets the subschemas to include. |

## Constructors

### AnyOfIntent(IEnumerable\<IEnumerable\<ISchemaKeywordIntent\>\> subschemas)

Creates a new instance of the **Json.Schema.Generation.Intents.AnyOfIntent** class.

#### Declaration

```c#
public AnyOfIntent(IEnumerable<IEnumerable<ISchemaKeywordIntent>> subschemas)
```

| Parameter | Type | Description |
|---|---|---|
| subschemas | IEnumerable\<IEnumerable\<ISchemaKeywordIntent\>\> | The subschemas to include. |


### AnyOfIntent(params IEnumerable\<ISchemaKeywordIntent\>[] subschemas)

Creates a new instance of the **Json.Schema.Generation.Intents.AnyOfIntent** class.

#### Declaration

```c#
public AnyOfIntent(params IEnumerable<ISchemaKeywordIntent>[] subschemas)
```

| Parameter | Type | Description |
|---|---|---|
| subschemas | params IEnumerable\<ISchemaKeywordIntent\>[] | The subschemas to include. |


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


