---
layout: "page"
title: "ISchemaKeywordIntent Interface"
bookmark: "ISchemaKeywordIntent"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.037"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`ISchemaKeywordIntent`

Describes the intent to create a keyword.

## Remarks

Because **Json.Schema.JsonSchema** is immutable, the system cannot
             generate the schema directly as it needs to do some optimization
             first.  Keyword intents allow this.  They record all of the data
             needed by the keyword.  Application involves translating the
             intent into an actual keyword on the **Json.Schema.JsonSchemaBuilder**
             using one of the fluent extension methods provided by
             **Json.Schema.JsonSchemaBuilderExtensions**.  Custom intents
             will need to be applied from within custom **Json.Schema.Generation.Generators.ISchemaGenerator**
             implementations.

## Methods

### Apply(JsonSchemaBuilder builder)

Applies the keyword to the **Json.Schema.JsonSchemaBuilder**.

#### Declaration

```c#
public abstract void Apply(JsonSchemaBuilder builder)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |


