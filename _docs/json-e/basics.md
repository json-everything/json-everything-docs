---
layout: page
title: Json-e Basics
md_title: _Json-e_ Basics
bookmark: JSON-e
permalink: /json-e/:title/
icon: fas fa-tag
order: "06.1"
---

[JSON-e](https://json-e.js.org/) is a JSON-based templating language that allows you to create data templates and transformations.

This documentation covers how to use _JsonE.Net_ to interact with the JSON-e system in .Net.  The examples used below are pulled from the examples shown in the JSON-e documentation in an effort to emphasize interaction with the library over how JSON-e works.

> The website expresses JSON-e in YAML, however this library is built on `JsonNode`, so this documentation will use JSON.  If you'd like to support YAML, the _Yaml2JsonNode_ library is your friend.
{: .prompt-tip }

## A quick overview

While the best documentation for JSON-e itself can be found on their site, it makes sense to review the language.

Operating with JSON-e involves primarily a template and an optional context object.

The template can be any JSON value, generally a structured value such as an object or array.  Within the template, or even the entire template, can be found objects with "operations" indicated by the presence of a key beginning with a `$`.  These keys are well-known and may only be accompanied by other keys that each operation defines.

The context is a JSON object which provides additional data that can be referenced from within the template.

Evaluating a context against a template results in another JSON value.  The same template with different contexts can produce different results.

## The `JsonE` static class

The entry point for evaluating JSON-e templates is the `JsonE` static class which exposes a single method:

```c#
JsonNode? Evaluate(JsonNode? template, JsonObject? context = null)
```

Most of the time, this is all you'll need.  Below are a few usage examples.  (You may notice a pattern.)

### String interpolation

Within strings, the `${}` construct denotes an expression to be evaluated.

```c#
var template = JsonNode.Parse(
    "{\"message\": \"hello ${key}\", \"k=${num}\": true}"
);
var context = JsonNode.Parse(
    "{\"key\": \"world\", \"num\": 1}"
)!.AsObject();

var result = JsonE.Evaluate(template, context);

// result: {"message": "hello world", "k=1": true}
```

As you can see, the expressions are evaluated in both values and object keys.

### Operators

Objects which contain operators (keys that start with `$`) are special and reserved.  (They _can_ be escaped, however.)

```c#
var template = JsonNode.Parse(
    "{\"$flatten\": [[1, 2], [3, 4], [5]]}"
);

var result = JsonE.Evaluate(template);

// result: [1, 2, 3, 4, 5]
```

### Expressions

You say a little bit about expressions before for string interpolation, but they're much more powerful than just accessing the context.  Mostly, you'll see them used with the `$eval` operator, but they're used in other places as well.

```c#
var template = JsonNode.Parse(
    "{\"$eval\": \"(z / x) ** 2\"}"
);
var context = JsonNode.Parse(
    "{\"x\": 10, \"z\": 20, \"s\": \"face\", \"t\": \"plant\"}"
)!.AsObject();

var result = JsonE.Evaluate(template, context);

// result: 4
```

### Built-in functions

Within expressions, you can use some functions that are built in to the system.

```c#
var template = JsonNode.Parse(
    "{\"$eval\": \"max(2, 4, 6)\"}"
);

var result = JsonE.Evaluate(template);

// result: 6
```

## Custom functions

On top of the built-in functions, you can define your own.  They are included via the context.

To define a function, for example a `mod` function, you just need to add it to your context using the `JsonFunction.Create()` method.

```c#
var template = JsonNode.Parse(
    "{\"$eval\": \"mod(a, b)\"}"
);
var context = JsonNode.Parse(
    "{\"a\": 100, \"b\": 7}"
)!.AsObject();

context["mod"] = JsonFunction.Create((parameters, context) =>
    parameters[0]!.AsValue().GetNumber() % parameters[1]!.AsValue().GetNumber()
);

var result = JsonE.Evaluate(template, context);

// result: 2
```

> The functions you provide should handle errors better than shown above.  Take a look at the source for examples on how to handle errors in an expected way.
{: .prompt-warning }

> The `JsonFunction` type defines an explicit cast that automatically wraps the function in a `JsonValue`.  This is how the function can be included within the _System.Text.Json.Nodes_ data structure.
{: .prompt-info }

A `JsonFunction` takes two parameters.  In the above example,

- `parameters` is `JsonNode?[]`
- `context` is `EvaluationContext`

The evaluation context is how the context object is accessed, but you're not likely going to need to.  The built-in `fromNow()` function requires access to the context, so it's not unheard of.  You can read more about how the context works in [this blog post](https://blog.json-everything.net/posts/json-e/#the-context).

`EvaluationContext` exposes four methods:

|Function| Description|
|:--|:--|
|JsonNode? Find(ContextAccessor identifier)|Retrieves data from the context|
|bool IsDefined(ContextAccessor identifier)|Checks to see if data exists in the context|
|void Push(JsonObject newContext)|Adds data to the context|
|JsonNode? Pop()|Removes added data from the context|

> `Push()` and `Pop()` change the context.  If you find that you need to add data to the context, it's your responsibility to remove it.  Failing to do so will result in undesired behavior.
{: .prompt-warning }

## Errors

The original JSON-e implementations throw different kinds of errors depending on where and when the error occurs.  This library makes a best effort to replicate that behavior and the error messages, but it's not exactly the same.

There are several exception types, but they all derive from `JsonEException` to make catching any of them easier.

- `BuiltInException` - Thrown when something is wrong with an expression function.
- `InterpreterException` - Thrown when something can't be evaluated.
- `SyntaxException` - Thrown when an expression can't be parsed.
- `TemplateException` - Thrown generally when something is wrong with an operator.
- `TypeException` - (This is defined, but nothing throws it.  This may change in the future, but I can't remember where I saw it.)
