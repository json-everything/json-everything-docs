---
layout: page
title: JsonLogic Basics (Legacy)
md_title: _JsonLogic_ Basics (Legacy)
bookmark: Legacy (pre-v5.2)
permalink: /logic/:title/
icon: fas fa-tag
order: "05.2"
---

> As of v5.2.0, this approach is deemed legacy and will likely be removed from v6.  Benchmarks show this approach to be twice as slow and consume twice the memory.
{: .prompt-warning }

## Using the object model {#logic-object-model}

The library also defines an object model for rules, starting with the `Rule` base class.  This type is fully serializeable, so if you have rules in a text format, just deserialize them to get a `Rule` instance.

```c#
var rule = JsonSerializer.Deserialize<Rule>("{\"<\" : [1, 2]}");
```

Once you have a rule instance, you can apply it using the `.Apply()` method, which takes a `JsonNode?` for the data.  (JSON null and .Net null are unified for this model.)  Sometimes, you may not have a data instance; rather you just want the rule to run.  In these cases you can call `.Apply()` passing a `null` or by using the `.Apply()` extension method which takes no parameters.

```c#
var data = JsonNode.Parse("{\"foo\": \"bar\"}");
var result = rule.Apply(data);
```

In addition to reading and deserializing rules, you can define them inline using the `JsonLogic` static class.  This class defines methods for all of the built-in rules.

Creating the "less than" rule with a variable lookup from above:

```c#
var rule = JsonLogic.LessThan(JsonLogic.Variable("foo.bar"), 2);
```

The `2` here is actually implicitly cast to a `LiteralRule` which is a stand-in for discrete JSON elements.  It can hold any JSON value, and there are implicit casts for numeric, string\*, and boolean types, as well as `JsonElement`.  For arrays and objects, you can either build nodes inline

```c#
new JsonArray { 1, false, "string" };
```

or via `JsonNode.Parse()`.

\* _JSON null literals need to either be cast to `string`, use `JsonNull.Node` from Json.More.Net, or use the provided `LiteralRule.Null`.  All of these result in the same semantic value._

## Creating new operators {#logic-new-operators}

JSON Logic also supports [adding custom operations](https://jsonlogic.com/add_operation.html).

In C#, your operators will need to derive from the `Rule` abstract class.  There is only a single method to implement, `Apply()`, and you'll need to add an `Operator` attribute.  The logic in the rule doesn't need to be complex, but there are a couple things to be aware of:

- The arguments for your rule must correspond to the parameters of the constructor.
- You're working with `JsonNode`s, so you'll need to detect compatible value types.  There are a few extension methods that you can use, like `.Numberify()`, that try to "fuzzy-cast" to an appropriate value.
- If you encounter invalid input, throw a `JsonLogicException` with an appropriate message.

`Apply()` takes two parameters, both of which are data for variables to act upon.

- `data` represents the external data.
- `contextData` represents data that's passed to it by other rules.

Several rules (`all`, `none`, and `some`) can pass data to their children.  `var` will prioritize `contextData` when attempting to resolve the path.  If `contextData` is (JSON) null or doesn't have data at the indicated path, the path will be resolved against `data`.

It's definitely recommended to go through the [code for the built-in ruleset](https://github.com/gregsdennis/json-everything/tree/master/JsonLogic/Rules) for examples.

Once your rule is defined, it needs to be registered using the `RuleRegistry.Register<T>()` method.  This will allow the rule to be automatically deserialized.

Lastly, you'll need to create a JSON converter for your rule.  Due to the dynamic nature of how rules are serialized, your converter MUST implement `IWeaklyTypedJsonConverter` which is defined by _Json.More.Net_.  The library also defines a `WeaklyTypeJsonConverter<T>` abstract class that you can use as a base.

> Also see the [AOT section](#aot) below for AOT-compatibility requirements.
{: info-warning}

## Overriding existing operators {#logic-overriding}

While this library allows you to inherit from, and therefore override, the default behavior of a `Rule`, you need to be aware of the implications.

The rules in this library implement the Json Logic Specification.  If you override this behavior, then you are no longer implementing that specification, and you lose interoperability with other implementations.  If you want custom behavior _and_ have this custom behavior common across implementations, you'll need to also override the behavior in _every_ implementation and application you use.

## Ahead of Time (AOT) compatibility {#aot}

_JsonLogic_ v5 includes updates to support [Native AOT applications](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/).  In order to take advantage of this, there are a few things you'll need to do.

First, on your `JsonSerializerContext`, add the following attributes:

```c#
[JsonSerializable(typeof(Rule))]
```

It's recommended that you create a single `JsonSerializerOptions` object (or a few if you need different configurations) and reuse it rather than creating them ad-hoc.  When you create one, you'll need to configure its `TypeInfoResolverChain` with your serializer context:

```c#
var serializerOptions = new()
{
    TypeInfoResolverChain = { MySerializerContext.Default }
};
```

If you don't have any custom rules, you're done.  Congratulations.

If you do have custom rules, you'll want to add `[JsonSerializable]` attributes for those as well.

For AOT-compatibility, you'll need to register your rules using the `RuleRegistry.AddRule<T>(JsonSerializerContext)` method overload, passing in your serializer context, to provide the library access to the `JsonTypeInfo` for your rule type.
