---
layout: page
title: Example - Extending JSON Schema Validation With Your Own Keywords
bookmark: Custom Keywords
permalink: /schema/examples/:title/
icon: fas fa-tag
order: "01.05.4"
---
These examples will show how to extend JSON Schema validation by creating a new keyword and incorporating it into a new vocabulary.

> These examples are actually defined in one of the library's unit tests.
{: .prompt-info }

For a more detailed explanation about the concepts behind vocabularies, please see the Vocabularies page.

## Defining a keyword

We want to define a new `maxDate` keyword that allows a schema to enforce a maximum date value to appear in an instance property.  We'll start with the keyword.

```c#
public class MaxDateKeyword : IKeywordHandler
{
    public static MaxDateKeyword Instance { get; set; } = new();

    public string Name => "maxDate";

    private MaxDateKeyword(){}

    public object? ValidateKeywordValue(JsonElement value)
    {
        if (value.ValueKind is not JsonValueKind.String)
            throw new JsonSchemaException($"'{Name}' value must be a string, found {value.ValueKind}");

        return DateTime.Parse(value.GetString()!, CultureInfo.InvariantCulture, DateTimeStyles.AssumeUniversal);
    }

    public void BuildSubschemas(KeywordData keyword, BuildContext context)
    {
    }

    public KeywordEvaluation Evaluate(KeywordData keyword, EvaluationContext context)
    {
        if (context.Instance.ValueKind is not JsonValueKind.String) return KeywordEvaluation.Ignore;

        var dateString = context.Instance.GetString();
        var date = DateTime.Parse(dateString!, CultureInfo.InvariantCulture, DateTimeStyles.AssumeUniversal);
        var expectedDate = (DateTime)keyword.Value!;

        if (date > expectedDate)
        {
            return new KeywordEvaluation
            {
                Keyword = Name,
                IsValid = false,
                Error = $"Date must be on or before {expectedDate:O}"
            };
        }

        return new KeywordEvaluation
        {
            Keyword = Name,
            IsValid = true
        };
    }
}
```

> Note that the keyword is a singleton.  All of the built-in keywords are stateless and implemented as singletons.  Though not a requirement, this greatly reduces the footprint of the runtime.
{: .prompt-tip }

## Defining a dialect

Now that we have the keyword, we need to tell the system about it.  The easiest way to do this is to create a copy of an existing dialect and add your keyword.

```c#
var myDialect = Dialect.202012.With([MaxDateKeyword.Instance]);
```

This custom dialect can now be included on your build options when building your schema.

```c#
var options = new BuildOptions
{
    Dialect = myDialect
}
```

If you want to make your dialect generally available and identifiable from the `$schema` keyword, there's a bit more to do.

First, you'll want to create a meta-schema.  For our single keyword, you can do something like this:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://mycompany.org/schemas/dialects/my-dialect",
  "$ref": "https://json-schema.org/draft/2020-12/schema",
  "properties": {
    "maxDate": {
      "type": "string",
      "format": "date-time"
    }
  }
}
```

Build this meta-schema (which automatically registers it).

Next, register your new dialect in the registry.  You may want to maintain a dialect registry, or you can just use the global one, which is the default on a `BuildOptions` object.

And that's it.  Your dialect is now available for use through that build options object.  Again, you can use the default build options if you want it to be available everywhere.