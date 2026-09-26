---
layout: "page"
title: "OpenApiServiceCollectionExtensions Class"
bookmark: "OpenApiServiceCollectionExtensions"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.033"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`OpenApiServiceCollectionExtensions`
 🡒 
`object`

Provides registration for OpenAPI description generation.

## Methods

### AddOpenApi(this IServiceCollection services, Action\<OpenApiOptions\> configure)

Describes the application's API surface in OpenAPI, and publishes the description.

#### Declaration

```c#
public static IServiceCollection AddOpenApi(this IServiceCollection services, Action<OpenApiOptions> configure)
```

| Parameter | Type | Description |
|---|---|---|
| services | IServiceCollection | The service collection. |
| configure | Action\<OpenApiOptions\> | An optional delegate that configures the description and how it is published. |


#### Returns

The same **Microsoft.Extensions.DependencyInjection.IServiceCollection**, so calls can be chained.

#### Remarks

The description is assembled from the fragments each assembly registers as it loads,
so controllers declared in a class library are included without that library knowing
about the host.

#### Examples

```

            builder.Services.AddOpenApi(c =&gt;
            {
                c.Document.Info.Description = "The pet store API.";
                c.DocumentPath = "/openapi";
                c.InteractivePath = "/openapi/reference";
            });
            
```

### AddOpenApi(this IServiceCollection services, string name, Action\<OpenApiOptions\> configure)

Describes the endpoints placed in a named description, and publishes it.

#### Declaration

```c#
public static IServiceCollection AddOpenApi(this IServiceCollection services, string name, Action<OpenApiOptions> configure)
```

| Parameter | Type | Description |
|---|---|---|
| services | IServiceCollection | The service collection. |
| name | string | The description's name, matching a name given to **Json.Schema.Api.OpenApi.OpenApiDocumentAttribute** on a controller.  To configure the default description — the one holding every controller without that attribute — use the overload that takes no name. |
| configure | Action\<OpenApiOptions\> | An optional delegate that configures the description and how it is published. |


#### Returns

The same **Microsoft.Extensions.DependencyInjection.IServiceCollection**, so calls can be chained.

#### Remarks

Call this once per description.  A named description defaults to serving under its
own name — `/openapi/admin.json` and `/openapi/admin/reference` — so several can be
published without configuring paths.

#### Examples

```

            builder.Services.AddOpenApi();
            builder.Services.AddOpenApi("admin", c =&gt;
            {
                c.Document.Info.Title = "Admin API";
            });
            
```

