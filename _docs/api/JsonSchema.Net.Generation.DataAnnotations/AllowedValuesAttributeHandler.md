---
layout: "page"
title: "AllowedValuesAttributeHandler Class"
bookmark: "AllowedValuesAttributeHandler"
permalink: "/api/JsonSchema.Net.Generation.DataAnnotations/:title/"
order: "10.06.000"
---
**Namespace:** Json.Schema.Generation.DataAnnotations

**Inheritance:**
`AllowedValuesAttributeHandler`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler\<AllowedValuesAttribute\>
- IAttributeHandler

Adds an `enum` keyword for the indicated values.

## Remarks

For NativeAOT scenarios, only primitive JSON types are supported.

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

