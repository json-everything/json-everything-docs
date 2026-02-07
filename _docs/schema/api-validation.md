---
layout: page
title: Automatic API Request Validation
bookmark: API Validation
permalink: /schema/:title/
icon: fas fa-tag
order: "01.025"
---
_JsonSchema.Net.Api_ provides automatic JSON Schema validation for ASP.NET Core MVC request bodies, integrating seamlessly with the MVC pipeline to validate incoming data before it reaches your controllers.

This library combines the power of [_JsonSchema.Net_](https://www.nuget.org/packages/JsonSchema.Net) and [_JsonSchema.Net.Generation_](https://www.nuget.org/packages/JsonSchema.Net.Generation) to deliver built-in request validation with detailed error reporting.

> More information about schema-based validation can be found in the [Enhancing Deserialization with JSON Schema](/schema/serialization/) documentation.
{: .prompt-tip }

> This library uses reflection to generate schemas and may not be compatible with Native AOT applications.
{: .prompt-warning }

## Configuration {#schema-api-configuration}

To enable automatic validation, add the JSON Schema validation services to your MVC configuration in `Program.cs` or `Startup.cs`:

```c#
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers()
    .AddJsonSchemaValidation();
```

This single call configures:

- A validation filter that intercepts requests and validates JSON bodies
- A custom model binder that performs schema validation during model binding
- JSON serialization options with the generative validating converter

### Customizing validation behavior {#schema-api-custom-config}

You can customize the validation behavior by passing a configuration delegate:

```c#
builder.Services.AddControllers()
    .AddJsonSchemaValidation(converter =>
    {
        // Specify dialect or register other dialects, vocabularies, or external schemas
        converter.BuildOptions.Dialect = Dialect.Draft202012;

        // Customize schema generation
        converter.GeneratorConfiguration.PropertyNameResolver = PropertyNameResolvers.SnakeCase;
        converter.GeneratorConfiguration.Nullability = Nullability.AllowForNullableValueTypes;
        
        // Customize schema evaluation
        converter.EvaluationOptions.OutputFormat = OutputFormat.List;
        converter.EvaluationOptions.RequireFormatValidation = true;
    });
```

If no configuration is provided, the following defaults are used:

- Property names are converted to `camelCase`
- Output format is hierarchical (required to report errors properly)
- `format` validation is required

> JSON Schema typically does not validate the `format` keyword, however users generally expect this behavior, so it has been enabled by default for request body validation.
{: .prompt-info}

## Defining validation schemas {#schema-api-schemas}

To validate a model, decorate it with the `[GenerateJsonSchema]` attribute and any applicable validation attributes:

```c#
[GenerateJsonSchema]
[AdditionalProperties(false)]
public class CreateUserRequest
{
    [Required]
    [MinLength(3)]
    [MaxLength(50)]
    public string Username { get; set; }
    
    [Required]
    [Pattern(@"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")]
    public string Email { get; set; }
    
    [Required]
    [Minimum(18)]
    [Maximum(120)]
    public int Age { get; set; }
}
```

Alternatively, if the generated schema doesn't meet your requirements, you can use the `[JsonSchema()]` attribute to specify your own schema explicitly:

```c#
[JsonSchema(typeof(UserSchemas), nameof(UserSchemas.CreateUserRequestSchema))]
public class CreateUserRequest
{
    public string Username { get; set; }
    public string Email { get; set; }
    public int Age { get; set; }
}

public static class UserSchemas
{
    public static readonly JsonSchema CreateUserRequestSchema =
        new JsonSchemaBuilder()
            .Type(SchemaValueType.Object)
            .Properties(
                ("username", new JsonSchemaBuilder()
                    .Type(SchemaValueType.String)
                    .MinLength(3)
                    .MaxLength(50)
                ),
                ("email", new JsonSchemaBuilder()
                    .Type(SchemaValueType.String)
                    .Pattern(@"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")
                ),
                ("age", new JsonSchemaBuilder()
                    .Type(SchemaValueType.Integer)
                    .Minimum(18)
                    .Maximum(120)
                )
            )
            .Required("username", "email", "age")
            .AdditionalProperties(false);
}
```

When a request with a JSON body is received, the library will:

1. Generate a JSON Schema from the model type (or use a cached version)
2. Validate the incoming JSON against the schema
3. Deserialize the JSON if validation passes
4. Return a detailed error response if validation fails

> Schema validation will only occur for models decorated with `[GenerateJsonSchema]` or `[JsonSchema()]`. Models without these attributes will be deserialized normally without validation.
{: .prompt-info }

> When using `[GenerateJsonSchema]`, the attribute is only required on the top-level model (the controller action parameter). Child models referenced by properties will automatically be included in the generated schema without needing the `[GenerateJsonSchema]` attribute themselves, though they should still have validation attributes applied to their properties.
{: .prompt-tip }

## Using validated models in controllers {#schema-api-usage}

Once configured, simply use your models as controller action parameters:

```c#
[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    [HttpPost]
    public IActionResult CreateUser([FromBody] CreateUserRequest request)
    {
        // If we reach here, the request has been validated
        // No additional validation code needed!
        
        var user = _userService.CreateUser(request);
        return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
    }
}
```

## Error responses {#schema-api-errors}

When validation fails, the library automatically returns a standardized error response with HTTP status 400 (Bad Request) in the [RFC 7807 Problem Details](https://tools.ietf.org/html/rfc7807) format:

```json
{
  "type": "https://json-everything.net/errors/validation",
  "title": "Validation Error",
  "status": 400,
  "detail": "One or more validation errors occurred.",
  "errors": {
    "/username": [
      "The value must have a minimum length of 3"
    ],
    "/email": [
      "The value does not match the required pattern"
    ]
  }
}
```

The error paths use [JSON Pointer](https://tools.ietf.org/html/rfc6901) notation, making it easy to map errors to specific fields in your request.

## How it works {#schema-api-internals}

The library integrates with ASP.NET Core through three main components:

### ValidatingJsonModelBinder

This custom model binder intercepts the model binding process to:

- Read the request body
- Deserialize using the configured JSON serializer (with validation)
- Capture validation errors from the `ValidatingJsonConverter`
- Add errors to `ModelState` using JSON Pointer paths

### JsonSchemaValidationFilter

This filter implements both `IActionFilter` and `IAlwaysRunResultFilter` to:

- Inspect `ModelState` for validation errors after model binding
- Filter errors to only those with JSON Pointer paths (ensuring they came from schema validation)
- Build a Problem Details response with structured error information
- Short-circuit the request pipeline when validation errors are present

### GenerativeValidatingJsonConverter

This converter, provided by _JsonSchema.Net.Generation_, handles:

- Generating schemas from types decorated with `[GenerateJsonSchema]`
- Validating JSON during deserialization
- Caching generated schemas for performance
- Throwing `JsonException` with validation results when validation fails

## Best practices {#schema-api-best-practices}

1. **Use validation attributes liberally** - The more constraints you define, the safer your code and the more meaningful validation errors you'll provide to API consumers.
2. **Test your schemas** - Use unit tests to verify that your validation attributes produce the expected schemas and validation behavior.
3. **Consider separate validation models** - For complex scenarios, create dedicated request models separate from your domain entities to keep validation concerns isolated.
4. **Customize error messages** - The default validation errors are descriptive, but you can provide [custom error messages](./basics#schema-errors) to better match your application's needs.

## Example: Complete setup {#schema-api-example}

Here's a complete example showing all the pieces together:

```c#
// Program.cs
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers()
    .AddJsonSchemaValidation(converter =>
    {
        converter.GeneratorConfiguration.PropertyNameResolver = PropertyNameResolvers.CamelCase;
        converter.EvaluationOptions.RequireFormatValidation = true;
    });

var app = builder.Build();
app.MapControllers();
app.Run();

// Models/CreateProductRequest.cs
[GenerateJsonSchema]
[AdditionalProperties(false)]
public class CreateProductRequest
{
    [Required]
    [MinLength(1)]
    [MaxLength(100)]
    public string Name { get; set; }
    
    [MinLength(10)]
    [MaxLength(500)]
    public string? Description { get; set; }
    
    [Minimum(0.01)]
    public decimal Price { get; set; }
    
    [MinItems(1)]
    [UniqueItems(true)]
    public List<string> Tags { get; set; }
}

// Controllers/ProductsController.cs
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpPost]
    public IActionResult CreateProduct([FromBody] CreateProductRequest request)
    {
        // Fully validated request is available here
        return Ok(new { message = "Product created successfully" });
    }
}
```

With this setup, any request that doesn't match the schema will be automatically rejected before reaching your controller code, keeping your business logic clean and focused.
