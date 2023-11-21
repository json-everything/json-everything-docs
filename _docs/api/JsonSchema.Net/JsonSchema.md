---
layout: "page"
title: "JsonSchema Class"
bookmark: "JsonSchema"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.081"
---
**Namespace:** Json.Schema

**Inheritance:**
`JsonSchema`
 🡒 
`object`

**Implemented interfaces:**

- IBaseDocument

Represents a JSON Schema.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Empty** | JsonSchema | The empty schema `{}`.  Functionally equivalent to **Json.Schema.JsonSchema.True**. |
| **False** | JsonSchema | The `false` schema.  Fails all instances. |
| **True** | JsonSchema | The `true` schema.  Passes all instances. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **BaseUri** | Uri | Gets the base URI that applies to this schema.  This may be defined by a parent schema. |
| **BoolValue** | bool? | For boolean schemas, gets the value.  Null if the schema isn't a boolean schema. |
| **DeclaredVersion** | SpecVersion | Gets the specification version as determined by analyzing the `$schema` keyword, if it exists. |
| **IsResourceRoot** | bool | Gets whether the schema defines a new schema resource.  This will only be true if it contains an `$id` keyword. |
| **Item** | IJsonSchemaKeyword | Gets the keyword class by keyword name. |
| **Keywords** | IReadOnlyCollection\<IJsonSchemaKeyword\> | Gets the keywords contained in the schema.  Only populated for non-boolean schemas. |

## Methods

### Evaluate(JsonNode root, EvaluationOptions options)

Evaluates an instance against this schema.

#### Declaration

```c#
public EvaluationResults Evaluate(JsonNode root, EvaluationOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| root | JsonNode | The root instance. |
| options | EvaluationOptions | The options to use for this evaluation. |


#### Returns

A **Json.Schema.EvaluationResults** that provides the outcome of the evaluation.

### FromFile(string fileName, JsonSerializerOptions options)

Loads text from a file and deserializes a **Json.Schema.JsonSchema**.

#### Declaration

```c#
public static JsonSchema FromFile(string fileName, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| fileName | string | The filename to load, URL-decoded. |
| options | JsonSerializerOptions | Serializer options. |


#### Returns

A new **Json.Schema.JsonSchema**.

#### Remarks

The filename needs to not be URL-encoded as **System.Uri** attempts to encode it.

### FromStream(Stream source, JsonSerializerOptions options)

Deserializes a **Json.Schema.JsonSchema** from a stream.

#### Declaration

```c#
public static ValueTask<JsonSchema> FromStream(Stream source, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| source | Stream | A stream. |
| options | JsonSerializerOptions | Serializer options. |


#### Returns

A new **Json.Schema.JsonSchema**.

### FromText(string jsonText, JsonSerializerOptions options)

Deserializes a **Json.Schema.JsonSchema** from text.

#### Declaration

```c#
public static JsonSchema FromText(string jsonText, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| jsonText | string | The text to parse. |
| options | JsonSerializerOptions | Serializer options. |


#### Returns

A new **Json.Schema.JsonSchema**.

### GetAnchor(string anchorName)

Gets a defined anchor.

#### Declaration

```c#
public JsonSchema GetAnchor(string anchorName)
```

| Parameter | Type | Description |
|---|---|---|
| anchorName | string | The name of the anchor (excluding the `#`) |


#### Returns

The associated subschema, if the anchor exists, or null.

### GetConstraint(JsonPointer relativeEvaluationPath, JsonPointer baseInstanceLocation, JsonPointer relativeInstanceLocation, EvaluationContext context)

Builds a constraint for the schema.

#### Declaration

```c#
public SchemaConstraint GetConstraint(JsonPointer relativeEvaluationPath, JsonPointer baseInstanceLocation, JsonPointer relativeInstanceLocation, EvaluationContext context)
```

| Parameter | Type | Description |
|---|---|---|
| relativeEvaluationPath | JsonPointer | The relative evaluation path in JSON Pointer form.  Generally this will be a keyword name, but may have other segments, such as in the case of `properties` which also has the property name. |
| baseInstanceLocation | JsonPointer | The base location within the instance that is being evaluated. |
| relativeInstanceLocation | JsonPointer | The location relative to **baseInstanceLocation** within the instance that is being evaluated. |
| context | EvaluationContext | The evaluation context. |


#### Returns

A schema constraint.

#### Remarks

The constraint returned by this method is cached by the **Json.Schema.JsonSchema** object.
Different evaluation paths to this schema object may result in different constraints, so
a new constraint is saved for each dynamic scope.

### GetKeyword()

Gets a specified keyword if it exists.

#### Declaration

```c#
public T GetKeyword()
```


#### Returns

The keyword if it exists; otherwise null.

### TryGetKeyword(out T keyword)


#### Declaration

```c#
public bool TryGetKeyword(out T keyword)
```


#### Returns


### TryGetKeyword(string keywordName, out T keyword)


#### Declaration

```c#
public bool TryGetKeyword(string keywordName, out T keyword)
```


#### Returns


