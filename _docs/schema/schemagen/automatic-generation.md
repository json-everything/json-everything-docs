---
layout: page
title: Source-Generated JSON Schemas
bookmark: Source Generation
permalink: /schema/schemagen/:title/
icon: fas fa-tag
order: "01.06.15"
---
Some systems disallow runtime reflection, and to run on these systems, your app needs to be built with [Native AOT](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/).  Since the `.FromType<T>()` schema builder extension uses reflection, it can't be uses on such system.  To accommodate this, _JsonSchema.Net.Generation_ provides source generation to create schemas at compile time.

When you decorate a type with `[GenerateJsonSchema]`, a C# source generator runs during compilation and outputs static schema properties that you can use just like any other generated code.  The system will also register these with the built-in JSON converters to support validation during serialization.

## How it works {#source-generation-basics}

Decorate your types with `[GenerateJsonSchema]`:

```c#
[GenerateJsonSchema]
public class MyModel
{
    [Required]
    [MinLength(10)]
    [MaxLength(50)]
    public string Name { get; set; }
    
    [Minimum(0)]
    [Maximum(120)]
    public int Age { get; set; }
}
```

When you build your project, the source generator creates a static class called `GeneratedJsonSchemas` with a property for each decorated type:

```c#
public static partial class GeneratedJsonSchemas
{
    public static readonly JsonSchema MyModel = 
        new JsonSchemaBuilder()
            .Type(SchemaValueType.Object)
            .Properties(
                ("Name", new JsonSchemaBuilder()
                    .Type(SchemaValueType.String)
                    .MinLength(10)
                    .MaxLength(50)),
                ("Age", new JsonSchemaBuilder()
                    .Type(SchemaValueType.Integer)
                    .Minimum(0)
                    .Maximum(120))
            )
            .Required("Name")
            .Build();
}
```

The primary purpose is validation during deserialization (covered in the next section), but you can also access the schemas directly if needed:

```c#
var schema = GeneratedJsonSchemas.MyModel;
var results = schema.Evaluate(myJsonData);
```

### Configuration via the attribute {#source-generation-configuration}

The attribute has a few options you can set:

```c#
[GenerateJsonSchema(
    PropertyNaming = NamingConvention.CamelCase,
    PropertyOrder = PropertyOrder.ByName,
    StrictConditionals = false
)]
public class MyModel
{
    public string FirstName { get; set; }  // becomes "firstName" in the schema
    public string LastName { get; set; }   // becomes "lastName" in the schema
}
```

- `PropertyNaming` - How property names are transformed.  Default is `CamelCase`.
- `PropertyOrder` - Whether properties are listed as declared or sorted by name.  Default is `AsDeclared`.
- `StrictConditionals` - Advanced option for how conditionals are structured.  See [Conditionals](./conditional-generation) for details.

> The source generator uses the same attribute system as `.FromType<T>()`, so all of the attributes described in [the basics page](./schema-generation) work here too.
{: .prompt-info}

### Disabling source generation {#source-generation-disabling}

If you need to use runtime generation instead, you can disable source generation by adding this to your project file:

```xml
<PropertyGroup>
    <DisableJsonSchemaSourceGeneration>true</DisableJsonSchemaSourceGeneration>
</PropertyGroup>
```

> Remember that runtime generation won't work with Native AOT.
{: .prompt-warning}

## Automatic validation integration {#source-generation-validation}

To use the generated schemas for validation during deserialization, add the `GenerativeValidatingJsonConverter` to your serializer options:

```c#
var options = new JsonSerializerOptions
{
    Converters = { new GenerativeValidatingJsonConverter() }
};

// Deserialization with automatic validation using the generated schema
var json = """{"name": "John Doe", "age": 30}""";
var model = JsonSerializer.Deserialize<MyModel>(json, options);
```

The source generator also creates code that automatically registers each generated schema.

## Using the schemas directly {#source-generation-direct-use}

The generated schemas are just static properties, so you can use them however you like:

```c#
// Write to a file
var schemaJson = JsonSerializer.Serialize(
    GeneratedJsonSchemas.MyModel,
    new JsonSerializerOptions { WriteIndented = true }
);
File.WriteAllText("my-model-schema.json", schemaJson);

// Validate manually
var instance = JsonNode.Parse(someJson);
var results = GeneratedJsonSchemas.MyModel.Evaluate(instance);

// Combine with other schemas
var combined = new JsonSchemaBuilder()
    .AllOf(
        GeneratedJsonSchemas.MyModel,
        additionalConstraints
    ).Build();
```

## Working with DataAnnotations {#source-generation-dataannotations}

The source generator recognizes attributes from the _JsonSchema.Net.Generation.DataAnnotations_ package alongside the built-in attributes.  You can mix and match:

```c#
using System.ComponentModel.DataAnnotations;
using Json.Schema.Generation;

[GenerateJsonSchema]
public class User
{
    [Required]  // from JsonSchema.Net.Generation
    [MaxLength(50)]  // from DataAnnotations
    [EmailAddress]  // from DataAnnotations - generates format: email
    public string Email { get; set; }
    
    [Range(18, 100)]  // from DataAnnotations
    [Description("User's age")]  // from JsonSchema.Net.Generation
    public int Age { get; set; }
}
```

The generator processes all of them and adds the appropriate keywords to the schema.

> More on DataAnnotations support can be found on the [Data Annotations page](./data-annotations).
{: .prompt-info}

## Custom attributes {#source-generation-custom-handlers}

You can create your own attributes that work with the source generator.  It looks for implementations of `IAttributeHandler`, so if you've followed the instructions on the [schema generation page](./schema-generation.md#schema-schemagen-attributes), you're halfway there.

The only thing you need to add to the handler, whether the attribute is its own handler or not, is an `.Apply()` method that appropriately extends a `JsonSchemaBuilder` passed to it.

```c#
[AttributeUsage(AttributeTargets.Property)]
public class CreditCardAttribute : Attribute, IAttributeHandler<CreditCardAttribute>
{
    // For runtime generation with .FromType<T>()
    public void AddConstraints(SchemaGenerationContextBase context, Attribute attribute)
    {
        context.Intents.Add(new PatternIntent("^[0-9]{13,19}$"));
    }
    
    // For source generation
    public static JsonSchemaBuilder Apply(JsonSchemaBuilder builder)
    {
        return builder.Pattern("^[0-9]{13,19}$");
    }
}
```

The source generator will create a custom extension method that then calls this `.Apply()` method to augment the generated schema.

The _JsonSchema.Net.Generation.DataAnnotations_ package has plenty of examples.

## Writing schemas by hand

If the generated schema just isn't doing what you want, it may be better (or necessary) to just write the schema yourself:

```c#
var schema = new JsonSchemaBuilder()
    .Type(SchemaValueType.Object)
    .Properties(
        ("name", new JsonSchemaBuilder().Type(SchemaValueType.String).MinLength(1)),
        ("age", new JsonSchemaBuilder().Type(SchemaValueType.Integer).Minimum(0))
    )
    .Required("name", "age")
    .Build();
```

This gives you complete control over the schema, but you'll need to keep it in sync with your types manually.
