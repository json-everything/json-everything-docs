---
layout: page
title: Example - JSON Schema Specification Version Selection
bookmark: Schema Version
permalink: /schema/examples/:title/
icon: fas fa-tag
order: "01.05.3"
---
Selecting the right JSON Schema version (historically known as "draft") can be an important factor in ensuring evaluation works as expected.  Selecting the wrong draft may result in some keywords not being processed.  For example, `prefixItems` was only added with Draft 2020-12.  Evaluating a schema with this keyword under a previous draft will ignore the keyword completely.

*JsonSchema.Net* has a couple ways to specify which version a evaluation should use.

## `$schema`

Including this keyword in the schema is the preferred way to specify which version to use when interpreting a schema.  The specification itself _strongly recommends_ that all schemas contain this keyword.

If you're the author of your schemas, just include this keyword, and all will be well.

*JsonSchema.Net* will always respect this keyword when present.

## Build Options {#example-schema-versions-options}

If the schema you're working with is out of your control, meaning you can't add a `$schema` keyword, you can specify which draft you want to use during evaluation using the `BuildOptions.Dialect` property.

> The value for `$schema` is a URI (identifier), not a URL (location).  This means that the value must exactly match the `$id` from a known meta-schema.  This also means there is no `https`-for-`http` substitution.
{: .prompt-warning }

By default, the latest supported version will be used.  At the time of this writing, that is the preview v1/2026.

# Examples {#example-schema-versions-examples}

## Behaviors of Explicitly Specifying Different Versions {#example-schema-versions-explicit}

```c#
var schemaJson = JsonDocument.Parse(
    """
    {
      "type": "array",
      "prefixItems": [
        { "type": "integer" },
        { "type": "boolean" }
      ],
      "items": { "type": "string" }
    }
    """).RootElement;
JsonSchema schema = JsonSchema.Build(schemaJson);

var instance = JsonDocument.Parse("""[1, true, "foo", "bar"]""").RootElement;
```

This builds a schema that evaluates JSON instances which are arrays with:

- the first item being an integer,
- the second item being a boolean,
- the remaining items being strings

Note that it doesn't say what version the schema is, so you need to tell the evaluator which version you want to use.  You do that by passing a custom options into the evaluation:

```c#
var options = new EvaluationOptions{
    EvaluateAs = Draft.Draft202012
};

var results = schema.Evaluate(instance, options); // results.IsValid == true
```

If you were to specify draft 7 instead of draft 2020-12, `prefixItems` would be skipped.

```c#
var options = new EvaluationOptions{
    EvaluateAs = Draft.Draft7
};

var results = schema.Evaluate(instance, options); // results.IsValid == false
```

In this case, the evaluation fails because draft 7 doesn't know about `prefixItems`.  To get the same behavior out of a draft 7 schema, you'd need to use

- array-valued `items` instead of `prefixItems` above
- `additionalItems` instead of `items` above

Notice also that if we did use the draft 7 version of this schema, that evaluating as draft 2020-12 would also fail because

- array-valued `items` is not supported in draft 2020-12
- `additionalItems` was removed as a keyword from draft 2020-12

> There are a lot of reasons why we chose to make this change.  You can read the discussion mainly [here](https://github.com/json-schema-org/json-schema-spec/issues/864) but also in several other issues.
{: .prompt-info }

## Letting the Evaluator Decide {#example-schema-versions-auto}

So suppose you _did_ have that draft 7 schema:

```c#
JsonSchema schema = new JsonSchemaBuilder()
    .Type(SchemaValueType.Array)
    .Items(
        new JsonSchemaBuilder()
            .Type(SchemaValueType.Integer),
        new JsonSchemaBuilder()
            .Type(SchemaValueType.Boolean)
    )
    .AdditionalItems(new JsonSchemaBuilder()
        .Type(SchemaValueType.String)
    )
```

As mentioned before, explicitly setting `EvaluateAs = Draft.Draft2020212` would cause evaluation to fail.

However, if you let the automated process work, as part of the initial keyword analysis (to determine which keywords to process), it would see `additionalItems` is present and narrow down the candidate versions to drafts 6, 7, and 2019-09.

Once the analysis is complete, it takes the latest draft supported by all the keywords present and runs as that.  So in this case, it would evaluate as draft 2019-09, which would have the same result as draft 7.

It's less desirable to rely on the automated draft selection, however.  Specifying it will yield more consistent results.
