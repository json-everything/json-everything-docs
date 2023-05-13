---
layout: "page"
title: "EnumIntent Class"
bookmark: "EnumIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.47"
---
**Namespace:** Json.Schema.Generation.Intents

**Inheritance:**
`EnumIntent`
 🡒 
`object`

**Implemented interfaces:**

- ISchemaKeywordIntent

Provides intent to create an `enum` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Names** | List\<string\> | The names defined by the enumeration. |
## Constructors

### EnumIntent(IEnumerable\<string\> names)

Creates a new **Json.Schema.Generation.Intents.EnumIntent** instance.

#### Declaration

```c#
public EnumIntent(IEnumerable<string> names)
```
| Parameter | Type | Description |
|---|---|---|
| names | IEnumerable\<string\> | The names defined by the enumeration. |

### EnumIntent(params string[] names)

Creates a new **Json.Schema.Generation.Intents.EnumIntent** instance.

#### Declaration

```c#
public EnumIntent(params string[] names)
```
| Parameter | Type | Description |
|---|---|---|
| names | params string[] | The names defined by the enumeration. |

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

