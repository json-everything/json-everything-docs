---
layout: "page"
title: "JsonSchemaBuilderExtensions Class"
bookmark: "JsonSchemaBuilderExtensions"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.054"
---
**Namespace:** Json.Schema

**Inheritance:**
`JsonSchemaBuilderExtensions`
 🡒 
`object`

Provides a fluent interface for **Json.Schema.JsonSchemaBuilder**.

## Methods

### AdditionalItems(this JsonSchemaBuilder builder, JsonSchema schema)

Add an `additionalItems` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder AdditionalItems(this JsonSchemaBuilder builder, JsonSchema schema)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| schema | JsonSchema | The schema for `additionalItems`. |


#### Returns

The builder.

### AdditionalProperties(this JsonSchemaBuilder builder, JsonSchema schema)

Add an `additionalProperties` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder AdditionalProperties(this JsonSchemaBuilder builder, JsonSchema schema)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| schema | JsonSchema | The schema for `additionalProperties`. |


#### Returns

The builder.

### AllOf(this JsonSchemaBuilder builder, params JsonSchema[] schemas)

Add an `allOf` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder AllOf(this JsonSchemaBuilder builder, params JsonSchema[] schemas)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| schemas | params JsonSchema[] | The schemas for `allOf`. |


#### Returns

The builder.

### AllOf(this JsonSchemaBuilder builder, IEnumerable\<JsonSchema\> schemas)

Add an `allOf` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder AllOf(this JsonSchemaBuilder builder, IEnumerable<JsonSchema> schemas)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| schemas | IEnumerable\<JsonSchema\> | The schemas for `allOf`. |


#### Returns

The builder.

### Anchor(this JsonSchemaBuilder builder, string reference)

Add an `$anchor` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Anchor(this JsonSchemaBuilder builder, string reference)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| reference | string | The anchor reference. |


#### Returns

The builder.

### AnyOf(this JsonSchemaBuilder builder, params JsonSchema[] schemas)

Add an `anyOf` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder AnyOf(this JsonSchemaBuilder builder, params JsonSchema[] schemas)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| schemas | params JsonSchema[] | The schemas for `anyOf`. |


#### Returns

The builder.

### AnyOf(this JsonSchemaBuilder builder, IEnumerable\<JsonSchema\> schemas)

Add an `anyOf` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder AnyOf(this JsonSchemaBuilder builder, IEnumerable<JsonSchema> schemas)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| schemas | IEnumerable\<JsonSchema\> | The schemas for `anyOf`. |


#### Returns

The builder.

### Comment(this JsonSchemaBuilder builder, string comment)

Add a `$comment` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Comment(this JsonSchemaBuilder builder, string comment)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| comment | string | The comment. |


#### Returns

The builder.

### Const(this JsonSchemaBuilder builder, JsonNode node)

Add a `const` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Const(this JsonSchemaBuilder builder, JsonNode node)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| node | JsonNode | The constant value. |


#### Returns

The builder.

### Contains(this JsonSchemaBuilder builder, JsonSchema schema)

Add an `contains` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Contains(this JsonSchemaBuilder builder, JsonSchema schema)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| schema | JsonSchema | The schema for `contains`. |


#### Returns

The builder.

### Default(this JsonSchemaBuilder builder, JsonNode node)

Add a `default` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Default(this JsonSchemaBuilder builder, JsonNode node)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| node | JsonNode | The value. |


#### Returns

The builder.

### Definitions(this JsonSchemaBuilder builder, IReadOnlyDictionary\<string, JsonSchema\> defs)

Add a `definitions` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Definitions(this JsonSchemaBuilder builder, IReadOnlyDictionary<string, JsonSchema> defs)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| defs | IReadOnlyDictionary\<string, JsonSchema\> | The schema definition map. |


#### Returns

The builder.

### Definitions(this JsonSchemaBuilder builder, params (string name, JsonSchema schema)[] defs)

Add a `definitions` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Definitions(this JsonSchemaBuilder builder, params (string name, JsonSchema schema)[] defs)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| defs | params (string name, JsonSchema schema)[] | The schema definition map. |


#### Returns

The builder.

### Defs(this JsonSchemaBuilder builder, IReadOnlyDictionary\<string, JsonSchema\> defs)

Add a `$defs` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Defs(this JsonSchemaBuilder builder, IReadOnlyDictionary<string, JsonSchema> defs)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| defs | IReadOnlyDictionary\<string, JsonSchema\> | The schema definition map. |


#### Returns

The builder.

### Defs(this JsonSchemaBuilder builder, params (string name, JsonSchema schema)[] defs)

Add a `$defs` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Defs(this JsonSchemaBuilder builder, params (string name, JsonSchema schema)[] defs)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| defs | params (string name, JsonSchema schema)[] | The schema definition map. |


#### Returns

The builder.

### Dependencies(this JsonSchemaBuilder builder, IReadOnlyDictionary\<string, SchemaOrPropertyList\> deps)

Add a `dependencies` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Dependencies(this JsonSchemaBuilder builder, IReadOnlyDictionary<string, SchemaOrPropertyList> deps)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| deps | IReadOnlyDictionary\<string, SchemaOrPropertyList\> | The dependencies. |


#### Returns

The builder.

### Dependencies(this JsonSchemaBuilder builder, params (string name, SchemaOrPropertyList dep)[] deps)

Add a `dependencies` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Dependencies(this JsonSchemaBuilder builder, params (string name, SchemaOrPropertyList dep)[] deps)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| deps | params (string name, SchemaOrPropertyList dep)[] | The dependencies. |


#### Returns

The builder.

### DependentRequired(this JsonSchemaBuilder builder, IReadOnlyDictionary\<string, IReadOnlyList\<string\>\> deps)

Add a `dependentRequired` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder DependentRequired(this JsonSchemaBuilder builder, IReadOnlyDictionary<string, IReadOnlyList<string>> deps)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| deps | IReadOnlyDictionary\<string, IReadOnlyList\<string\>\> | The dependencies. |


#### Returns

The builder.

### DependentRequired(this JsonSchemaBuilder builder, params (string name, IEnumerable\<string\> properties)[] deps)

Add a `dependentRequired` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder DependentRequired(this JsonSchemaBuilder builder, params (string name, IEnumerable<string> properties)[] deps)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| deps | params (string name, IEnumerable\<string\> properties)[] | The dependencies. |


#### Returns

The builder.

### DependentSchemas(this JsonSchemaBuilder builder, IReadOnlyDictionary\<string, JsonSchema\> deps)

Add a `dependentSchemas` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder DependentSchemas(this JsonSchemaBuilder builder, IReadOnlyDictionary<string, JsonSchema> deps)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| deps | IReadOnlyDictionary\<string, JsonSchema\> | The dependencies. |


#### Returns

The builder.

### DependentSchemas(this JsonSchemaBuilder builder, params (string name, JsonSchema schema)[] deps)

Add a `dependentSchemas` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder DependentSchemas(this JsonSchemaBuilder builder, params (string name, JsonSchema schema)[] deps)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| deps | params (string name, JsonSchema schema)[] | The dependencies. |


#### Returns

The builder.

### Deprecated(this JsonSchemaBuilder builder, bool deprecated)

Add a `deprecated` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Deprecated(this JsonSchemaBuilder builder, bool deprecated)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| deprecated | bool | Whether the schema is deprecated. |


#### Returns

The builder.

### Description(this JsonSchemaBuilder builder, string description)

Add a `description` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Description(this JsonSchemaBuilder builder, string description)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| description | string | The description. |


#### Returns

The builder.

### DynamicAnchor(this JsonSchemaBuilder builder, string reference)

Add an `$dynamicAnchor` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder DynamicAnchor(this JsonSchemaBuilder builder, string reference)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| reference | string | The anchor reference. |


#### Returns

The builder.

### DynamicRef(this JsonSchemaBuilder builder, Uri reference)

Add a `$dynamicRef` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder DynamicRef(this JsonSchemaBuilder builder, Uri reference)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| reference | Uri | The URI reference. |


#### Returns

The builder.

### DynamicRef(this JsonSchemaBuilder builder, string reference)

Add a `$dynamicRef` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder DynamicRef(this JsonSchemaBuilder builder, string reference)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| reference | string | The URI reference. |


#### Returns

The builder.

### Else(this JsonSchemaBuilder builder, JsonSchema schema)

Add an `else` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Else(this JsonSchemaBuilder builder, JsonSchema schema)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| schema | JsonSchema | The schema for `else`. |


#### Returns

The builder.

### Enum(this JsonSchemaBuilder builder, IEnumerable\<JsonNode\> elements)

Add an `enum` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Enum(this JsonSchemaBuilder builder, IEnumerable<JsonNode> elements)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| elements | IEnumerable\<JsonNode\> | The values for the enum. |


#### Returns

The builder.

### Enum(this JsonSchemaBuilder builder, params JsonNode[] elements)

Add an `enum` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Enum(this JsonSchemaBuilder builder, params JsonNode[] elements)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| elements | params JsonNode[] | The values for the enum. |


#### Returns

The builder.

### Enum(this JsonSchemaBuilder builder, IEnumerable\<string\> elements)

Add an `enum` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Enum(this JsonSchemaBuilder builder, IEnumerable<string> elements)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| elements | IEnumerable\<string\> | The values for the enum. |


#### Returns

The builder.

#### Remarks

This overload is provided as a convenience as string-only enums are most common.

### Evaluate(this JsonSchemaBuilder builder, JsonNode root, EvaluationOptions options)

Convenience method that builds and evaluates with a single call.

#### Declaration

```c#
public static EvaluationResults Evaluate(this JsonSchemaBuilder builder, JsonNode root, EvaluationOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| root | JsonNode | The root instance. |
| options | EvaluationOptions | The options to use for this evaluation. |


#### Returns

A **Json.Schema.EvaluationResults** that provides the outcome of the evaluation.

### Examples(this JsonSchemaBuilder builder, IEnumerable\<JsonNode\> elements)

Add an `examples` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Examples(this JsonSchemaBuilder builder, IEnumerable<JsonNode> elements)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| elements | IEnumerable\<JsonNode\> | The example values. |


#### Returns

The builder.

### Examples(this JsonSchemaBuilder builder, params JsonNode[] elements)

Add an `examples` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Examples(this JsonSchemaBuilder builder, params JsonNode[] elements)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| elements | params JsonNode[] | The example values. |


#### Returns

The builder.

### ExclusiveMaximum(this JsonSchemaBuilder builder, decimal max)

Add an `exclusiveMaximum` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder ExclusiveMaximum(this JsonSchemaBuilder builder, decimal max)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| max | decimal | The max value. |


#### Returns

The builder.

### ExclusiveMinimum(this JsonSchemaBuilder builder, decimal min)

Add an `exclusiveMinimum` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder ExclusiveMinimum(this JsonSchemaBuilder builder, decimal min)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| min | decimal | The min value. |


#### Returns

The builder.

### Format(this JsonSchemaBuilder builder, string format)

Add a `format` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Format(this JsonSchemaBuilder builder, string format)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| format | string | The format. |


#### Returns

The builder.

### Format(this JsonSchemaBuilder builder, Format format)

Add a `format` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Format(this JsonSchemaBuilder builder, Format format)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| format | Format | The format. |


#### Returns

The builder.

### Id(this JsonSchemaBuilder builder, Uri id)

Add an `$id` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Id(this JsonSchemaBuilder builder, Uri id)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| id | Uri | The ID. |


#### Returns

The builder.

### Id(this JsonSchemaBuilder builder, string id)

Add an `$id` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Id(this JsonSchemaBuilder builder, string id)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| id | string | The ID. |


#### Returns

The builder.

### If(this JsonSchemaBuilder builder, JsonSchema schema)

Add an `if` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder If(this JsonSchemaBuilder builder, JsonSchema schema)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| schema | JsonSchema | The schema for `if`. |


#### Returns

The builder.

### Items(this JsonSchemaBuilder builder, JsonSchema schema)

Add a single-schema `items` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Items(this JsonSchemaBuilder builder, JsonSchema schema)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| schema | JsonSchema | The schema for `items`. |


#### Returns

The builder.

### Items(this JsonSchemaBuilder builder, IEnumerable\<JsonSchema\> schemas)

Add a schema-array `items` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Items(this JsonSchemaBuilder builder, IEnumerable<JsonSchema> schemas)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| schemas | IEnumerable\<JsonSchema\> | The schemas for `items`. |


#### Returns

The builder.

### MaxContains(this JsonSchemaBuilder builder, uint value)

Add a `maxContains` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder MaxContains(this JsonSchemaBuilder builder, uint value)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| value | uint | The max number of expected matches. |


#### Returns

The builder.

### Maximum(this JsonSchemaBuilder builder, decimal value)

Add a `maximum` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Maximum(this JsonSchemaBuilder builder, decimal value)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| value | decimal | The max value. |


#### Returns

The builder.

### MaxItems(this JsonSchemaBuilder builder, uint value)

Add a `maxItems` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder MaxItems(this JsonSchemaBuilder builder, uint value)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| value | uint | The max number of expected items. |


#### Returns

The builder.

### MaxLength(this JsonSchemaBuilder builder, uint value)

Add a `maxLength` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder MaxLength(this JsonSchemaBuilder builder, uint value)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| value | uint | The max string length. |


#### Returns

The builder.

### MaxProperties(this JsonSchemaBuilder builder, uint value)

Add a `maxProperties` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder MaxProperties(this JsonSchemaBuilder builder, uint value)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| value | uint | The max number of expected properties. |


#### Returns

The builder.

### MinContains(this JsonSchemaBuilder builder, uint value)

Add a `minContains` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder MinContains(this JsonSchemaBuilder builder, uint value)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| value | uint | The min number of expected matches. |


#### Returns

The builder.

### Minimum(this JsonSchemaBuilder builder, decimal value)

Add a `minimum` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Minimum(this JsonSchemaBuilder builder, decimal value)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| value | decimal | The min value. |


#### Returns

The builder.

### MinItems(this JsonSchemaBuilder builder, uint value)

Add a `minItems` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder MinItems(this JsonSchemaBuilder builder, uint value)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| value | uint | The min number of expected items. |


#### Returns

The builder.

### MinLength(this JsonSchemaBuilder builder, uint value)

Add a `minLength` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder MinLength(this JsonSchemaBuilder builder, uint value)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| value | uint | The min string length. |


#### Returns

The builder.

### MinProperties(this JsonSchemaBuilder builder, uint value)

Add a `minProperties` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder MinProperties(this JsonSchemaBuilder builder, uint value)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| value | uint | The min number of expected properties. |


#### Returns

The builder.

### MultipleOf(this JsonSchemaBuilder builder, decimal value)

Add a `multipleOf` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder MultipleOf(this JsonSchemaBuilder builder, decimal value)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| value | decimal | The divisor. |


#### Returns

The builder.

### Not(this JsonSchemaBuilder builder, JsonSchema schema)

Add a `not` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Not(this JsonSchemaBuilder builder, JsonSchema schema)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| schema | JsonSchema | The schema for `not`. |


#### Returns

The builder.

### OneOf(this JsonSchemaBuilder builder, params JsonSchema[] schemas)

Add a `oneOf` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder OneOf(this JsonSchemaBuilder builder, params JsonSchema[] schemas)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| schemas | params JsonSchema[] | The schema for `oneOf`. |


#### Returns

The builder.

### OneOf(this JsonSchemaBuilder builder, IEnumerable\<JsonSchema\> schemas)

Add a `oneOf` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder OneOf(this JsonSchemaBuilder builder, IEnumerable<JsonSchema> schemas)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| schemas | IEnumerable\<JsonSchema\> | The schemas for `oneOf`. |


#### Returns

The builder.

### Pattern(this JsonSchemaBuilder builder, Regex pattern)

Add a `pattern` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Pattern(this JsonSchemaBuilder builder, Regex pattern)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| pattern | Regex | The pattern to match. |


#### Returns

The builder.

### Pattern(this JsonSchemaBuilder builder, string pattern)

Add a `pattern` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Pattern(this JsonSchemaBuilder builder, string pattern)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| pattern | string | The pattern to match. |


#### Returns

The builder.

### PatternProperties(this JsonSchemaBuilder builder, IReadOnlyDictionary\<Regex, JsonSchema\> props)

Add a `patternProperties` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder PatternProperties(this JsonSchemaBuilder builder, IReadOnlyDictionary<Regex, JsonSchema> props)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| props | IReadOnlyDictionary\<Regex, JsonSchema\> | The property schemas. |


#### Returns

The builder.

### PatternProperties(this JsonSchemaBuilder builder, params (Regex pattern, JsonSchema schema)[] props)

Add a `patternProperties` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder PatternProperties(this JsonSchemaBuilder builder, params (Regex pattern, JsonSchema schema)[] props)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| props | params (Regex pattern, JsonSchema schema)[] | The property schemas. |


#### Returns

The builder.

### PatternProperties(this JsonSchemaBuilder builder, IReadOnlyDictionary\<string, JsonSchema\> props)

Add a `patternProperties` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder PatternProperties(this JsonSchemaBuilder builder, IReadOnlyDictionary<string, JsonSchema> props)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| props | IReadOnlyDictionary\<string, JsonSchema\> | The property schemas. |


#### Returns

The builder.

### PatternProperties(this JsonSchemaBuilder builder, params (string pattern, JsonSchema schema)[] props)

Add a `patternProperties` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder PatternProperties(this JsonSchemaBuilder builder, params (string pattern, JsonSchema schema)[] props)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| props | params (string pattern, JsonSchema schema)[] | The property schemas. |


#### Returns

The builder.

### PrefixItems(this JsonSchemaBuilder builder, params JsonSchema[] schemas)

Add a `prefixItems` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder PrefixItems(this JsonSchemaBuilder builder, params JsonSchema[] schemas)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| schemas | params JsonSchema[] | The schemas for `prefixItems`. |


#### Returns

The builder.

### PrefixItems(this JsonSchemaBuilder builder, IEnumerable\<JsonSchema\> schemas)

Add a `prefixItems` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder PrefixItems(this JsonSchemaBuilder builder, IEnumerable<JsonSchema> schemas)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| schemas | IEnumerable\<JsonSchema\> | The schemas for `prefixItems`. |


#### Returns

The builder.

### Properties(this JsonSchemaBuilder builder, IReadOnlyDictionary\<string, JsonSchema\> props)

Add a `properties` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Properties(this JsonSchemaBuilder builder, IReadOnlyDictionary<string, JsonSchema> props)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| props | IReadOnlyDictionary\<string, JsonSchema\> | The property schemas. |


#### Returns

The builder.

### Properties(this JsonSchemaBuilder builder, params (string name, JsonSchema schema)[] props)

Add a `properties` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Properties(this JsonSchemaBuilder builder, params (string name, JsonSchema schema)[] props)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| props | params (string name, JsonSchema schema)[] | The property schemas. |


#### Returns

The builder.

### PropertyDependencies(this JsonSchemaBuilder builder, IReadOnlyDictionary\<string, PropertyDependency\> dependencies)

Adds a `propertyDependencies` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder PropertyDependencies(this JsonSchemaBuilder builder, IReadOnlyDictionary<string, PropertyDependency> dependencies)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| dependencies | IReadOnlyDictionary\<string, PropertyDependency\> | The property dependency schemas. |


#### Returns

The builder.

### PropertyDependencies(this JsonSchemaBuilder builder, params (string property, PropertyDependency dependency)[] dependencies)

Adds a `propertyDependencies` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder PropertyDependencies(this JsonSchemaBuilder builder, params (string property, PropertyDependency dependency)[] dependencies)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| dependencies | params (string property, PropertyDependency dependency)[] | The property dependency schemas. |


#### Returns

The builder.

### PropertyNames(this JsonSchemaBuilder builder, JsonSchema schema)

Add a `propertyNames` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder PropertyNames(this JsonSchemaBuilder builder, JsonSchema schema)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| schema | JsonSchema | The schema for `propertyNames`. |


#### Returns

The builder.

### ReadOnly(this JsonSchemaBuilder builder, bool value)

Add a `readOnly` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder ReadOnly(this JsonSchemaBuilder builder, bool value)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| value | bool | Whether the instance is read-only. |


#### Returns

The builder.

### RecursiveAnchor(this JsonSchemaBuilder builder, bool value)

Add a `$recursiveAnchor` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder RecursiveAnchor(this JsonSchemaBuilder builder, bool value)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| value | bool | The value. |


#### Returns

The builder.

#### Remarks

Per Draft 2019-09, the value must always be `true`.  This is implied for this method.

### RecursiveRef(this JsonSchemaBuilder builder, Uri reference)

Add a `$recursiveRef` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder RecursiveRef(this JsonSchemaBuilder builder, Uri reference)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| reference | Uri | The URI reference. |


#### Returns

The builder.

### RecursiveRef(this JsonSchemaBuilder builder, string reference)

Add a `$recursiveRef` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder RecursiveRef(this JsonSchemaBuilder builder, string reference)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| reference | string | The URI reference. |


#### Returns

The builder.

### Ref(this JsonSchemaBuilder builder, Uri reference)

Add a `$ref` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Ref(this JsonSchemaBuilder builder, Uri reference)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| reference | Uri | The URI reference. |


#### Returns

The builder.

### Ref(this JsonSchemaBuilder builder, string reference)

Add a `$ref` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Ref(this JsonSchemaBuilder builder, string reference)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| reference | string | The URI reference. |


#### Returns

The builder.

### Required(this JsonSchemaBuilder builder, IEnumerable\<string\> properties)

Add a `required` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Required(this JsonSchemaBuilder builder, IEnumerable<string> properties)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| properties | IEnumerable\<string\> | The required property collections. |


#### Returns

The builder.

### Required(this JsonSchemaBuilder builder, params string[] properties)

Add a `required` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Required(this JsonSchemaBuilder builder, params string[] properties)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| properties | params string[] | The required property collections. |


#### Returns

The builder.

### Schema(this JsonSchemaBuilder builder, Uri uri)

Add a `$schema` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Schema(this JsonSchemaBuilder builder, Uri uri)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| uri | Uri | The uri of the meta-schema. |


#### Returns

The builder.

### Schema(this JsonSchemaBuilder builder, string uri)

Add a `$schema` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Schema(this JsonSchemaBuilder builder, string uri)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| uri | string | The uri of the meta-schema. |


#### Returns

The builder.

### Then(this JsonSchemaBuilder builder, JsonSchema schema)

Add a `then` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Then(this JsonSchemaBuilder builder, JsonSchema schema)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| schema | JsonSchema | The schema for `then`. |


#### Returns

The builder.

### Title(this JsonSchemaBuilder builder, string title)

Add a `title` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Title(this JsonSchemaBuilder builder, string title)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| title | string | The title. |


#### Returns

The builder.

### Type(this JsonSchemaBuilder builder, SchemaValueType type)

Add a `type` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Type(this JsonSchemaBuilder builder, SchemaValueType type)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| type | SchemaValueType | The type.  Can be combined with the bit-wise OR operator `\|`. |


#### Returns

The builder.

### Type(this JsonSchemaBuilder builder, params SchemaValueType[] types)

Add a `type` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Type(this JsonSchemaBuilder builder, params SchemaValueType[] types)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| types | params SchemaValueType[] | The types. |


#### Returns

The builder.

### Type(this JsonSchemaBuilder builder, IEnumerable\<SchemaValueType\> types)

Add a `type` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Type(this JsonSchemaBuilder builder, IEnumerable<SchemaValueType> types)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| types | IEnumerable\<SchemaValueType\> | The types. |


#### Returns

The builder.

### UnevaluatedItems(this JsonSchemaBuilder builder, JsonSchema schema)

Add an `unevaluatedItems` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder UnevaluatedItems(this JsonSchemaBuilder builder, JsonSchema schema)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| schema | JsonSchema | The schema for `unevaluatedItems`. |


#### Returns

The builder.

### UnevaluatedProperties(this JsonSchemaBuilder builder, JsonSchema schema)

Add an `unevaluatedProperties` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder UnevaluatedProperties(this JsonSchemaBuilder builder, JsonSchema schema)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| schema | JsonSchema | The schema for `unevaluatedProperties`. |


#### Returns

The builder.

### UniqueItems(this JsonSchemaBuilder builder, bool value)

Add a `uniqueItems` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder UniqueItems(this JsonSchemaBuilder builder, bool value)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| value | bool | Whether to expect a unique item set. |


#### Returns

The builder.

### Unrecognized(this JsonSchemaBuilder builder, string name, JsonNode value)

Adds a keyword that's not recognized by any vocabulary - extra data - to the schema.

#### Declaration

```c#
public static JsonSchemaBuilder Unrecognized(this JsonSchemaBuilder builder, string name, JsonNode value)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| name | string | The keyword name. |
| value | JsonNode | The value. |


#### Returns

The builder.

### Validate(this JsonSchemaBuilder builder, JsonNode root, EvaluationOptions options)

Convenience method that builds and evaluates with a single call.

#### Declaration

```c#
public static EvaluationResults Validate(this JsonSchemaBuilder builder, JsonNode root, EvaluationOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| root | JsonNode | The root instance. |
| options | EvaluationOptions | The options to use for this evaluation. |


#### Returns

A **Json.Schema.EvaluationResults** that provides the outcome of the evaluation.

### Vocabulary(this JsonSchemaBuilder builder, params (Uri id, bool required)[] vocabs)

Add an `$vocabulary` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Vocabulary(this JsonSchemaBuilder builder, params (Uri id, bool required)[] vocabs)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| vocabs | params (Uri id, bool required)[] | The vocabulary callouts. |


#### Returns

The builder.

### Vocabulary(this JsonSchemaBuilder builder, params (string id, bool required)[] vocabs)

Add an `$vocabulary` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Vocabulary(this JsonSchemaBuilder builder, params (string id, bool required)[] vocabs)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| vocabs | params (string id, bool required)[] | The vocabulary callouts. |


#### Returns

The builder.

### Vocabulary(this JsonSchemaBuilder builder, IReadOnlyDictionary\<Uri, bool\> vocabs)

Add an `$vocabulary` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Vocabulary(this JsonSchemaBuilder builder, IReadOnlyDictionary<Uri, bool> vocabs)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| vocabs | IReadOnlyDictionary\<Uri, bool\> | The vocabulary callouts. |


#### Returns

The builder.

### Vocabulary(this JsonSchemaBuilder builder, IReadOnlyDictionary\<string, bool\> vocabs)

Add an `$vocabulary` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder Vocabulary(this JsonSchemaBuilder builder, IReadOnlyDictionary<string, bool> vocabs)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| vocabs | IReadOnlyDictionary\<string, bool\> | The vocabulary callouts. |


#### Returns

The builder.

### WriteOnly(this JsonSchemaBuilder builder, bool value)

Add a `writeOnly` keyword.

#### Declaration

```c#
public static JsonSchemaBuilder WriteOnly(this JsonSchemaBuilder builder, bool value)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| value | bool | Whether the instance is write-only. |


#### Returns

The builder.

