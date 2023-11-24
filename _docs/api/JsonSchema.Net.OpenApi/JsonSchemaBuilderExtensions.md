---
layout: "page"
title: "JsonSchemaBuilderExtensions Class"
bookmark: "JsonSchemaBuilderExtensions"
permalink: "/api/JsonSchema.Net.OpenApi/:title/"
0.04.007"
---
**Namespace:** Json.Schema.OpenApi

**Inheritance:**
`JsonSchemaBuilderExtensions`
 🡒 
`object`

Provides a fluent interface for **Json.Schema.JsonSchemaBuilder**.

## Methods

### Discriminator(this JsonSchemaBuilder builder, string propertyName, IReadOnlyDictionary\<string, string\> mapping, IReadOnlyDictionary\<string, JsonNode\> extensions)



#### Declaration

```c#
public static JsonSchemaBuilder Discriminator(this JsonSchemaBuilder builder, string propertyName, IReadOnlyDictionary<string, string> mapping, IReadOnlyDictionary<string, JsonNode> extensions)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| propertyName | string | The name of the property in the payload that will hold the discriminator value. |
| mapping | IReadOnlyDictionary\<string, string\> | An object to hold mappings between payload values and schema names or references. |
| extensions | IReadOnlyDictionary\<string, JsonNode\> | Allows extensions to the OpenAPI Schema. The field name MUST begin with `x-`, for example, `x-internal-id`. Field names beginning `x-oai-` and `x-oas-` are reserved for uses defined by the OpenAPI Initiative. The value can be null, a primitive, an array or an object. |


#### Returns

The builder.

### Example(this JsonSchemaBuilder builder, JsonNode json)



#### Declaration

```c#
public static JsonSchemaBuilder Example(this JsonSchemaBuilder builder, JsonNode json)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| json | JsonNode | The example value. |


#### Returns

The builder.

### ExternalDocs(this JsonSchemaBuilder builder, Uri url, string description, IReadOnlyDictionary\<string, JsonNode\> extensions)



#### Declaration

```c#
public static JsonSchemaBuilder ExternalDocs(this JsonSchemaBuilder builder, Uri url, string description, IReadOnlyDictionary<string, JsonNode> extensions)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| url | Uri | The URL for the target documentation. This MUST be in the form of a URL. |
| description | string | A description of the target documentation. CommonMark syntax MAY be used for rich text representation. |
| extensions | IReadOnlyDictionary\<string, JsonNode\> | Allows extensions to the OpenAPI Schema. The field name MUST begin with `x-`, for example, `x-internal-id`. Field names beginning `x-oai-` and `x-oas-` are reserved for uses defined by the OpenAPI Initiative. The value can be null, a primitive, an array or an object. |


#### Returns

The builder.

### Xml(this JsonSchemaBuilder builder, Uri namespace, string name, string prefix, bool? attribute, bool? wrapped, IReadOnlyDictionary\<string, JsonNode\> extensions)

Adds an `xml` keyword to the schema.

#### Declaration

```c#
public static JsonSchemaBuilder Xml(this JsonSchemaBuilder builder, Uri namespace, string name, string prefix, bool? attribute, bool? wrapped, IReadOnlyDictionary<string, JsonNode> extensions)
```

| Parameter | Type | Description |
|---|---|---|
| builder | JsonSchemaBuilder | The builder. |
| namespace | Uri | The URI of the namespace definition. This MUST be in the form of an absolute URI. |
| name | string | Replaces the name of the element/attribute used for the described schema property.             When defined within `items`, it will affect the name of the individual XML elements within the list.             When defined alongside `type` being `array` (outside the `items`), it will affect the wrapping element and |
| prefix | string | The prefix to be used for the name. |
| attribute | bool? | Declares whether the property definition translates to an attribute instead of an |
| wrapped | bool? | MAY be used only for an array definition. Signifies whether the array is wrapped (for example, `\<books\>\<book /\>\<book /\>\</books\>`)             or unwrapped (`\<book /\>\<book /\>`). Default value is `false`. The definition takes effect only when defined alongside `type` |
| extensions | IReadOnlyDictionary\<string, JsonNode\> | Allows extensions to the OpenAPI Schema. The field name MUST begin with `x-`, for example, `x-internal-id`. Field names beginning `x-oai-` and `x-oas-` are reserved for uses defined by the OpenAPI Initiative. The value can be null, a primitive, an array or an object. |


#### Returns

The builder.

