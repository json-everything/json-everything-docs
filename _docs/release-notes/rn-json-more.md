---
layout: page
title: Json.More.Net
icon: fas fa-tag
order: "09.13"
---
# [2.1.3](https://github.com/json-everything/json-everything/pull/934) {#release-more-2.1.3}

[#895](https://github.com/json-everything/json-everything/issues/895) - Optimization to use a frozen dictionary in `EnumStringConverter`.  Thanks to [@Meir017](https://github.com/Meir017) for identifying this.

[#918](https://github.com/json-everything/json-everything/issues/918) - Nulls not handled properly by `JsonArrayTupleConverter`.  Thanks to [@OpenByteDev](https://github.com/OpenByteDev) for identifying this.

# [2.1.2](https://github.com/json-everything/json-everything/pull/888) {#release-more-2.1.2}

[#885](https://github.com/json-everything/json-everything/issues/885) - Fixes an issue in `JsonArrayTupleConverter`.  Thanks to [@MatthewSmit](https://github.com/MatthewSmit) for identifying and providing the fix.
when serializing/deserializing arrays of tuples.

# [2.1.1](https://github.com/json-everything/json-everything/pull/857) {#release-more-2.1.1}

[#856](https://github.com/json-everything/json-everything/issues/856) - `EnumStringConverter` fails on Enum serialization when multiple members have same value

# [2.1.0](https://github.com/gregsdennis/json-everything/pull/822) {#release-more-2.1.0}

Add .Net 9.0 support.

# [2.0.2](https://github.com/gregsdennis/json-everything/commit/782198a80220fc2e54dfe3e01c2e4da54ab4cad7) {#release-more-2.0.2}

Updating _System.Text.Json_ to 8.0.4 due to a vulnerability.

# [2.0.1.x](https://github.com/gregsdennis/json-everything/pull/712) {#release-more-2.0.1.x}

[#711](https://github.com/gregsdennis/json-everything/issues/711) - Nuget package meta-data updates; no functional changes from previous version.

# [2.0.1](https://github.com/gregsdennis/json-everything/pull/669) {#release-more-2.0.1}

Fixes an issue in `JsonNode.GetInteger()` where the underlying value is a `uint`.

Also now throws a `NotSupportedException` when the underlying value is a `ulong` as this can't be reliably cast to the method output of `long`.  It is expected that this would have been erroring in many cases anyway.  This change merely improves the error messaging.

Thanks to [@ZarkoRunjevac](https://github.com/ZarkoRunjevac) for reporting and to [@elgonzo](https://github.com/elgonzo) for investigating and finding the problem.

# [2.0.0](https://github.com/gregsdennis/json-everything/pull/619) {#release-more-2.0.0}

Updated for multi-framework support with .Net Standard 2.0 and .Net 8 with Native AOT support, including updating _System.Text.Json_ from v6 to v8.

Most of the changes to support Native AOT involve either updating internal implementation or creating overloads that do.  Whatever could not be updated was marked as requiring reflection, which will generate warnings when building Native AOT applications.

## Breaking changes

- Dropping support for .Net Standard 3.1 - May still be used, but exact behavior cannot be guaranteed. 
- `JsonNull` removed in favor of using the `bool Try...(out ...)` pattern.
- `JsonNodeExtensions.Copy()` removed in favor of the built-in `.DeepClone()`.
- `JsonSerializerOptionsExtensions.GetConverter<T>()` and `.Read<T>()` updated to take a `JsonTypeInfo`.

## Additions

- Interface `IWeaklyTypedJsonConverter` and `WeaklyTypedJsonConverter<T>` - provides non-generic read/write methods that help calling without knowing about `T`.  (Used by _JsonSchema.Net_ v6 to support custom keywords.)
- `JsonNodeExtensions.GetString()` and `.GetBool()` which consider that a `JsonNode` may be backed by a `JsonElement` that subsequently contains the appropriate value.
- Various `JsonSerializerOptionsExtensions.Read...()` and `.Write...()` methods that support AOT-compatible serialization.

# [1.10.1](https://github.com/gregsdennis/json-everything/pull/615) {#release-more-1.10.1}

Continuation of v1.10.0: performance improvements for `JsonArrayTupleConverter`.

# [1.10.0](https://github.com/gregsdennis/json-everything/pull/613) {#release-more-1.10.0}

[dotnet/runtime #70352](https://github.com/dotnet/runtime/issues/70352) - Adds `JsonArrayTupleConverter`.

# [1.9.3](https://github.com/gregsdennis/json-everything/pull/563) {#release-more-1.9.3}

[#598](https://github.com/gregsdennis/json-everything/pull/598) - `sbyte` should be recognized as an integer type for `.IsInteger()` extension on `Type`.  Thanks to [@grbell-ms](https://github.com/grbell-ms) for submitting this fix.

Also added `sbyte` support for `.GetInteger()` extension on `JsonNode`.

# [1.9.2](https://github.com/gregsdennis/json-everything/pull/563) {#release-more-1.9.2}

Fixes an issue with number equality that specifically affects `decimal`s stored in `JsonNode`s.

# [1.9.1](https://github.com/gregsdennis/json-everything/commit/2a1fa87a2a75b56f0b912b70b194f8399acb6d7b) {#release-more-1.9.1}

`JsonNodeExtensions.Copy()` now performs a direct deep copy of the node rather than utilizing the serializer.

# [1.9.0](https://github.com/gregsdennis/json-everything/pull/418) {#release-more-1.9.0}

- Added `JsonSerializerOptionsExtensions` to help create custom converters that need to further call the serializer.  Thanks to [@mdekrey](https://github.com/mdekrey) for putting this together.
- Fixed `EnumStringConverter`'s flag enum serialization to exclude named default values when other values are present.

# [1.8.0](https://github.com/gregsdennis/json-everything/pull/418) {#release-more-1.8.0}

- `EnumStringConverter<T>` now supports reading and writing dictionary keys.
- Added `JsonNode.GetPathFromRoot()` to support valid JSON Path syntax (replacement for `JsonNode.GetPath()`)
- Added `JsonNode.GetPointerFromRoot()` because JSON Pointers are more correct for isolating a single location

# [1.7.0](https://github.com/gregsdennis/json-everything/pull/328) {#release-more-1.7.0}

Added optional parameter for serializer option in `.AsJsonString()` extensions.

# [1.6.0](https://github.com/gregsdennis/json-everything/pull/280) {#release-more-1.6.0}

Added supporting functionality for `JsonNode`.

- Added `JsonElementExtensions.AsNode()` - wraps a `JsonElement` into a `JsonNode`
- Updated `JsonNodeEqualityComparer` to properly handle nulls
- `JsonNodeExtensions`
    - Updated `.IsEquivalentTo()` and `.ComputeHashCode()` to properly handle nulls
    - Added `.AsJsonString()` as an alternative to .Net's `.ToJsonString()` that properly handles nulls (return `"null"`)
    - Added `.GetNumber()` to retrive a JSON number that could be stored as any .Net numeric type
    - Added `.GetInteger()` to retrive a JSON number that could be stored as any .Net integer type
    - Added `.Copy()` to copy nodes
    - Added `.TryGetValue()` to handle cases where the node was parsed from JSON text that contains duplicate keys ([unhandled by .Net](https://github.com/dotnet/runtime/issues/70604))
    - Added `.ToJsonArray()` to convert any `IEnumerable<JsonNode?>` to a `JsonArray` (.Net only supports `JsonNode?[]`)
- Added `JsonNull` to serve as a placeholder/signal for when it's necessary to [distinguish between JSON null and .Net null](https://github.com/dotnet/runtime/issues/68128)
- Added `TypeExtensions`
    - `.IsInteger()` to determine if the type is an integer type
    - `.IsFloatingPoint()` to determine if the type is a floating point numeric type
    - `.IsNumber()` to determine if the type is any numeric type

# [1.5.0](https://github.com/gregsdennis/json-everything/pull/243) {#release-more-1.5.0}

Updated System.Text.Json to version 6 in order to add `JsonNode` support.

Added:

- `JsonNodeExtensions`
- `JsonNodeEqualityComparer`

# [1.4.4](https://github.com/gregsdennis/json-everything/pull/163) {#release-more-1.4.4}

Added special case for `.ToJsonDocument()` that first checks to see if the value is already a `JsonDocument`.

# [1.4.3](https://github.com/gregsdennis/json-everything/pull/133) {#release-more-1.4.3}

[#132](https://github.com/gregsdennis/json-everything/pull/132) - Fixed some memory management issues around `JsonDocument` and `JsonElement`.  Thanks to [@ddunkin](https://github.com/ddunkin) for finding and fixing these.

# [1.4.2](https://github.com/gregsdennis/json-everything/pull/105) {#release-more-1.4.2}

Fixes potential race condition in `EnumStringConverter`.  Credit to [@jaysvoboda](https://github.com/jaysvoboda) for finding and fixing this.

# [1.4.1](https://github.com/gregsdennis/json-everything/pull/78) {#release-more-1.4.1}

`JsonElementEqualityComparer` now uses `.GetEquivalenceHashCode()`.

# [1.4.0](https://github.com/gregsdennis/json-everything/pull/75) {#release-more-1.4.0}

Added support for nullable reference types.

Related to [#76](https://github.com/gregsdennis/json-everything/issues/76), added `.GetEquivalenceHashCode()` extension for `JsonElement`.  Credit to [@amosonn](https://github.com/amosonn) for pointing me to a good hash code method in the wild.

# [1.3.0](https://github.com/gregsdennis/json-everything/pull/65) {#release-more-1.3.0}

Added `JsonElementProxy`.  This class allows the client to define methods that expect a `JsonElement` to be called with native types by defining implicit casts from those types into the `JsonElementProxy`.

Suppose you have this method:

```c#
void SomeMethod(JsonElement element) { ... }
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
    SomeMethod((JsonElement) element);
}
```

to allow callers to just use the raw value:

```c#
myObject.SomeMethod(1);
myObject.SomeMethod("string");
```

# [1.2.3](https://github.com/gregsdennis/json-everything/pull/61) {#release-more-1.2.3}

Signed the DLL for strong name compatibility.

# [1.2.2](https://github.com/gregsdennis/json-everything/pull/45) {#release-more-1.2.2}

Added debug symbols to package.  No functional change.

# [1.2.1](https://github.com/gregsdennis/json-everything/pull/24) {#release-more-1.2.1}

`.ToJsonString()` now just calls the serializer.

# [1.2.0](https://github.com/gregsdennis/json-everything/pull/24) {#release-more-1.2.0}

Added `.ToJsonString()` extension for `JsonElement` as `.ToString()` [does not output JSON content](https://github.com/dotnet/runtime/issues/42502).

# 1.1.0 {#release-more-1.1.0}

Not released; skipped for some reason.

<img src="https://i.imgflip.com/1myuho.jpg" style="height:100px"></img>

# 1.0.0 {#release-more-1.0.0}

Initial release.
