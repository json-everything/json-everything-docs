---
layout: "page"
title: "JsonSchema Class"
bookmark: "JsonSchema"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.050"
---
**Namespace:** Json.Schema

**Inheritance:**
`JsonSchema`
 🡒 
`object`

**Implemented interfaces:**

- IEquatable\<JsonSchema\>
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

### Equals(JsonSchema other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(JsonSchema other)
```

| Parameter | Type | Description |
|---|---|---|
| other | JsonSchema | An object to compare with this object. |


#### Returns

true if the current object is equal to the <paramref name="other">other</paramref> parameter; otherwise, false.

### Equals(object obj)

Determines whether the specified object is equal to the current object.

#### Declaration

```c#
public override bool Equals(object obj)
```

| Parameter | Type | Description |
|---|---|---|
| obj | object | The object to compare with the current object. |


#### Returns

true if the specified object  is equal to the current object; otherwise, false.

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

### GetHashCode()

Serves as the default hash function.

#### Declaration

```c#
public override int GetHashCode()
```


#### Returns

A hash code for the current object.

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


