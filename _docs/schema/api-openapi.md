---
layout: page
title: Describing APIs with OpenAPI
bookmark: OpenAPI
permalink: /schema/:title/
icon: fas fa-tag
order: "01.026"
---
_JsonSchema.Net.Api_ can describe an ASP.NET Core application in [OpenAPI 3.1](https://spec.openapis.org/oas/v3.1.1.html).  The OpenAPI Description is assembled at compile time from your controllers and minimal-API route registrations, served as JSON or YAML, and presented on a built-in reference page.

The schemas in the OpenAPI Description are the same ones used for [request validation](/schema/api-validation/).

> OpenAPI support was added in _JsonSchema.Net.Api_ v1.2.0.
{: .prompt-info }

## Getting started {#schema-api-openapi-setup}

Add the OpenAPI services in `Program.cs`:

```c#
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();

var app = builder.Build();
app.MapControllers();
app.Run();
```

With no further configuration, the application:

- serves the OpenAPI Description at `/openapi.json` and `/openapi.yaml`
- serves an interactive reference page at `/openapi/reference`
- registers request validation (see [Validation registration](#schema-api-openapi-validation))

The OpenAPI Description's title and version are seeded from the entry assembly's name and version.  Everything else is discovered from the API surface.

## Configuration {#schema-api-openapi-configuration}

`AddOpenApi()` accepts an optional delegate that receives an `OpenApiOptions`:

```c#
builder.Services.AddOpenApi(c =>
{
    c.Document.Info.Title = "Pet Store";
    c.Document.Info.Description = "The pet store API.";
    c.DocumentPath = "/openapi";
    c.InteractivePath = "/openapi/reference";
});
```

A OpenAPI Description is served only when `DocumentPath` has a value, the reference page only when `InteractivePath` does, and a file is written only when `FileOutputPath` does.  Set a path to null to turn that piece off.

| Option | Default | Purpose |
|:--|:--|:--|
| `Name` | null | The OpenAPI Description's name, read-only; null for the default OpenAPI Description (see [Publishing several OpenAPI Descriptions](#schema-api-openapi-named)) |
| `Document` | assembled from the API | The OpenAPI Description itself, exposed for editing |
| `DocumentPath` | `/openapi` | Where the OpenAPI Description is served, without an extension |
| `DocumentFormats` | `Json \| Yaml` | Which extensions resolve at `DocumentPath` |
| `InteractivePath` | `/openapi/reference` | Where the reference page is served |
| `StylesheetUrl` | null | A stylesheet applied to the reference page |
| `FileOutputPath` | null | A file path the OpenAPI Description is written to at startup, without an extension |
| `AddValidation` | `true` | Whether request validation is registered alongside the OpenAPI Description |

### Editing the OpenAPI Description {#schema-api-openapi-document}

`Document` is the assembled `OpenApiDocument`.  It is built before your delegate runs, so anything the generator cannot infer is added by editing it directly: contact details, servers, security schemes, license and terms of service.

```c#
builder.Services.AddOpenApi(c =>
{
    c.Document.Info.Title = "Pet Store";
    c.Document.Info.Version = "2.4.0";
    c.Document.Info.Contact = new ContactInfo
    {
        Name = "API Support",
        Email = "support@example.com"
    };

    c.Document.Servers =
    [
        new Server("https://api.example.com") { Description = "Production" },
        new Server("https://staging.example.com") { Description = "Staging" }
    ];

    c.Document.Components ??= new ComponentCollection();
    c.Document.Components.SecuritySchemes = new Dictionary<string, SecurityScheme>
    {
        ["bearer"] = new SecurityScheme("http")
        {
            Scheme = "bearer",
            BearerFormat = "JWT"
        }
    };
});
```

The full OpenAPI 3.1 model is available under `Document`, so any part of the specification can be expressed.  The path items and operations are reachable through `Document.Paths` if you need to adjust a discovered operation beyond what [its metadata](#schema-api-openapi-metadata) supplies.

> A later `AddOpenApi()` call replaces an earlier one, so a test host or an environment-specific setup can reconfigure the OpenAPI Description.
{: .prompt-tip }

### Document path and formats {#schema-api-openapi-formats}

`DocumentPath` carries no extension.  The extensions that resolve are decided by `DocumentFormats`:

| `DocumentFormats` | URLs served |
|:--|:--|
| `Json \| Yaml` (default) | `/openapi.json`, `/openapi.yaml`, `/openapi.yml` |
| `Json` | `/openapi.json` |
| `Yaml` | `/openapi.yaml`, `/openapi.yml` |

Requesting the bare path `/openapi` returns 404.

To build the OpenAPI Description without serving it, set `DocumentPath` to null.  This is useful when you only want a file written, or when the OpenAPI Description should be published only outside production:

```c#
builder.Services.AddOpenApi(c =>
{
    if (!builder.Environment.IsDevelopment())
    {
        c.DocumentPath = null;
        c.InteractivePath = null;
    }
});
```

### Reference page {#schema-api-openapi-interactive}

`InteractivePath` is where the [reference page](#schema-api-openapi-page) is served.  The page reads the OpenAPI Description over HTTP, so it requires that `DocumentPath` has a value and `DocumentFormats` includes `Json`.

One page covers every OpenAPI Description the application publishes, so `InteractivePath` is configured on the `AddOpenApi()` call that takes no name.  Setting it on a named OpenAPI Description is an error.

If any of these constraints is violated, `AddOpenApi()` throws `InvalidOperationException` at startup.

Set `InteractivePath` to null to serve the OpenAPI Description without a page.

### Restyling the page {#schema-api-openapi-stylesheet}

`StylesheetUrl` names a stylesheet that is loaded after the page's built-in styles, so its rules win where they overlap.

The built-in styles define their palette as custom properties on `:root`, and every element carries a class prefixed `oa-`.  A stylesheet can restyle the page by redefining the properties alone:

```css
:root {
    --oa-accent: #b3341e;
    --oa-font: "Inter", sans-serif;
}
```

or by targeting classes directly:

```css
.oa-bar {
    border-bottom: 2px solid var(--oa-accent);
}
```

The page also defines a dark palette, applied when the browser prefers a dark color scheme or when the reader selects it with the page's theme toggle.  Redefine the properties under `:root[data-theme="dark"]` to restyle that as well.

### Writing the OpenAPI Description to disk {#schema-api-openapi-file}

`FileOutputPath` names a file the OpenAPI Description is written to when the application starts.  Like `DocumentPath`, it carries no extension; one file is written per format in `DocumentFormats`.

```c#
builder.Services.AddOpenApi(c =>
{
    c.FileOutputPath = "docs/openapi";
});
```

With the default formats, this writes `docs/openapi.json` and `docs/openapi.yaml`.  The directory is created if it does not exist.

Writing the OpenAPI Description to disk lets it be committed alongside the code, diffed in code review, and handed to client-generation tooling without running the application.  The served and written OpenAPI Descriptions are rendered from the same document, so they cannot drift.

### Validation registration {#schema-api-openapi-validation}

`AddValidation` defaults to true, so `AddOpenApi()` registers [request validation](/schema/api-validation/) on its own.  The OpenAPI Description states that a validated endpoint answers malformed input with `application/problem+json`, and registering validation here keeps that promise true without a second call.

Registration is idempotent, and an explicit `AddJsonSchemaValidation(...)` still wins on configuration, so both calls together are fine:

```c#
builder.Services.AddControllers()
    .AddJsonSchemaValidation(converter =>
    {
        converter.EvaluationOptions.RequireFormatValidation = true;
    });

builder.Services.AddOpenApi();
```

> If you previously called `AddJsonSchemaValidation()` yourself, nothing changes.  If you did not, adding `AddOpenApi()` turns validation on.  Set `AddValidation` to false to describe an API without validating requests.
{: .prompt-info }

Registering validation also registers the enum converter matching the enum format the generated schemas describe, unless the application has already added a `JsonStringEnumConverter`.  See [Enumerations](/schema/api-validation/#schema-api-enums) in the validation docs.

## Publishing several OpenAPI Descriptions {#schema-api-openapi-named}

An application can publish more than one OpenAPI Description, split by controller.  Place `[OpenApiDocument]` on a controller to put its endpoints in a named OpenAPI Description:

```c#
[OpenApiDocument("admin")]
[ApiController]
[Route("api/admin")]
public class AdminController : ControllerBase
{
    // ...
}
```

The attribute takes any number of names, so a controller that serves two audiences can name both and appears in each.  Three rules govern where a controller lands:

- A controller **without** the attribute appears in the default OpenAPI Description.
- A controller **with** the attribute appears only in the OpenAPI Descriptions it names, never in the default one.
- Adding the attribute to one controller does not move any other controller.

Minimal APIs always land in the default OpenAPI Description.

Each named OpenAPI Description is registered with its own `AddOpenApi()` call, passing the name:

```c#
builder.Services.AddOpenApi();                     // default
builder.Services.AddOpenApi("admin", c =>          // named
{
    c.Document.Info.Title = "Admin API";
});
```

A named OpenAPI Description is served at `/openapi/{name}.json` and `/openapi/{name}.yaml` by default, so several can be published without configuring paths, and each remains independently addressable for client generators and CI.  A named OpenAPI Description carries no reference page of its own; the one page, configured on the unnamed call, covers all of them with a selector in its header.

Each OpenAPI Description carries only the component schemas its own operations reach.  Splitting the API does not give every OpenAPI Description every schema.

If two OpenAPI Descriptions share a `DocumentPath`, `InteractivePath`, or `FileOutputPath`, `AddOpenApi()` throws `InvalidOperationException` at startup.  Calling `AddOpenApi()` a second time with the same name replaces the earlier registration.

> Only the default OpenAPI Description can be resolved from dependency injection as a bare `OpenApiDocument`.  Named OpenAPI Descriptions are reachable through their `OpenApiOptions`.
{: .prompt-info }

## How the OpenAPI Description is assembled {#schema-api-openapi-discovery}

The OpenAPI Description is produced at compile time by a source generator.  There is no runtime reflection over the API surface, so this works with Native AOT.

The generator reads two kinds of declaration:

- **Controllers** — public methods carrying `[HttpGet]`, `[HttpPost]`, `[HttpPut]`, `[HttpDelete]`, `[HttpPatch]`, `[HttpHead]`, or `[HttpOptions]`.  The route is composed from the class's `[Route]` prefix and the method attribute's template, with `[controller]` and `[action]` substituted.
- **Minimal APIs** — `MapGet`, `MapPost`, `MapPut`, `MapDelete`, and `MapPatch` calls with a constant route template, including those made on a `MapGroup` (nested groups compose their prefixes, and fluent calls such as `.WithTags()` chained onto the group are seen through).  `.Produces<T>()` declares a response.

Route templates are written in their OpenAPI form.  ASP.NET constraints, defaults, optional markers, and catch-alls are stripped, so `/users/{id:int}` is described as `/users/{id}`.

For each operation, the generator determines:

- **Operation ID** — for a controller action, the controller name without its `Controller` suffix, an underscore, and the action name: `Users_GetById` for `UsersController.GetById`.  OpenAPI requires operation IDs to be unique across a OpenAPI Description, and action names alone collide as soon as two controllers share one.  A minimal API has an operation ID only when `.WithName()` is chained onto its registration.
- **Request body** — a `[FromBody]` parameter, or any complex-typed parameter on either style, mirroring ASP.NET's own binding inference.  The body is documented as required `application/json`.  Injected services, including interfaces and abstract types and anything marked `[FromServices]`, are never described.
- **Parameters** — the remaining parameters.  A parameter named in the route template is a path parameter and is always required; any other is a query parameter.  `[FromRoute]`, `[FromQuery]`, and `[FromHeader]` override this on both controllers and minimal APIs.  A parameter is optional when it has a default value or its type admits null (`Nullable<T>`, or a reference type annotated with `?`).
- **Responses** — `[ProducesResponseType]` attributes or `.Produces<T>()` calls when present.  Otherwise a 200 response whose payload type is read from an `ActionResult<T>` return type, from a concrete return type, or from the argument of a `Results.Ok(...)` call in a minimal-API handler body.

### Summaries, descriptions, and tags {#schema-api-openapi-metadata}

Operations carry summaries, descriptions, tags, and descriptions for their parameters, request body, and responses.  These come from two sources.

**ASP.NET's own metadata** is read first.  On controllers, `[EndpointSummary]`, `[EndpointDescription]`, and `[Tags]` on an action, plus `[Tags]` on the controller class, which applies to every action in it.  On minimal APIs, `.WithSummary()`, `.WithDescription()`, and `.WithTags()` chained onto the registration.  These are the framework's attributes from `Microsoft.AspNetCore.Http`, so an application migrating from another OpenAPI generator already has them.

**XML documentation comments** fill whatever the attributes left unset.  The comment on a controller action is read, as is the comment on the method a minimal-API method group points at.  A lambda has no documentation comment.

| Element | Where it lands |
|:--|:--|
| `<summary>` | the operation's `summary` |
| `<remarks>` | the operation's `description` |
| `<param name="x">` | that parameter's `description`, or the request body's when `x` is the body parameter |
| `<returns>` | the 200 response's `description` |
| `<response code="404">` | that response's `description`; the response is added if the action does not declare it |

Inline elements are flattened to text.  `<see cref="Foo"/>` becomes `Foo`, `<paramref name="id"/>` becomes `id`, `<c>` and `<code>` keep their contents, and `<para>` separates paragraphs with a blank line.  Tags come only from attributes and fluent calls.

> The compiler only parses documentation comments when the project generates a documentation file.  Without this setting, the OpenAPI Description silently carries no summaries or descriptions.
>
> ```xml
> <PropertyGroup>
>   <GenerateDocumentationFile>true</GenerateDocumentationFile>
>   <NoWarn>$(NoWarn);CS1591</NoWarn>
> </PropertyGroup>
> ```
>
> `CS1591` warns on every public member without a comment, which is rarely wanted on an API project.
{: .prompt-warning }

### Schemas {#schema-api-openapi-schemas}

Schemas come from types decorated with `[GenerateJsonSchema]`.  Each such type lands in `components/schemas` once, keyed by its type name, and every body and response that uses it carries a `$ref`.  The schemas are the same ones the source generator produces for validation, minus `$id` and `$schema`, which an OpenAPI-internal schema does not carry.

Primitive parameter and response types (`string`, `int`, `bool`, `Guid`, `DateTime`, and so on) are described inline.  A body or response type without `[GenerateJsonSchema]` is documented with no schema.

Source-generated schemas describe an enumeration the way it is serialized: by name, as an integer, or either, following the enum's `[JsonConverter]` or the `JsonSchemaDefaultEnumFormat` build property.  An enum type is a component schema like any other and is referenced with `$ref`; only where a property's serialization differs from the default, through a `[JsonConverter]` on that property, is the enum described inline for that property.  See [Enumerations](/schema/schemagen/automatic-generation/#source-generation-enums) in the source generation docs.  [Validation registration](#schema-api-openapi-validation) configures the serializer to match.

### Class libraries {#schema-api-openapi-libraries}

Controllers and endpoints declared in a class library appear in the host's OpenAPI Description without that library referencing the host or registering anything.  A solution split into feature libraries needs no wiring beyond the project references it already has.

### The validation response {#schema-api-openapi-problem}

Every endpoint whose body type carries `[GenerateJsonSchema]` is validated by the middleware before the handler runs.  When the body does not satisfy its schema, the middleware answers with 400 and a Problem Details body, and the handler never sees the request.

The OpenAPI Description documents this.  Each validated operation gets a `400` response returning `application/problem+json`:

```json
"400": {
  "description": "The request body did not satisfy its schema.",
  "content": {
    "application/problem+json": {
      "schema": {
        "$ref": "#/components/schemas/ValidationProblemDetails"
      }
    }
  }
}
```

This response is added automatically to every validated operation.  If an operation already declares a `400` response, that declaration is kept.

## Example {#schema-api-openapi-example}

A controller with one validated endpoint:

```c#
// Models/CreateUserRequest.cs
[GenerateJsonSchema(PropertyNaming = NamingConvention.CamelCase)]
[AdditionalProperties(false)]
public class CreateUserRequest
{
    [Required]
    [MinLength(3)]
    [MaxLength(50)]
    public string Username { get; set; }

    [Required]
    [Minimum(18)]
    public int Age { get; set; }
}

// Models/User.cs
[GenerateJsonSchema(PropertyNaming = NamingConvention.CamelCase)]
public class User
{
    public Guid Id { get; set; }
    public string Username { get; set; }
}

// Controllers/UsersController.cs
[ApiController]
[Route("api/[controller]")]
[Tags("Users")]
public class UsersController : ControllerBase
{
    /// <summary>
    /// Creates a user.
    /// </summary>
    /// <param name="request">The user to create.</param>
    /// <returns>The created user.</returns>
    [HttpPost]
    public ActionResult<User> CreateUser([FromBody] CreateUserRequest request)
    {
        var user = _userService.CreateUser(request);
        return user;
    }
}
```

produces this OpenAPI Description:

```json
{
  "openapi": "3.1.1",
  "info": {
    "title": "MyApi",
    "version": "1.0.0"
  },
  "paths": {
    "/api/Users": {
      "post": {
        "tags": ["Users"],
        "summary": "Creates a user.",
        "operationId": "Users_CreateUser",
        "requestBody": {
          "description": "The user to create.",
          "content": {
            "application/json": {
              "schema": { "$ref": "#/components/schemas/CreateUserRequest" }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "The created user.",
            "content": {
              "application/json": {
                "schema": { "$ref": "#/components/schemas/User" }
              }
            }
          },
          "400": {
            "description": "The request body did not satisfy its schema.",
            "content": {
              "application/problem+json": {
                "schema": { "$ref": "#/components/schemas/ValidationProblemDetails" }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "CreateUserRequest": {
        "type": "object",
        "properties": {
          "username": { "type": "string", "minLength": 3, "maxLength": 50 },
          "age": { "type": "integer", "minimum": 18 }
        },
        "required": ["username", "age"],
        "additionalProperties": false
      },
      "User": {
        "type": "object",
        "properties": {
          "id": { "type": "string", "format": "uuid" },
          "username": { "type": "string" }
        }
      },
      "ValidationProblemDetails": {
        "type": "object",
        "properties": {
          "type": { "type": "string", "const": "https://json-everything.net/errors/validation" },
          "title": { "type": "string" },
          "status": { "type": "integer" },
          "detail": { "type": "string" },
          "errors": { "type": "object" }
        }
      }
    }
  }
}
```

The same endpoint as a minimal API is discovered the same way, with the metadata supplied by fluent calls:

```c#
app.MapPost("/api/users", (CreateUserRequest request, IUserService users) =>
    {
        var user = users.CreateUser(request);
        return Results.Ok(user);
    })
    .WithName("Users_CreateUser")
    .WithSummary("Creates a user.")
    .WithTags("Users");
```

## The reference page {#schema-api-openapi-page}

The page at `InteractivePath` presents the OpenAPI Description for a reader and lets them exercise the API from the browser.  It is a single page with no external dependencies.  It fetches each OpenAPI Description from its `DocumentPath`.

The page has three regions:

- **Navigation** lists every operation by method and path.  Clicking one scrolls the documentation to it and opens it in the request console.
- **Documentation** shows each operation's summary, description, tags, parameters, request body, and responses.  Body schemas are rendered as property lists showing type, whether the property is required, `const` values, descriptions, and nested properties.  A schema with `additionalProperties: false` says so.  Clicking an operation's heading opens it in the request console.
- **Request console** shows the selected operation: a request in cURL, JavaScript, C#, Python, or Go with a copy button; inputs for each parameter and a body editor prefilled with an example built from the schema; and the full request body schema.  Sending the request shows the status, elapsed time, and response body.

The console changes only when the reader selects an operation.  Scrolling the documentation does not change it, and each operation keeps its edited inputs and its last response for as long as the page is open.  The navigation and console panes can be resized by dragging their edges; the widths are remembered by the browser.

The header carries an OpenAPI Description selector when the application publishes more than one (labeled by each OpenAPI Description's title), a server selector populated from `Document.Servers`, a theme toggle that persists the reader's choice, and an authentication panel when `Document.Components.SecuritySchemes` is set.  The panel supports HTTP bearer, HTTP basic, and API key schemes (header or query).  Credentials entered there are held in page memory only and applied to the sample code and to sent requests.
