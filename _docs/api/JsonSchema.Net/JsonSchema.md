---
layout: "page"
title: "JsonSchema Class"
bookmark: "JsonSchema"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.060"
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
| **False** | JsonSchema | The `false` schema.  Fails all instances. |
| **True** | JsonSchema | The `true` schema.  Passes all instances. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **BaseUri** | Uri |  |
| **BoolValue** | bool? | For boolean schemas, gets the value.  Null if the schema isn't a boolean schema. |
| **Root** | JsonSchemaNode | Gets the root node of the JSON Schema. |

## Methods

### Build(JsonElement root, BuildOptions options, Uri baseUri)

Builds a JsonSchema instance from the specified JSON schema root element, applying the provided build options and
base URI if specified.

#### Declaration

```c#
public static JsonSchema Build(JsonElement root, BuildOptions options, Uri baseUri)
```

| Parameter | Type | Description |
|---|---|---|
| root | JsonElement | The root JsonElement representing the JSON schema to be parsed and built. Must be a valid JSON schema object. |
| options | BuildOptions | Optional build options that control schema parsing behavior, such as registry usage and dialect settings. If null, |
| baseUri | Uri | An optional base URI to associate with the schema for resolving references if the schema does not contain an $id |


#### Returns

A JsonSchema instance representing the parsed schema. Returns a singleton schema for boolean schemas (<see langword="true" /> or <see langword="false" />), or a constructed schema for object-based definitions.

#### Remarks

The returned schema is registered with the provided or global schema registry. Reference
            resolution and cycle detection are performed during the build process. The base URI is set on the resulting schema

### BuildNode(BuildContext context)

Builds a new JSON schema node from the specified build context, interpreting the local schema and its keywords
according to the active dialect.

#### Declaration

```c#
public static JsonSchemaNode BuildNode(BuildContext context)
```

| Parameter | Type | Description |
|---|---|---|
| context | BuildContext | The build context containing the local schema, dialect, base URI, and options used to construct the schema node. |


#### Returns

A JsonSchemaNode representing the parsed schema, including its keywords and any registered anchors or embedded

#### Remarks

This method processes schema keywords and handles dialect-specific behaviors, such as anchor
registration and embedded resource management. The resulting node reflects the schema's structure and metadata as
defined in the context.

Use this method from keywords to build subschemas.
            
Individual keywords may throw various exceptions during the validation phase.

### Evaluate(JsonElement instance, EvaluationOptions options)

Evaluates the specified JSON instance against the schema and returns the results.

#### Declaration

```c#
public EvaluationResults Evaluate(JsonElement instance, EvaluationOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| instance | JsonElement | The JSON data to be evaluated against the schema. |
| options | EvaluationOptions | (Optional) Evaluation settings that control validation behavior. If null, default options are used. |


#### Returns

An EvaluationResults object containing the outcome of the schema validation, including any errors or annotations.

### FindSubschema(JsonPointer pointer, BuildContext context)

Finds the subschema node within the root schema that corresponds to the specified JSON pointer.

#### Declaration

```c#
public JsonSchemaNode FindSubschema(JsonPointer pointer, BuildContext context)
```

| Parameter | Type | Description |
|---|---|---|
| pointer | JsonPointer | The JSON pointer indicating the location of the subschema to find within the root schema. |
| context | BuildContext | The build context used for schema evaluation and node construction if the subschema is not found directly. |


#### Returns

A **Json.Schema.JsonSchemaNode** representing the subschema at the specified pointer, or <see langword="null" /> if no

### FromFile(string fileName, BuildOptions options, Uri baseUri)

Loads text from a file and builds a **Json.Schema.JsonSchema**.

#### Declaration

```c#
public static JsonSchema FromFile(string fileName, BuildOptions options, Uri baseUri)
```

| Parameter | Type | Description |
|---|---|---|
| fileName | string | The filename to load, URL-decoded. |
| options | BuildOptions | (optional) Serializer options. |
| baseUri | Uri | (optional) The base URI for this schema. |


#### Returns

A new **Json.Schema.JsonSchema**.

#### Remarks

The filename needs to not be URL-encoded as **System.Uri** attempts to encode it.

### FromText(string jsonText, BuildOptions buildOptions, Uri baseUri, JsonDocumentOptions? jsonOptions)

Builds a **Json.Schema.JsonSchema** from text.

#### Declaration

```c#
public static JsonSchema FromText(string jsonText, BuildOptions buildOptions, Uri baseUri, JsonDocumentOptions? jsonOptions)
```

| Parameter | Type | Description |
|---|---|---|
| jsonText | string | The text to parse. |
| buildOptions | BuildOptions | (optional) The build options. |
| baseUri | Uri | (optional) The base URI for this schema. |
| jsonOptions | JsonDocumentOptions? | (optional) Options for parsing a **System.Text.Json.JsonDocument**. |


#### Returns

A new **Json.Schema.JsonSchema**.

