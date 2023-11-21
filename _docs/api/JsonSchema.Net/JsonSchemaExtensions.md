---
layout: "page"
title: "JsonSchemaExtensions Class"
bookmark: "JsonSchemaExtensions"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.086"
---
**Namespace:** Json.Schema

**Inheritance:**
`JsonSchemaExtensions`
 🡒 
`object`



## Methods

### Bundle(this JsonSchema jsonSchema, EvaluationOptions options)

Generates a bundle schema that contains all of the externally referenced schemas
in a single document.

#### Declaration

```c#
public static JsonSchema Bundle(this JsonSchema jsonSchema, EvaluationOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| jsonSchema | JsonSchema | The root schema. |
| options | EvaluationOptions | Options (used for the schema registry) |


#### Returns

A JSON Schema with all referenced schemas.

### Evaluate(this JsonSchema jsonSchema, JsonDocument jsonDocument, EvaluationOptions options)

Extends **Json.Schema.JsonSchema.Evaluate(System.Text.Json.Nodes.JsonNode,Json.Schema.EvaluationOptions)** to take **System.Text.Json.JsonDocument**.

#### Declaration

```c#
public static EvaluationResults Evaluate(this JsonSchema jsonSchema, JsonDocument jsonDocument, EvaluationOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| jsonSchema | JsonSchema | The schema. |
| jsonDocument | JsonDocument | Instance to be evaluated. |
| options | EvaluationOptions | The options to use for this evaluation. |


#### Returns

A **Json.Schema.EvaluationResults** that provides the outcome of the evaluation.

### Evaluate(this JsonSchema jsonSchema, JsonElement jsonElement, EvaluationOptions options)

Extends **Json.Schema.JsonSchema.Evaluate(System.Text.Json.Nodes.JsonNode,Json.Schema.EvaluationOptions)** to take **System.Text.Json.JsonElement**.

#### Declaration

```c#
public static EvaluationResults Evaluate(this JsonSchema jsonSchema, JsonElement jsonElement, EvaluationOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| jsonSchema | JsonSchema | The schema. |
| jsonElement | JsonElement | Instance to be evaluated. |
| options | EvaluationOptions | The options to use for this evaluation. |


#### Returns

A **Json.Schema.EvaluationResults** that provides the outcome of the evaluation.

### GetAdditionalItems(this JsonSchema schema)

Gets the schema for `additionalItems` if the keyword exists.

#### Declaration

```c#
public static JsonSchema GetAdditionalItems(this JsonSchema schema)
```


#### Returns



### GetAdditionalProperties(this JsonSchema schema)

Gets the schema for `additionalProperties` if the keyword exists.

#### Declaration

```c#
public static JsonSchema GetAdditionalProperties(this JsonSchema schema)
```


#### Returns



### GetAllOf(this JsonSchema schema)

Gets the schemas in `allOf` if the keyword exists.

#### Declaration

```c#
public static IReadOnlyCollection<JsonSchema> GetAllOf(this JsonSchema schema)
```


#### Returns



### GetAnchor(this JsonSchema schema)

Gets the value of `$anchor` if the keyword exists.

#### Declaration

```c#
public static string GetAnchor(this JsonSchema schema)
```


#### Returns



### GetAnyOf(this JsonSchema schema)

Gets the schemas in `anyOf` if the keyword exists.

#### Declaration

```c#
public static IReadOnlyCollection<JsonSchema> GetAnyOf(this JsonSchema schema)
```


#### Returns



### GetComment(this JsonSchema schema)

Gets the value of `$comment` if the keyword exists.

#### Declaration

```c#
public static string GetComment(this JsonSchema schema)
```


#### Returns



### GetConst(this JsonSchema schema)

Gets the value of `const` if the keyword exists.

#### Declaration

```c#
public static JsonNode GetConst(this JsonSchema schema)
```


#### Returns



### GetContains(this JsonSchema schema)

Gets the schema for `contains` if the keyword exists.

#### Declaration

```c#
public static JsonSchema GetContains(this JsonSchema schema)
```


#### Returns



### GetContentEncoding(this JsonSchema schema)

Gets the value of `contentEncoding` if the keyword exists.

#### Declaration

```c#
public static string GetContentEncoding(this JsonSchema schema)
```


#### Returns



### GetContentMediaType(this JsonSchema schema)

Gets the value of `contentMediaType` if the keyword exists.

#### Declaration

```c#
public static string GetContentMediaType(this JsonSchema schema)
```


#### Returns



### GetContentSchema(this JsonSchema schema)

Gets the schema for `contentSchema` if the keyword exists.

#### Declaration

```c#
public static JsonSchema GetContentSchema(this JsonSchema schema)
```


#### Returns



### GetDefault(this JsonSchema schema)

Gets the value of `default` if the keyword exists.

#### Declaration

```c#
public static JsonNode GetDefault(this JsonSchema schema)
```


#### Returns



### GetDefinitions(this JsonSchema schema)

Gets the schemas in `definitions` if the keyword exists.

#### Declaration

```c#
public static IReadOnlyDictionary<string, JsonSchema> GetDefinitions(this JsonSchema schema)
```


#### Returns



### GetDefs(this JsonSchema schema)

Gets the schemas in `$defs` if the keyword exists.

#### Declaration

```c#
public static IReadOnlyDictionary<string, JsonSchema> GetDefs(this JsonSchema schema)
```


#### Returns



### GetDependencies(this JsonSchema schema)

Gets the requirements in `dependencies` if the keyword exists.

#### Declaration

```c#
public static IReadOnlyDictionary<string, SchemaOrPropertyList> GetDependencies(this JsonSchema schema)
```


#### Returns



### GetDependentRequired(this JsonSchema schema)

Gets the requirements in `dependentRequired` if the keyword exists.

#### Declaration

```c#
public static IReadOnlyDictionary<string, IReadOnlyList<string>> GetDependentRequired(this JsonSchema schema)
```


#### Returns



### GetDependentSchemas(this JsonSchema schema)

Gets the schemas in `dependentSchemas` if the keyword exists.

#### Declaration

```c#
public static IReadOnlyDictionary<string, JsonSchema> GetDependentSchemas(this JsonSchema schema)
```


#### Returns



### GetDeprecated(this JsonSchema schema)

Gets the value of `deprecated` if the keyword exists.

#### Declaration

```c#
public static bool? GetDeprecated(this JsonSchema schema)
```


#### Returns



### GetDescription(this JsonSchema schema)

Gets the value of `description` if the keyword exists.

#### Declaration

```c#
public static string GetDescription(this JsonSchema schema)
```


#### Returns



### GetDynamicAnchor(this JsonSchema schema)

Gets the value of `$dynamicAnchor` if the keyword exists.

#### Declaration

```c#
public static string GetDynamicAnchor(this JsonSchema schema)
```


#### Returns



### GetDynamicRef(this JsonSchema schema)

Gets the value of `$dynamicRef` if the keyword exists.

#### Declaration

```c#
public static Uri GetDynamicRef(this JsonSchema schema)
```


#### Returns



### GetElse(this JsonSchema schema)

Gets the schema for `else` if the keyword exists.

#### Declaration

```c#
public static JsonSchema GetElse(this JsonSchema schema)
```


#### Returns



### GetEnum(this JsonSchema schema)

Gets the values in `enum` if the keyword exists.

#### Declaration

```c#
public static IReadOnlyCollection<JsonNode> GetEnum(this JsonSchema schema)
```


#### Returns



### GetExamples(this JsonSchema schema)

Gets the values in `examples` if the keyword exists.

#### Declaration

```c#
public static IReadOnlyCollection<JsonNode> GetExamples(this JsonSchema schema)
```


#### Returns



### GetExclusiveMaximum(this JsonSchema schema)

Gets the value of `exclusiveMaximum` if the keyword exists.

#### Declaration

```c#
public static decimal? GetExclusiveMaximum(this JsonSchema schema)
```


#### Returns



### GetExclusiveMinimum(this JsonSchema schema)

Gets the value of `exclusiveMinimum` if the keyword exists.

#### Declaration

```c#
public static decimal? GetExclusiveMinimum(this JsonSchema schema)
```


#### Returns



### GetFormat(this JsonSchema schema)

Gets the value of `format` if the keyword exists.

#### Declaration

```c#
public static Format GetFormat(this JsonSchema schema)
```


#### Returns



### GetId(this JsonSchema schema)

Gets the value of `$id` if the keyword exists.

#### Declaration

```c#
public static Uri GetId(this JsonSchema schema)
```


#### Returns



### GetIf(this JsonSchema schema)

Gets the schema for `if` if the keyword exists.

#### Declaration

```c#
public static JsonSchema GetIf(this JsonSchema schema)
```


#### Returns



### GetItems(this JsonSchema schema)

Gets the schema for `items` if the keyword exists and is a single schema.

#### Declaration

```c#
public static JsonSchema GetItems(this JsonSchema schema)
```


#### Returns



### GetItemsArrayForm(this JsonSchema schema)

Gets the schemas in `items` if the keyword exists and is an array of schemas.

#### Declaration

```c#
public static IReadOnlyCollection<JsonSchema> GetItemsArrayForm(this JsonSchema schema)
```


#### Returns



### GetJsonType(this JsonSchema schema)

Gets the value of `type` if the keyword exists.

#### Declaration

```c#
public static SchemaValueType? GetJsonType(this JsonSchema schema)
```


#### Returns



### GetMaxContains(this JsonSchema schema)

Gets the value of `maxContains` if the keyword exists.

#### Declaration

```c#
public static uint? GetMaxContains(this JsonSchema schema)
```


#### Returns



### GetMaximum(this JsonSchema schema)

Gets the value of `maximum` if the keyword exists.

#### Declaration

```c#
public static decimal? GetMaximum(this JsonSchema schema)
```


#### Returns



### GetMaxItems(this JsonSchema schema)

Gets the value of `maxItems` if the keyword exists.

#### Declaration

```c#
public static uint? GetMaxItems(this JsonSchema schema)
```


#### Returns



### GetMaxLength(this JsonSchema schema)

Gets the value of `maxLength` if the keyword exists.

#### Declaration

```c#
public static uint? GetMaxLength(this JsonSchema schema)
```


#### Returns



### GetMaxProperties(this JsonSchema schema)

Gets the value of `maxProperties` if the keyword exists.

#### Declaration

```c#
public static uint? GetMaxProperties(this JsonSchema schema)
```


#### Returns



### GetMinContains(this JsonSchema schema)

Gets the value of `minContains` if the keyword exists.

#### Declaration

```c#
public static uint? GetMinContains(this JsonSchema schema)
```


#### Returns



### GetMinimum(this JsonSchema schema)

Gets the value of `minimum` if the keyword exists.

#### Declaration

```c#
public static decimal? GetMinimum(this JsonSchema schema)
```


#### Returns



### GetMinItems(this JsonSchema schema)

Gets the value of `minItems` if the keyword exists.

#### Declaration

```c#
public static uint? GetMinItems(this JsonSchema schema)
```


#### Returns



### GetMinLength(this JsonSchema schema)

Gets the value of `minLength` if the keyword exists.

#### Declaration

```c#
public static uint? GetMinLength(this JsonSchema schema)
```


#### Returns



### GetMinProperties(this JsonSchema schema)

Gets the value of `minProperties` if the keyword exists.

#### Declaration

```c#
public static uint? GetMinProperties(this JsonSchema schema)
```


#### Returns



### GetMultipleOf(this JsonSchema schema)

Gets the value of `multipleOf` if the keyword exists.

#### Declaration

```c#
public static decimal? GetMultipleOf(this JsonSchema schema)
```


#### Returns



### GetNot(this JsonSchema schema)

Gets the schema for `not` if the keyword exists.

#### Declaration

```c#
public static JsonSchema GetNot(this JsonSchema schema)
```


#### Returns



### GetOneOf(this JsonSchema schema)

Gets the schemas in `oneOf` if the keyword exists.

#### Declaration

```c#
public static IReadOnlyCollection<JsonSchema> GetOneOf(this JsonSchema schema)
```


#### Returns



### GetPattern(this JsonSchema schema)

Gets the value of `pattern` if the keyword exists.

#### Declaration

```c#
public static Regex GetPattern(this JsonSchema schema)
```


#### Returns



### GetPatternProperties(this JsonSchema schema)

Gets the schemas in `patternProperties` if the keyword exists.

#### Declaration

```c#
public static IReadOnlyDictionary<Regex, JsonSchema> GetPatternProperties(this JsonSchema schema)
```


#### Returns



### GetPrefixItems(this JsonSchema schema)

Gets the schemas in `prefixItems` if the keyword exists.

#### Declaration

```c#
public static IReadOnlyCollection<JsonSchema> GetPrefixItems(this JsonSchema schema)
```


#### Returns



### GetProperties(this JsonSchema schema)

Gets the schemas in `properties` if the keyword exists.

#### Declaration

```c#
public static IReadOnlyDictionary<string, JsonSchema> GetProperties(this JsonSchema schema)
```


#### Returns



### GetPropertyDependencies(this JsonSchema schema)

Gets the schemas for `propertyDependencies` if the keyword exists.

#### Declaration

```c#
public static IReadOnlyDictionary<string, PropertyDependency> GetPropertyDependencies(this JsonSchema schema)
```


#### Returns



### GetPropertyNames(this JsonSchema schema)

Gets the schema for `propertyNames` if the keyword exists.

#### Declaration

```c#
public static JsonSchema GetPropertyNames(this JsonSchema schema)
```


#### Returns



### GetReadOnly(this JsonSchema schema)

Gets the value of `readOnly` if the keyword exists.

#### Declaration

```c#
public static bool? GetReadOnly(this JsonSchema schema)
```


#### Returns



### GetRecursiveAnchor(this JsonSchema schema)

Gets the value of `$recursiveAnchor` if the keyword exists.

#### Declaration

```c#
public static bool? GetRecursiveAnchor(this JsonSchema schema)
```


#### Returns



### GetRecursiveRef(this JsonSchema schema)

Gets the value of `$recursiveRef` if the keyword exists.

#### Declaration

```c#
public static Uri GetRecursiveRef(this JsonSchema schema)
```


#### Returns



### GetRef(this JsonSchema schema)

Gets the value of `$ref` if the keyword exists.

#### Declaration

```c#
public static Uri GetRef(this JsonSchema schema)
```


#### Returns



### GetRequired(this JsonSchema schema)

Gets the values in `required` if the keyword exists.

#### Declaration

```c#
public static IReadOnlyList<string> GetRequired(this JsonSchema schema)
```


#### Returns



### GetSchema(this JsonSchema schema)

Gets the value of `$schema` if the keyword exists.

#### Declaration

```c#
public static Uri GetSchema(this JsonSchema schema)
```


#### Returns



### GetThen(this JsonSchema schema)

Gets the schema for `then` if the keyword exists.

#### Declaration

```c#
public static JsonSchema GetThen(this JsonSchema schema)
```


#### Returns



### GetTitle(this JsonSchema schema)

Gets the value of `title` if the keyword exists.

#### Declaration

```c#
public static string GetTitle(this JsonSchema schema)
```


#### Returns



### GetUnevaluatedItems(this JsonSchema schema)

Gets the schema for `unevaluatedItems` if the keyword exists.

#### Declaration

```c#
public static JsonSchema GetUnevaluatedItems(this JsonSchema schema)
```


#### Returns



### GetUnevaluatedProperties(this JsonSchema schema)

Gets the schema for `unevaluatedProperties` if the keyword exists.

#### Declaration

```c#
public static JsonSchema GetUnevaluatedProperties(this JsonSchema schema)
```


#### Returns



### GetUniqueItems(this JsonSchema schema)

Gets the value of `uniqueItems` if the keyword exists.

#### Declaration

```c#
public static bool? GetUniqueItems(this JsonSchema schema)
```


#### Returns



### GetVocabulary(this JsonSchema schema)

Gets the values in `$vocabulary` if the keyword exists.

#### Declaration

```c#
public static IReadOnlyDictionary<Uri, bool> GetVocabulary(this JsonSchema schema)
```


#### Returns



### GetWriteOnly(this JsonSchema schema)

Gets the value of `writeOnly` if the keyword exists.

#### Declaration

```c#
public static bool? GetWriteOnly(this JsonSchema schema)
```


#### Returns



### Validate(this JsonSchema jsonSchema, JsonNode jsonNode, EvaluationOptions options)

Extends **Json.Schema.JsonSchema.Evaluate(System.Text.Json.Nodes.JsonNode,Json.Schema.EvaluationOptions)** to take **System.Text.Json.JsonDocument**.

#### Declaration

```c#
public static EvaluationResults Validate(this JsonSchema jsonSchema, JsonNode jsonNode, EvaluationOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| jsonSchema | JsonSchema | The schema. |
| jsonNode | JsonNode | Instance to be evaluated. |
| options | EvaluationOptions | The options to use for this evaluation. |


#### Returns

A **Json.Schema.EvaluationResults** that provides the outcome of the evaluation.

### Validate(this JsonSchema jsonSchema, JsonDocument jsonDocument, EvaluationOptions options)

Extends **Json.Schema.JsonSchema.Evaluate(System.Text.Json.Nodes.JsonNode,Json.Schema.EvaluationOptions)** to take **System.Text.Json.JsonDocument**.

#### Declaration

```c#
public static EvaluationResults Validate(this JsonSchema jsonSchema, JsonDocument jsonDocument, EvaluationOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| jsonSchema | JsonSchema | The schema. |
| jsonDocument | JsonDocument | Instance to be evaluated. |
| options | EvaluationOptions | The options to use for this evaluation. |


#### Returns

A **Json.Schema.EvaluationResults** that provides the outcome of the evaluation.

### Validate(this JsonSchema jsonSchema, JsonElement jsonElement, EvaluationOptions options)

Extends **Json.Schema.JsonSchema.Evaluate(System.Text.Json.Nodes.JsonNode,Json.Schema.EvaluationOptions)** to take **System.Text.Json.JsonElement**.

#### Declaration

```c#
public static EvaluationResults Validate(this JsonSchema jsonSchema, JsonElement jsonElement, EvaluationOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| jsonSchema | JsonSchema | The schema. |
| jsonElement | JsonElement | Instance to be evaluated. |
| options | EvaluationOptions | The options to use for this evaluation. |


#### Returns

A **Json.Schema.EvaluationResults** that provides the outcome of the evaluation.

