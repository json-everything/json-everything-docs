---
layout: page
title: Json.More.Net Basics
md_title: _Json.More.Net_ Basics
bookmark: Basics
permalink: /more/:title/
icon: fas fa-tag
order: "07.1"
---
*Json.More.Net* aims to fill gaps left by `System.Text.Json`.  To this end, it supplies four additional functions.

# Equality comparison {#more-equality}

Sadly, it seems equality was considered unnecessary.  To remedy that, the `.IsEquivalentTo()` extension method is supplied for `JsonDocument`, `JsonElement`, and `JsonNode`.

This extension method calculates the JSON-equality of the nodes.  This means that objects are key-matched (unordered) and arrays are sequence-matched (ordered).

From [json.org](https://json.org):

> An *object* is an unordered set of name/value pairs.

and

> An *array* is an ordered collection of values.

Additionally, an `IEqualityComparer<JsonNode>` is supplied (`JsonNodeEqualityComparer`) which has a convenient static `Instance` property.

> Comparers are also supplied for `JsonDocument` and `JsonElement`.
{: .prompt-info }

# Explicitly specifying JSON null with `JsonNull` {#more-null}

> As of _Json.More.Net_ v6, the `JsonNull` type has been removed.  I still believe there needs to be a distinction between .Net null and JSON `null`, but trying to inject that distinction into a system that doesn't use it creates confusion.  I recommend using a `Try...(..., out JsonNode? value)` pattern instead.
{: .prompt-warning}

Because `JsonNode` was designed to unify .Net null with JSON null, it's difficult (and sometimes impossible) to determine when a JSON null is explicitly provided vs when it is merely the result of a missing property.  Ordinarily (e.g. during deserialization) this isn't much of a problem.

However, in the case you _do_ need to distinguish between them, you can use the `JsonNull.SignalNode` to indicate that JSON null has been explicitly provided.

Under the covers, it's just a singleton `JsonValue<JsonNull>`.  Use `ReferenceEquals(JsonNull.SignalNode, value)` to identify it.

> This is provided exclusively as a signal.  It is not intended to be saved.  Best practice is to continue to save null.  [See the code](https://github.com/gregsdennis/json-everything/blob/595045ec8258f4073ee5666c721609a9c0886490/JsonSchema/ValidationContext.cs#L146-L149) for an example of proper usage.
{: .prompt-warning }

# Enum serialization {#more-enums}

The `EnumStringConverter<T>` class enables string encoding of enum values.  `T` is the enum type.

The default behavior is to simply encode the C# enum value name.  This can be overridden with the `System.ComponentModel.DescriptionAttribute`.

```c#
public enum MyEnum
{
    Foo,                    // serializes as "Foo"
    [Description("bar")]
    Bar                     // serializes as "bar"
}
```

It also supports `[Flags]` enums by encoding the base values into an array.  Composite values will be serialized into an array of their respective components.

```c#
[Flags]
public enum MyFlagsEnum
{
    Default,
    Foo = 1,
    Bar = 2,
    Composite = 3           // serializes as ["Foo", "Bar"]
}
```

> If your flags enum defines a name for the default (0) value, the converter will exclude it when there are other names present.  For example, `Default` in the example above is omitted from the serialization of `Composite`.
{: .prompt-tip }

To use this converter, apply the `[JsonConverter(typeof(EnumStringConverter<T>))]` to either the enum or an enum-valued property.

# Building better converters

Unfortunately, the most obvious way to deserialize nested properties inside a custom converter isn't the recommended approach.

```c#
class MyJsonConverter : JsonConverter<MyClass>
{
    public override MyClass Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        var result = new MyClass();
        // ...
        result.Foo = JsonSerializer.Deserialize<Foo>(ref reader, options);
        // ...
        return result;
    } 
}
```

Calling `JsonSerializer.Deserialize<T>(ref reader, options)` has a side effect of ruining the line number and position information that would be included in a `JsonException` if something went wrong.

Instead, we're [supposed to](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json/converters-how-to?pivots=dotnet-7-0) get the appropriate converter through the `options` parameter and invoke that directly.

```c#
class MyJsonConverter : JsonConverter<MyClass>
{
    public override MyClass Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        var result = new MyClass();
        // ...
        var fooConverter = (JsonConverter<Foo>)options.GetConverter(typeof(Foo));
        result.Foo = fooConverter.Read(ref reader, typeof(Foo), options);
        // ...
        return result;
    } 
}
```

But that's not so nice to read, and you don't want to have to remember to do that in every converter.

To make our converters prettier, this library defines a couple extension methods on `JsonSerialierOptions` to help:

- `.GetConverter<T>()` - returns the converter, already typed and ready to use.
- `.Read<T>()` - gets the converter and performs the read.

```c#
class MyJsonConverter : JsonConverter<MyClass>
{
    public override MyClass Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        var result = new MyClass();
        // ...
        result.Foo = options.Read(ref reader, typeof(Foo));
        // ...
        return result;
    } 
}
```

Much nicer!

# Ahead of Time (AOT) compilation support

Building on the above `JsonSerializerOptions` extensions, there are a number of serialization extensions that were added to support AOT compilation.

When serializing under AOT, the recommended approach is to have source generation create a `JsonTypeInfo<T>` object that you pass to the serializer.  The `JsonTypeInfo<T>` object has all of the information that would normally be discover at runtime through reflection, except that all of the introspection is done at compile time.  That recommended serializer call looks like this:

```c#
JsonSerializer.Serialize(writer, value, MySerializerContext.Default.MyValue);
```

where `MyValue` is the type of `value`, and the property on the serializer context is generated code.

Conspicuously, the options are not passed into this call, which means any user preferences are ignored, and there are no overloads which allow passing the options.

In order to mitigate this, more `.Read()` and `.Write()` extensions have been created on `JsonSerializerOptions` that use the `JsonTypeInfo<T>` to fetch the appropriate converter, then call the appropriate method on the converter directly, passing in the options.

So the above code can be rewritten as:

```c#
options.Write(writer, value, MySerializerContext.Default.MyValue);
```

## Working around a known _System.Text.Json_ bug

There is a [known issue](https://github.com/dotnet/runtime/issues/50205) in _System.Text.Json_.  `JsonTypeInfo` is strongly linked to the `JsonSerializerOptions` that it's generated with.  The issue reports that attempting to use the type info with a different options object throws an exception.

There are a few variations of the `.Read()` and `.Write()` extensions that help work around this issue by handling arrays/lists and string-keyed dictionaries.  We recommend using these extensions over adding the array/list and dictionary types to your serializer context.

So where you would have:

```c#
[JsonSerializable(typeof(MyType))]
[JsonSerializable(typeof(MyType[]))]
internal partial class MySerializerContext : JsonSerializerContext;

// later
options.Write(writer, value, MySerializerContext.Default.MyTypeArray);
```

use this instead:

```c#
[JsonSerializable(typeof(MyType))]
internal partial class MySerializerContext : JsonSerializerContext;

// later
options.WriteArray(writer, value, MySerializerContext.Default.MyType);
```

## Weakly-typed serialization

The occasion may arise where you need to deserialize a value, but you don't know what type the value is at compile time.  Out of the box, this isn't supported when requiring AOT-compatible serialization.  The primary impediment to this is that `JsonConverter`, the non-generic base for all JSON converters, doesn't itself define a `.Read()` or `.Write()` method.

To address this, _Json.More.Net_ provides the `WeaklyTypedJsonConverter<T>` which you can use as a base class in your converter instead of just `JsonConverter<T>`.  This new converter base implements a new interface `IWeaklyTypedJsonConverter<T>` that defines these non-generic methods.

> You'll likely only need to use this if you're extending `json-everything` functionality, like making custom JSON Schema keywords or custom JSON Logic rules.
{: .prompt-info}

## AOT-incompatibility

There is some functionality that could not be made AOT-compatible.  All of this functionality has been appropriately marked with attributes that will generate compiler warnings in an AOT-required context.

# Value tuple serialization

The `JsonArrayTupleConverter` will handle any size `ValueTuple<T>`/`ValueType<T1, T2>`/etc. by serializing the values to and from an array.

> Even though the `ValueTuple<T1, T2, ...>` classes only have up to eight generic parameters, the C# syntax `(v1, v2, ...)` does support tuples of any size.  This is accomplished by stuffing values past the first seven into another `ValueTuple<...>` as the eighth value.  Just like the compiler, the converter will automatically handle this for you.
{: .prompt-tip }

Using the converter is simple:

```c#
var options = new JsonSerializerOptions
{
    Converters = { JsonArrayTupleConverter.Instance }
};
var json = JsonSerializer.Serialize((1, "string"), options); // [1,"string"]
var tuple = JsonSerializer.Deserialize<(int, string)>(json, options);
```

When deserializing, if the value isn't an array or if array isn't the right length for the requested tuple type, a `JsonException` will be thrown.

# Data conversions {#more-conversion}

## `.AsNode()` extension {#more-asnode}

Previous versions of the libraries in the `json-everything` suite were built on `JsonElement`.  They have since been migrated to support `JsonNode` directly.

While .Net provides ways to convert value directly into `JsonObject`, `JsonArray`, and `JsonValue`, they [neglected to provide](https://github.com/dotnet/runtime/issues/70427) a single way to convert _any_ value into a `JsonNode`, their base class.  This extension provides that.

```c#
JsonNode? node = element.AsNode();
```

Note that this does potentially return null to handle the JSON null case.

## `.ToJsonArray()` extension {#more-toarray}

.Net provided `JsonArray` with a constructor that takes an array of `JsonNode?`, however they don't support converting _any_ enumerable of nodes into an array.  This extension will handle that for you.

```c#
JsonArray array = new List<JsonNode?>{ 1, null, false }.ToJsonArray();
```

## `.AsJsonElement()` extension {#more-aselement}

Sometimes you just want a `JsonElement` that represents a simple value, like a string, boolean, or number.  This library exposes several overloads of the `.AsJsonElement()` extension that can do this for you.

Supported types are:

- `bool`
- Numeric types (e.g. `double`, `decimal`, `int`, etc.)
- `string`
- `IEnumerable<JsonElement>` (for arrays)
- `IDicationary<string, JsonElement>` (for objects)

For example, to create an empty array, you can use

```c#
var emptyArray = new JsonElement[0].AsJsonElement();
```

To create an object with an `6` in the `myInt` property:

```c#
var obj = new Dictionary<string, JsonElement>{
    ["myInt"] = 6.AsJsonElement()
}
```

## Making methods that require `JsonElement` easier to call {#more-proxy}

> If you're using `JsonNode`, you shouldn't need this as it already defines implicit casts from the appropriate types.
{: .prompt-info}

The `JsonElementProxy` class allows the client to define methods that expect a `JsonElement` to be called with native types by defining implicit casts from those types into the `JsonElementProxy` and then also an implicit cast from the proxy into `JsonElement`.

Suppose you have this method:

```c#
void SomeMethod(JsonElement element)
{
    ...
    DoSomething(element);
    ...
}
```

The only way to call this is by passing a `JsonElement` directly.  If you want to call it with a `string` or `int`, you have to resort to converting it with the `.AsJsonElement()` extension method:

```c#
myObject.SomeMethod(1.AsJsonElement());
myObject.SomeMethod("string".AsJsonElement());
```

This gets noisy pretty quickly.  But now we can define an overload that takes a `JsonElementProxy` argument instead:

```c#
void SomeMethod(JsonElementProxy element)
{
    ...
    DoSomething(element); // still only accepts JsonElement; doesn't need an overload
    ...
}
```

to allow callers to just use the raw value:

```c#
myObject.SomeMethod(1);
myObject.SomeMethod("string");
```

To achieve this without `JsonElementProxy`, you could also create overloads for `short`, `int`, `long`, `float`, `double`, `decimal`, `string`, and `bool`.

# JSON model serialization {#more-serialization}

The .Net team did a great job of supporting fast serialization, but for whatever reason they didn't implement serializing their data model.  The `Utf8JsonWriterExtensions` class fills that gap.

This provides an extension method that writes a `JsonElement` to the stream.

# Building better converters

Unfortunately, the most obvious way to deserialize nested properties inside a custom converter isn't the recommended approach.

```c#
class MyJsonConverter : JsonConverter<MyClass>
{
    public override MyClass Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        var result = new MyClass();
        // ...
        result.Foo = JsonSerializer.Deserialize<Foo>(ref reader, options);
        // ...
        return result;
    } 
}
```

Calling `JsonSerializer.Deserialize<T>(ref reader, options)` has a side effect of ruining the line number and position information that would be included in a `JsonException` if something went wrong.

Instead, we're [supposed to](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json/converters-how-to?pivots=dotnet-7-0) get the appropriate converter through the `options` parameter and invoke that directly.

```c#
class MyJsonConverter : JsonConverter<MyClass>
{
    public override MyClass Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        var result = new MyClass();
        // ...
        var fooConverter = (JsonConverter<Foo>)options.GetConverter(typeof(Foo));
        result.Foo = fooConverter.Read(ref reader, typeof(Foo), options);
        // ...
        return result;
    } 
}
```

But that's not so nice to read, and you don't want to have to remember to do that in every converter.

To make our converters prettier, this library defines a couple extension methods on `JsonSerialierOptions` to help:

- `.GetConverter<T>()` - returns the converter, already typed and ready to use.
- `.Read<T>()` - gets the converter and performs the read.

```c#
class MyJsonConverter : JsonConverter<MyClass>
{
    public override MyClass Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        var result = new MyClass();
        // ...
        result.Foo = options.Read(ref reader, typeof(Foo));
        // ...
        return result;
    } 
}
```

Much nicer!
