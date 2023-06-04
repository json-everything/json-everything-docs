---
layout: "page"
title: "JsonNumberHandlingAttributeHandler Class"
bookmark: "JsonNumberHandlingAttributeHandler"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "9.05.27"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`JsonNumberHandlingAttributeHandler`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler\<JsonNumberHandlingAttribute\>
- IAttributeHandler

Handler for the **System.Text.Json.Serialization.JsonNumberHandlingAttribute**.

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
| attribute | Attribute |  |


