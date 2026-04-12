---
layout: page
title: Performing Custom Generation
bookmark: Refiners
permalink: /schema/examples/:title/
icon: fas fa-tag
order: "01.06.4.4"
---
# Performing Custom Generation {#example-schemagen-refiner}

Sometimes, you may need to have custom logic that changes the generated schema in a way that can't be fulfilled with Generators, Intents, or Attributes.

As an illustration, consider a refiner that ensures every generated string schema requires at least one character, unless a `MinLength` is already present.

```c#
internal class NonEmptyStringRefiner : ISchemaRefiner
{
    public bool ShouldRun(SchemaGenerationContextBase context)
    {
        // Only run when the schema has a string type
        return context.Intents.OfType<TypeIntent>()
            .Any(t => t.Type.HasFlag(SchemaValueType.String));
    }

    public void Run(SchemaGenerationContextBase context)
    {
        // Skip if a MinLength is already specified
        if (context.Intents.OfType<MinLengthIntent>().Any()) return;

        context.Intents.Add(new MinLengthIntent(1));
    }
}
```

To include a refiner in the generation process, add it to the `Refiners` collection in the configuration.

```c#
var configuration = new SchemaGeneratorConfiguration
{
    Refiners = { new NonEmptyStringRefiner() }
};
var schema = new JsonSchemaBuilder().FromType<SomeType>(configuration).Build();
```
