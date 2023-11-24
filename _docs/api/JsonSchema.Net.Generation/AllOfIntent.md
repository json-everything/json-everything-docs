---
layout: "page"
title: "AllOfIntent Class"
bookmark: "AllOfIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
0.05.004"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`AllOfIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create a `allOf` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Subschemas** | List\<IEnumerable\<ISchemaKeywordIntent\>\> | Gets the subschemas to include. |

## Constructors

### AllOfIntent(IEnumerable\<IEnumerable\<ISchemaKeywordIntent\>\> subschemas)

Creates a new instance of the **Json.Schema.Generation.Intents.AllOfIntent** class.

#### Declaration

```c#
public AllOfIntent(IEnumerable<IEnumerable<ISchemaKeywordIntent>> subschemas)
```

| Parameter | Type | Description |
|---|---|---|
| subschemas | IEnumerable\<IEnumerable\<ISchemaKeywordIntent\>\> | The subschemas to include. |


### AllOfIntent(params IEnumerable\<ISchemaKeywordIntent\>[] subschemas)

Creates a new instance of the **Json.Schema.Generation.Intents.AllOfIntent** class.

#### Declaration

```c#
public AllOfIntent(params IEnumerable<ISchemaKeywordIntent>[] subschemas)
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


