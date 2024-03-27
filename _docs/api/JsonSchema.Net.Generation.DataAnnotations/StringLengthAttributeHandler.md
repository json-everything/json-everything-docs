---
layout: "page"
title: "StringLengthAttributeHandler Class"
bookmark: "StringLengthAttributeHandler"
permalink: "/api/JsonSchema.Net.Generation.DataAnnotations/:title/"
order: "10.06.012"
---
**Namespace:** Json.Schema.Generation.DataAnnotations

**Inheritance:**
`StringLengthAttributeHandler`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler\<StringLengthAttribute\>
- IAttributeHandler

Adds a `maxLength` and an optional `minLength` keyword.

## Remarks

`minLength` will be not be added if the value is less than or equal to zero.

## Methods

### AddConstraints(SchemaGenerationContextBase context, Attribute attribute)

Processes the type and any attributes (present on the context), and adds
intents to the context.

#### Declaration

```c#
public void AddConstraints(SchemaGenerationContextBase context, Attribute attribute)
```

| Parameter | Type | Description |
|---|---|---|
| context | SchemaGenerationContextBase | The generation context. |
| attribute | Attribute | The attribute. |


#### Remarks

A common pattern is to implement **Json.Schema.Generation.IAttributeHandler** on the
attribute itself.  In this case, the <paramref name="attribute" /> parameter
will be the same instance as the handler and can likely be ignored.

