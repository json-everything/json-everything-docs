---
layout: page
title: Describing APIs with OpenAPI
bookmark: OpenAPI
permalink: /schema/:title/
icon: fas fa-tag
order: "01.026"
---
_JsonSchema.Net.Api_ can describe an ASP.NET Core application in [OpenAPI 3.1](https://spec.openapis.org/oas/v3.1.1.html).  The description is assembled at compile time from your controllers and minimal-API route registrations, served as JSON or YAML, and presented on a built-in reference page.

The schemas in the description are the same ones used for [request validation](/schema/api-validation/), so what the description promises is what the server enforces.

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

That single call is the opt-in.  With no further configuration, the application:

- serves the description at `/openapi.json` and `/openapi.yaml`
- serves an interactive reference page at `/openapi/reference`
- registers request validation (see [Validation registration](#schema-api-openapi-validation))

The description's title and version are seeded from the entry assembly's name and version.  Everything else is discovered from the API surface.

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

The governing rule is that **paths enable what they name**.  A description is served only when `DocumentPath` has a value, the reference page only when `InteractivePath` does, and a file is written only when `FileOutputPath` does.  Setting a path to null turns that piece off.

| Option | Default | Purpose |
|:--|:--|:--|
| `Document` | assembled from the API | The description itself, exposed for editing |
| `DocumentPath` | `/openapi` | Where the description is served, without an extension |
| `DocumentFormats` | `Json \| Yaml` | Which extensions resolve at `DocumentPath` |
| `InteractivePath` | `/openapi/reference` | Where the reference page is served |
| `StylesheetUrl` | null | A stylesheet applied to the reference page |
| `FileOutputPath` | null | A file path the description is written to at startup, without an extension |
| `AddValidation` | `true` | Whether request validation is registered alongside the description |

### Editing the description {#schema-api-openapi-document}

`Document` is the assembled `OpenApiDocument`.  It is built before your delegate runs, so anything the generator cannot infer is added by editing it directly: contact details, servers, security schemes, operation summaries, tags.

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

The full OpenAPI 3.1 model is available under `Document`, so any part of the specification can be expressed.  The path items and operations are reachable through `Document.Paths` if you need to add a summary or description to a discovered operation.

> A later `AddOpenApi()` call replaces an earlier one, so a test host or an environment-specific setup can reconfigure the description.
{: .prompt-tip }

### Document path and formats {#schema-api-openapi-formats}

`DocumentPath` carries no extension.  The extensions that resolve are decided by `DocumentFormats`:

| `DocumentFormats` | URLs served |
|:--|:--|
| `Json \| Yaml` (default) | `/openapi.json`, `/openapi.yaml`, `/openapi.yml` |
| `Json` | `/openapi.json` |
| `Yaml` | `/openapi.yaml`, `/openapi.yml` |

The bare path serves nothing.  Requesting `/openapi` returns 404, since it names no format.

To build the description without serving it, set `DocumentPath` to null.  This is useful when you only want a file written, or when the description should be published only outside production:

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

`InteractivePath` is where the [reference page](#schema-api-openapi-page) is served.  The page reads the description over HTTP, so it requires that `DocumentPath` has a value and `DocumentFormats` includes `Json`.

Violating either constraint throws `InvalidOperationException` from `AddOpenApi()` at startup.  There is no silent fallback: a page with nothing to read is a configuration error, and it is reported as one.

Set `InteractivePath` to null to serve the description without a page.

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

### Writing the description to disk {#schema-api-openapi-file}

`FileOutputPath` names a file the description is written to when the application starts.  Like `DocumentPath`, it carries no extension; one file is written per format in `DocumentFormats`.

```c#
builder.Services.AddOpenApi(c =>
{
    c.FileOutputPath = "docs/openapi";
});
```

With the default formats, this writes `docs/openapi.json` and `docs/openapi.yaml`.  The directory is created if it does not exist.

Writing the description to disk lets it be committed alongside the code, diffed in code review, and handed to client-generation tooling without running the application.  The served and written descriptions are rendered from the same document, so they cannot drift.

### Validation registration {#schema-api-openapi-validation}

`AddValidation` defaults to true, so `AddOpenApi()` registers [request validation](/schema/api-validation/) on its own.  The description states that a validated endpoint answers malformed input with `application/problem+json`, and registering validation here keeps that promise true without a second call.

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
{: .prompt-warning }

## How the description is assembled {#schema-api-openapi-discovery}

The description is produced at compile time by a source generator.  There is no runtime reflection over the API surface, so this works with Native AOT.

The generator reads two kinds of declaration:

- **Controllers** — public methods carrying `[HttpGet]`, `[HttpPost]`, `[HttpPut]`, `[HttpDelete]`, `[HttpPatch]`, `[HttpHead]`, or `[HttpOptions]`.  The route is composed from the class's `[Route]` prefix and the method attribute's template, with `[controller]` and `[action]` substituted.  The method name becomes the operation ID.
- **Minimal APIs** — `MapGet`, `MapPost`, `MapPut`, `MapDelete`, and `MapPatch` calls with a constant route template, including those made on a `MapGroup` (nested groups compose their prefixes).  A chained `.WithName()` sets the operation ID, and `.Produces<T>()` declares a response.

For each operation, the generator determines:

- **Request body** — a `[FromBody]` parameter on a controller, or any complex-typed parameter on either style, mirroring ASP.NET's own binding inference.  The body is documented as required `application/json`.
- **Parameters** — the remaining parameters.  A parameter named in the route template (including one with a constraint, such as `{id:int}`) is a path parameter and is always required; any other is a query parameter.  On controllers, `[FromRoute]`, `[FromQuery]`, and `[FromHeader]` override this.
- **Responses** — `[ProducesResponseType]` attributes or `.Produces<T>()` calls when present.  Otherwise a 200 response whose payload type is read from an `ActionResult<T>` return type, from a concrete return type, or from the argument of a `Results.Ok(...)` call in a minimal-API handler body.

### Schemas {#schema-api-openapi-schemas}

Schemas come from types decorated with `[GenerateJsonSchema]`.  Each such type lands in `components/schemas` once, keyed by its type name, and every body and response that uses it carries a `$ref`.  The schemas are the same ones the source generator produces for validation, minus `$id` and `$schema`, which an OpenAPI-internal schema does not carry.

Primitive parameter and response types (`string`, `int`, `bool`, `Guid`, `DateTime`, and so on) are described inline.  A body or response type without `[GenerateJsonSchema]` is documented with no schema.

### Class libraries {#schema-api-openapi-libraries}

Controllers and endpoints declared in a class library appear in the host's description without that library referencing the host or registering anything.  A solution split into feature libraries needs no wiring beyond the project references it already has.

### The validation response {#schema-api-openapi-problem}

Every endpoint whose body type carries `[GenerateJsonSchema]` is validated by the middleware before the handler runs.  When the body does not satisfy its schema, the middleware answers with 400 and a Problem Details body, and the handler never sees the request.

The description documents this.  Each validated operation gets a `400` response returning `application/problem+json`:

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

You write nothing to get this.  An operation that already declares its own `400` keeps that declaration.

This is a genuine difference from metadata-driven tools.  The validation error response is not visible to anything that reads action metadata, so a description produced by those tools omits it, and client generators built on that description have no type for the error they will actually receive.

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
public class UsersController : ControllerBase
{
    [HttpPost]
    public ActionResult<User> CreateUser([FromBody] CreateUserRequest request)
    {
        var user = _userService.CreateUser(request);
        return user;
    }
}
```

produces this description:

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
        "operationId": "CreateUser",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": { "$ref": "#/components/schemas/CreateUserRequest" }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
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

The same endpoint as a minimal API is discovered the same way:

```c#
app.MapPost("/api/users", (CreateUserRequest request, IUserService users) =>
    {
        var user = users.CreateUser(request);
        return Results.Ok(user);
    })
    .WithName("CreateUser");
```

## The reference page {#schema-api-openapi-page}

The page at `InteractivePath` presents the description for a reader and lets them exercise the API from the browser.  It is a single page with no external dependencies, and it fetches the description from `DocumentPath` rather than embedding it.

The page has three regions:

- **Navigation** lists every operation by method and path.  Scrolling the documentation keeps the current operation highlighted.
- **Documentation** shows each operation's parameters, request body, and responses.  Body schemas are rendered as property lists showing type, whether the property is required, `const` values, descriptions, and nested properties.  A schema with `additionalProperties: false` says so.
- **Request console** follows the selected operation.  It shows a request in cURL, JavaScript, C#, Python, or Go, with a copy button.  Below that, inputs for each parameter and a body editor prefilled with an example built from the schema.  Sending the request shows the status, elapsed time, and response body.

The header carries a server selector populated from `Document.Servers`, a theme toggle that persists the reader's choice, and an authentication panel when `Document.Components.SecuritySchemes` is set.  The panel supports HTTP bearer, HTTP basic, and API key schemes (header or query).  Credentials entered there are held in page memory only and applied to the sample code and to sent requests.

> Requests sent from the console are subject to the browser's cross-origin rules.  If the selected server is a different origin than the page and does not send CORS headers, the request fails in the browser.  The generated code samples carry no such restriction.
{: .prompt-info }
