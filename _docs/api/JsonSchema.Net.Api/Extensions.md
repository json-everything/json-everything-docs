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

Provides extension methods for configuring JSON Schema validation in ASP.NET Core applications.

## Remarks

The extension methods in this class enable integration of JSON Schema-based validation into MVC and
            minimal API request handling. These methods are intended to be used during application startup to add model
            validation based on JSON Schema definitions. All methods are static and designed for use with dependency injection

## Methods

### AddJsonSchemaValidation(this IServiceCollection services, Action\<GenerativeValidatingJsonConverter\> configure)

Enables JSON Schema-based validation for minimal APIs by configuring HTTP JSON serializer options.

#### Declaration

```c#
public static IServiceCollection AddJsonSchemaValidation(this IServiceCollection services, Action<GenerativeValidatingJsonConverter> configure)
```

| Parameter | Type | Description |
|---|---|---|
| services | IServiceCollection | The service collection to configure. Cannot be null. |
| configure | Action\<GenerativeValidatingJsonConverter\> | An optional delegate to configure the generative JSON schema validation converter. If null, default settings are |


#### Returns

The same **Microsoft.Extensions.DependencyInjection.IServiceCollection** instance so that additional configuration calls can be chained.

#### Remarks

By default, source generation is used to create schemas at compile time from types decorated with `[GenerateJsonSchema]`.
When using source generation, settings like property naming, property order, and strict conditionals must be configured on the
`[GenerateJsonSchema]` attribute itself. The **Json.Schema.Generation.Serialization.GenerativeValidatingJsonConverter.GeneratorConfiguration** settings
only affect runtime schema generation, which occurs when source generation is disabled or when using `[JsonSchema]` attributes.
To disable source generation, add `&lt;DisableJsonSchemaSourceGeneration&gt;true&lt;/DisableJsonSchemaSourceGeneration&gt;`
to your project file.

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

