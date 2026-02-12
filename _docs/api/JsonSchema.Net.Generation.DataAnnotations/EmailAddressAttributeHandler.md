---
layout: "page"
title: "EmailAddressAttributeHandler Class"
bookmark: "EmailAddressAttributeHandler"
permalink: "/api/JsonSchema.Net.Generation.DataAnnotations/:title/"
order: "10.06.004"
---
**Namespace:** Json.Schema.Generation.DataAnnotations

**Inheritance:**
`EmailAddressAttributeHandler`
 🡒 
`FormatAttributeHandler<EmailAddressAttribute>`
 🡒 
`object`

**Implemented interfaces:**

- IAttributeHandler\<EmailAddressAttribute\>
- IAttributeHandler

Adds a `format` keyword with `email`.

## Remarks

By default, `format` is an annotation only.  No validation will occur unless configured to do so.

## Constructors

### EmailAddressAttributeHandler()

Creates a new **Json.Schema.Generation.DataAnnotations.EmailAddressAttributeHandler**.

#### Declaration

```c#
public EmailAddressAttributeHandler()
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

