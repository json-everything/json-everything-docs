---
layout: "page"
title: "OpenApiDocument Class"
bookmark: "OpenApiDocument"
permalink: "/api/JsonSchema.Net.Api/:title/"
order: "10.05.022"
---
**Namespace:** Json.Schema.Api.OpenApi

**Inheritance:**
`OpenApiDocument`
 🡒 
`object`

**Implemented interfaces:**

- IBaseDocument

Models the OpenAPI document.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Components** | ComponentCollection | Gets or sets the components collection. |
| **ExtensionData** | ExtensionData | Gets or set extension data. |
| **ExternalDocs** | ExternalDocumentation | Gets or sets external documentation. |
| **Info** | OpenApiInfo | Gets the API information. |
| **JsonSchemaDialect** | Uri | Gets or sets the default JSON Schema dialect. |
| **OpenApi** | string | Gets the OpenAPI document version. |
| **Paths** | PathCollection | Gets or sets the paths collection. |
| **Security** | IReadOnlyList\<SecurityRequirement\> | Gets or sets the security requirements collection. |
| **Servers** | IReadOnlyList\<Server\> | Gets or sets the server collection. |
| **Tags** | IReadOnlyList\<Tag\> | Gets or sets the tags. |
| **UnknownData** | UnknownData | Gets or sets properties which are not recognized by OpenAPI. |
| **Webhooks** | Dictionary\<string, PathItem\> | Gets or sets the webhooks collection. |

## Constructors

### OpenApiDocument(string openApi, OpenApiInfo info)



#### Declaration

```c#
public OpenApiDocument(string openApi, OpenApiInfo info)
```

| Parameter | Type | Description |
|---|---|---|
| openApi | string | The OpenAPI version |
| info | OpenApiInfo | The API information |


## Methods

### Find(JsonPointer pointer)

Finds and retrieves an object within the document at a specified location.

#### Declaration

```c#
public T Find(JsonPointer pointer)
```

| Parameter | Type | Description |
|---|---|---|
| pointer | JsonPointer | The expected location |


#### Returns

The object, if an object of that type exists at that location; otherwise null.

#### Remarks

The lookup walks the model, so the value found is already a model object.  Pointers
that land inside extension data or an example value yield a **System.Text.Json.Nodes.JsonNode**,
which is returned only when <typeparamref name="T" /> can hold it.

### Initialize(SchemaRegistry schemaRegistry, JsonSerializerOptions options)

Initializes the document model.

#### Declaration

```c#
public Task Initialize(SchemaRegistry schemaRegistry, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| schemaRegistry | SchemaRegistry | (optional) A schema registry. |
| options | JsonSerializerOptions | (optional) Serializer options |


#### Returns



