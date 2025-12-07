---
layout: page
title: Defining and Using Custom Keywords
bookmark: Custom Keywords
permalink: /schema/:title/
icon: fas fa-tag
order: "01.03"
---
_JsonSchema.Net_ has been designed with custom keywords in mind.  Using custom keywords just take two steps:

1. Implement `IKeywordHandler`.
2. Create a dialect.

Lastly, remember that the best resource for building keywords is [the code](https://github.com/gregsdennis/json-everything/tree/master/JsonSchema/Keywords) where all of the built-in keywords are defined.

### Evaluation philosophy

Starting with version 8 of _JsonSchema.Net_, schema evaluation occurs in two stages: building a cyclical graph of subschema nodes and processing evaluations.  The build stage performs any work that can be done without an instance, while evaluations complete the work.  By separating these stages, _JsonSchema.Net_ can reuse work for many evaluations, greatly improving performance.

### 1. Implement `IKeywordHandler` {#schema-custom-keywords-1}

Implementing your keyword will require some initial thought and design around what work the keyword can perform without the instance and what work requires the instance.

> The keywords that ship with the library have been created as singletons.  Though not required, this is a recommended practice.
{: .prompt-tip }

The interface defines a property and three methods:

#### `Name`

This is just the name of the keyword.

#### `object? ValidateKeywordValue(JsonElement)`

This method validates that the keyword's value in the schema is correct.  It is expected that this method will throw `JsonSchemaException` if the value is invalid for the keyword.

Optionally, this method can return a value that can be used in other methods.  For example, the `$ref` keyword returns the URI value.  Although the `KeywordData` does retain the raw `JsonElement`, the URI has already been parsed by this method, and we can save a bit of ticks and memory by simply reusing it instead of having to parse it again.

#### `void BuildSubschemas(KeywordData, BuildContext)`

This method builds subschemas and add them onto the keyword data.

In building the subschemas, this method is also responsible for creating new build context structs with updated details like the instance, its location, and the relative path from its parent (less the keyword itself).  Mostly these details are needed for consistent output values.

#### `EvaluationResults Evaluate(KeywordData, EvaluationContext)`

This method actually performs the evaluation.

At this point, usually all of the pieces are in place and you just have to do the check.

#### Builder extensions {#schema-builder-extensions}

To enable the fluent construction interface for your keyword, simply create an extension method on `JsonSchemaBuilder` that adds the keyword and returns the builder.  For example, adding a `description` keyword is implemented by this method:

```c#
public static JsonSchemaBuilder Description(this JsonSchemaBuilder builder, string description)
{
    builder.Add("description", description);
    return builder;
}
```

### 2. Create a dialect {#schema-custom-keywords-2}

To make *JsonSchema.Net* aware of your keyword, you must create a new dialect that contains it.

```c#
var myDialect = Dialect.Draft202012.With([Mykeyword.Instance]);

var buildOptions = new BuildOptions
{
    Dialect = myDialect
}
```

If you have an ID for your dialect, and you want to allow schemas to declare it using the `$schema` keyword, you'll need to

- create a meta-schema and add it to the schema registry
- add your dialect to the dialect registry

## You're done

That's it, really.  Your keyword is ready to use.  Just assign your new dialect to the build options, and it'll be handled.