---
layout: "page"
title: "SchemaRegistry Class"
bookmark: "SchemaRegistry"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.102"
---
**Namespace:** Json.Schema

**Inheritance:**
`SchemaRegistry`
 🡒 
`object`

Provides a registry for storing and retrieving JSON schemas and other base documents by URI and anchor.

## Remarks

The registry supports registering schemas with unique URIs and enables lookup by URI or anchor.
            Schemas can be fetched automatically using the **Json.Schema.SchemaRegistry.Fetch** delegate if not already registered. The **Json.Schema.SchemaRegistry.Global** property provides a shared, application-wide registry instance. Getting schemas via

## Properties

| Name | Type | Summary |
|---|---|---|
| **Fetch** | Func\<Uri, SchemaRegistry, IBaseDocument\> | Gets or sets a method to enable automatic download of schemas by `$id` URI. |
| **Global** | SchemaRegistry | The global registry. |

## Methods

### CreateBundle(Uri rootUri, Uri bundleUri, BuildOptions options)

Creates a bundled JSON Schema document that includes the root schema and all referenced schemas as definitions.

#### Declaration

```c#
public JsonSchema CreateBundle(Uri rootUri, Uri bundleUri, BuildOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| rootUri | Uri | The URI of the root JSON Schema to bundle. This schema and all schemas it references will be included in the |
| bundleUri | Uri | The URI to assign as the $id of the resulting bundled schema document. |
| options | BuildOptions | The options to use when building the bundled schema, such as validation or parsing settings. |


#### Returns

A new JsonSchema instance representing the bundled schema document, or null if the root schema cannot be found.

#### Remarks

The bundled schema will contain all referenced schemas under the `$defs` property, allowing for
self-contained schema validation. If any referenced schema cannot be resolved, a **Json.Schema.RefResolutionException**
will be thrown.

### Get(Uri uri)

Gets a schema by URI ID and/or anchor.

#### Declaration

```c#
public IBaseDocument Get(Uri uri)
```

| Parameter | Type | Description |
|---|---|---|
| uri | Uri | The URI ID. |


#### Returns

The schema, if registered in either this or the global registry;
otherwise null.

### Register(IBaseDocument document)

Registers a schema by URI.

#### Declaration

```c#
public void Register(IBaseDocument document)
```

| Parameter | Type | Description |
|---|---|---|
| document | IBaseDocument | The schema. |


### Register(Uri uri, IBaseDocument document)

Registers a schema by URI.

#### Declaration

```c#
public void Register(Uri uri, IBaseDocument document)
```

| Parameter | Type | Description |
|---|---|---|
| uri | Uri | The URI ID of the schema.. |
| document | IBaseDocument | The schema. |


