---
layout: "page"
title: "Extensions Class"
bookmark: "Extensions"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.000"
---
**Namespace:** Json.Schema.Api

**Inheritance:**
`Extensions`
 🡒 
`object`

Provides extension methods for configuring JSON Schema validation in ASP.NET Core MVC applications.

## Remarks

The extension methods in this class enable integration of JSON Schema-based validation into the MVC
            request pipeline. These methods are intended to be used during application startup to add model validation based on
            JSON Schema definitions. All methods are static and designed for use with dependency injection and MVC configuration

## Methods

### AddJsonSchemaValidation(this IMvcBuilder builder, Action\<GenerativeValidatingJsonConverter\> configure)

Enables JSON Schema-based validation for MVC controllers by adding the necessary filters and model binders to the
application's MVC pipeline.

#### Declaration

```c#
public static IMvcBuilder AddJsonSchemaValidation(this IMvcBuilder builder, Action<GenerativeValidatingJsonConverter> configure)
```

| Parameter | Type | Description |
|---|---|---|
| builder | IMvcBuilder | The MVC builder to configure. Cannot be null. |
| configure | Action\<GenerativeValidatingJsonConverter\> | An optional delegate to configure the generative JSON schema validation converter. If null, default settings are |


#### Returns

The same **Microsoft.Extensions.DependencyInjection.IMvcBuilder** instance so that additional configuration calls can be chained.

#### Remarks

This method registers a filter that validates incoming JSON request bodies against their associated
            JSON Schemas and configures the JSON serializer to support schema-based validation. Use this method to enforce

