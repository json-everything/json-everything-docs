---
layout: "page"
title: "MaxLengthAttributeHandler Class"
bookmark: "MaxLengthAttributeHandler"
permalink: "/api/JsonSchema.Net.Generation.DataAnnotations/:title/"
order: "10.06.008"
---
**Namespace:** Json.Schema.Generation.DataAnnotations

**Inheritance:**
`MaxLengthAttributeHandler`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler\<MaxLengthAttribute\>
- IAttributeHandler

Adds a `maxLength` keyword.

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

### Apply(JsonSchemaBuilder builder, int length)

Applies constraints for source generation.

#### Declaration

```c#
public static JsonSchemaBuilder Apply(JsonSchemaBuilder builder, int length)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The schema builder. |
| length | int | The maximum length. |


#### Returns

The builder for chaining.

