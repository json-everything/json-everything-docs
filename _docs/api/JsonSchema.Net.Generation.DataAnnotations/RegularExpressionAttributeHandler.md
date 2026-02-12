---
layout: "page"
title: "RegularExpressionAttributeHandler Class"
bookmark: "RegularExpressionAttributeHandler"
permalink: "/api/JsonSchema.Net.Generation.DataAnnotations/:title/"
order: "10.06.011"
---
**Namespace:** Json.Schema.Generation.DataAnnotations

**Inheritance:**
`RegularExpressionAttributeHandler`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler\<RegularExpressionAttribute\>
- IAttributeHandler

Adds a `pattern` keyword.

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

### Apply(JsonSchemaBuilder builder, string pattern)

Applies constraints for source generation.

#### Declaration

```c#
public static JsonSchemaBuilder Apply(JsonSchemaBuilder builder, string pattern)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The schema builder. |
| pattern | string | The regular expression pattern. |


#### Returns

The builder for chaining.

