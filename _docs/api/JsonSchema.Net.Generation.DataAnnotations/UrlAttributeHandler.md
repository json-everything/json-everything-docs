---
layout: "page"
title: "UrlAttributeHandler Class"
bookmark: "UrlAttributeHandler"
permalink: "/api/JsonSchema.Net.Generation.DataAnnotations/:title/"
order: "10.06.013"
---
**Namespace:** Json.Schema.Generation.DataAnnotations

**Inheritance:**
`UrlAttributeHandler`
 🡒 
`FormatAttributeHandler<UrlAttribute>`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler\<UrlAttribute\>
- IAttributeHandler

Adds a `format` keyword with `uri`.

## Remarks

By default, `format` is an annotation only.  No validation will occur unless configured to do so.

## Constructors

### UrlAttributeHandler()

Creates a new **Json.Schema.Generation.DataAnnotations.UrlAttributeHandler**.

#### Declaration

```c#
public UrlAttributeHandler()
```


## Methods

### Apply(JsonSchemaBuilder builder)

Applies constraints for source generation.

#### Declaration

```c#
public static JsonSchemaBuilder Apply(JsonSchemaBuilder builder)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The schema builder. |


#### Returns

The builder for chaining.

