---
layout: "page"
title: "FormatAttributeHandler<T> Class"
bookmark: "FormatAttributeHandler`1"
permalink: "/api/JsonSchema.Net.Generation.DataAnnotations/:title/"
order: "10.06.006"
---
**Namespace:** Json.Schema.Generation.DataAnnotations

**Inheritance:**
`FormatAttributeHandler<T>`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler\<T\>
- IAttributeHandler

Base class for attributes that just need to add a `format` keyword.

## Constructors

### FormatAttributeHandler\<T\>(string format)

Creates a new handler that uses a custom format.

#### Declaration

```c#
public FormatAttributeHandler`1(string format)
```

| Parameter | Type | Description |
|---|---|---|
| format | string | The format. |


### FormatAttributeHandler\<T\>(Format format)

Creates a new handler that uses a predefined format.

#### Declaration

```c#
public FormatAttributeHandler`1(Format format)
```

| Parameter | Type | Description |
|---|---|---|
| format | Format | The format. |


## Methods

### AddConstraints(SchemaGenerationContextBase context, Attribute attribute)

Processes the type and any attributes (present on the context), and adds
intents to the context.

#### Declaration

```c#
public virtual void AddConstraints(SchemaGenerationContextBase context, Attribute attribute)
```

| Parameter | Type | Description |
|---|---|---|
| context | SchemaGenerationContextBase | The generation context. |
| attribute | Attribute | The attribute. |


#### Remarks

A common pattern is to implement **Json.Schema.Generation.IAttributeHandler** on the
attribute itself.  In this case, the <paramref name="attribute" /> parameter
will be the same instance as the handler and can likely be ignored.

