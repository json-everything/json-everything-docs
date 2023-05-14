---
layout: "page"
title: "IAttributeHandler Interface"
bookmark: "IAttributeHandler"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.18"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`IAttributeHandler`

Defines requirements to handle converting an attribute to a keyword intent.

## Methods

### AddConstraints(SchemaGenerationContextBase context, Attribute attribute)

Processes the type and any attributes (present on the context), and adds
intents to the context.

#### Declaration

```c#
public abstract void AddConstraints(SchemaGenerationContextBase context, Attribute attribute)
```

| Parameter | Type | Description |
|---|---|---|
| context | SchemaGenerationContextBase | The generation context. |
| attribute | Attribute | The attribute. |


#### Remarks

A common pattern is to implement **Json.Schema.Generation.IAttributeHandler** on the
attribute itself.  In this case, the <paramref name="attribute" /> parameter
will be the same instance as the handler and can likely be ignored.

