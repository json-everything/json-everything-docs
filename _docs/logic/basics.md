---
layout: page
title: JsonLogic Basics
md_title: _JsonLogic_ Basics
bookmark: Basics
permalink: /logic/:title/
icon: fas fa-tag
order: "05.1"
---
[JSON Logic](https://jsonlogic.com) is a mechanism that can be used to apply logical transformations to JSON values and that is also itself expressed in JSON.

## The syntax {#logic-syntax}

JSON Logic is expressed using single-keyed objects called _rules_.  The key is the operator and the value is (usually) an array containing the parameters for the operation.  Here are a few examples:

- Less than: `{"<" : [1, 2]}`
- Merging arrays: `{"merge":[ [1,2], [3,4] ]}`
- Value detection: `{"in":[ "Ringo", ["John", "Paul", "George", "Ringo"] ]}`

> For rules that only have one parameter, that parameter can be expressed directly instead of in an array.  This shorthand is provided as a syntactic sugar.
{: .prompt-info }

While explicitly listing rules is all well and good, the real power of this comes from the ability to reference input data using the `var` operator.  This operator
takes a dot-delimited path that is evaluated on the input object, and the `var` rule is replaced by the resolved value.

So if we want to ensure a value in the input data is less than 2, we could use `{"<": [{"var": "foo.bar"}, 2]}`.  This checks the input value for a `foo` then a `bar` property, returns that value, and compares it against 2.

There are many operators that work on different data types, ranging from string and array manipulation to arithmetic to boolean logic.  The full list is [on their website](https://jsonlogic.com/operations.html), and their docs are pretty good, so I won't repeat the list here.

## In code

The `JsonLogic` static class exposes an `.Apply(JsonNode? rule, JsonNode? context)` method that you'll use to process your rules.

To start, you need to get your rule and data into a `JsonNode`.  You can do this by parsing text or by explicitly building the JSON using `JsonNode`'s easy API.

Once you have your nodes, simply pass them into the `.Apply()` method.

```c#
var rule = JsonNode.Parse("...");
var data = JsonNode.Parse("...");
var result = JsonLogic.Apply(rule, data);
```

That's it.

### Native AOT support

There's nothing that needs serializing and there's no reflection, so it's fully AOT-compatible.

## Gotchas for .Net developers {#logic-gotchas}

In developing this library, I found that many of the operations don't align with similar operations in .Net.  Instead they tend to mimic the behavior of Javascript.  In this section, I'll try to list some of the more significant ones.

### `==` vs `===` {#logic-equality}

`===` defines a "strict" equality.  This is the equality we're all familiar with in .Net.

`==` defines a "loose" equality that can appropriately convert values to like types before performing the comparison.  For example, `"1" == 1` returns true because `"1"` can be converted to a number, and that number strictly equals the number.  More on type conversions later.

The first check is whether they are they same type.  If so, it just applies strict equality.  For the other cases, the following table gives a view of what equals what.  The different cases are evaluated in a top-down sequence.

|a|b|result|
|:-:|:-:|-|
|`null`|anything|`false`|
|anything|`null`|`false`|
|object|anything|`false`|
|anything|object|`false`|
|number|array|convert the array to comma-delimited string and apply loose equality\*|
|array|number|convert the array to comma-delimited string and apply loose equality\*|
|number|anything|attempt to convert to number and apply strict equality|
|anything|number|attempt to convert to number and apply strict equality|
|array|string|convert the array to comma-delimited string and apply strict equality|
|string|array|convert the array to comma-delimited string and apply strict equality|

That _should_ cover everything, but in case something's missed, it'll just return `false`.

\* _These cases effectively mean that the array must have a single element that is loosely equal to the number, though perhaps something like `[1,234]` might pass.  Again, the equality is **very** loose._

### Type conversion {#logic-conversions}

Some operations operate on specific types: sometimes strings, sometimes numbers.  To ensure maximum support, an attempt will be made to convert values to the type that the operation prefers.  If the value cannot be converted, a `JsonLogicException` will be thrown.

Arithmetic operations, like `+` and `-`, and some other operations, like `min` and `max`, will attempt to convert the values to a number.

String operations will attempt to convert to... yeah, strings.

Because `+` supports both numbers (addition) and strings (concatenation); it will try both.

Objects are never converted.

### Automatic array flattening {#logic-array-flattening}

Nested arrays are flattened before being operated upon.  As an example of this, `[["a"]]` is flattened to `["a"]` and `["a",["b"]]` is flattened to `["a","b"]`. 

That's it.  Not much to it; just be aware that it happens.

## Creating new operators {#logic-new-operators}

JSON Logic also supports [adding custom operations](https://jsonlogic.com/add_operation.html).

In C#, your operators will need to implement the `IRule` interface.  There is only a single method to implement, `Apply()`.  The logic in the rule doesn't need to be complex, but there are a couple things to be aware of:

- The arguments for your rule must correspond to the parameters of the constructor.
- You're working with `JsonNode`s, so you'll need to detect compatible value types.  There are a few extension methods that you can use, like `.Numberify()`, that try to "fuzzy-cast" to an appropriate value.
- If you encounter invalid input, throw a `JsonLogicException` with an appropriate message.

`Apply()` takes two parameters, both of which are data for variables to act upon.

- `args` is the JSON value for the rule.  For most of the built-in rules, this is an array.  You'll need to perform any validation.
- `context` represents data that's passed to it by the user and other rules.  It's implemented as a stack of `JsonNodes`.  You can add to the stack but remember to remove it.  You can see an example of this in the [code for the `reduce` rule](https://github.com/gregsdennis/json-everything/blob/d03a2344c6a6498826385849292013045c555233/JsonLogic/Rules/ReduceRule.cs#L76-L104).

It's definitely recommended to go through the [code for the built-in ruleset](https://github.com/gregsdennis/json-everything/tree/master/JsonLogic/Rules) for examples.

Once your rule is defined, you'll need to register an instance using the `RuleRegistry.Register(string, IRule)` method.  This will associate your rule with its operator key.

## Overriding existing operators {#logic-overriding}

While this library allows you to inherit from, and therefore override, the default behavior of a `Rule`, you need to be aware of the implications.

The rules in this library implement the Json Logic Specification.  If you override this behavior, then you are no longer implementing that specification, and you lose interoperability with other implementations.  If you want custom behavior _and_ have this custom behavior common across implementations, you'll need to also override the behavior in _every_ implementation and application you use.

One prime candidate for overriding is the `log` rule.  Currently, in addition to returning the log entry (which it definitely should do), it writes the entry to the console.  Ideally, you'll want to write that somewhere more useful to you.  By registering your own rule, you can make it write to whatever you need.
