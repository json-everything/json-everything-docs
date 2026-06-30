---
layout: "page"
title: "LengthAttributeHandler Class"
bookmark: "LengthAttributeHandler"
permalink: "/api/JsonSchema.Net.Generation.DataAnnotations/:title/"
order: "10.06.007"
---
**Namespace:** Json.Schema.Generation.DataAnnotations

**Inheritance:**
`LengthAttributeHandler`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler\<LengthAttribute\>
- IAttributeHandler

Adds `minLength` and `maxLength` keywords.

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

### Apply(JsonSchemaBuilder builder, int minimumLength, int maximumLength)

Applies constraints for source generation.

#### Declaration

```c#
public static JsonSchemaBuilder Apply(JsonSchemaBuilder builder, int minimumLength, int maximumLength)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The schema builder. |
| minimumLength | int | The minimum length. |
| maximumLength | int | The maximum length. |


#### Returns

The builder for chaining.

