---
layout: "page"
title: "XmlKeyword Class"
bookmark: "XmlKeyword"
permalink: "/api/JsonSchema.Net.OpenApi/:title/"
order: "9.04.011"
---
**Namespace:** Json.Schema.OpenApi

**Inheritance:**
`XmlKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Handles `example`.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Attribute** | bool? | Declares whether the property definition translates to an attribute instead of an element. Default value is `false`. |
| **Extensions** | IReadOnlyDictionary\<string, JsonNode\> | Allows extensions to the OpenAPI Schema. The field name MUST begin with `x-`, for example, `x-internal-id`. Field names beginning `x-oai-` and `x-oas-` are reserved for uses defined by the OpenAPI Initiative. The value can be null, a primitive, an array or an object. |
| **Name** | string | Replaces the name of the element/attribute used for the described schema property. When defined within `items`, it will affect the name of the individual XML elements within the list. When defined alongside `type` being `array` (outside the `items`), it will affect the wrapping element and only if `wrapped` is `true`. If `wrapped` is `false`, it will be ignored. |
| **Namespace** | Uri | The URI of the namespace definition. This MUST be in the form of an absolute URI. |
| **Prefix** | string | The prefix to be used for the name. |
| **Wrapped** | bool? | MAY be used only for an array definition. Signifies whether the array is wrapped (for example, `\<books\>\<book /\>\<book /\>\</books\>`) or unwrapped (`\<book /\>\<book /\>`). Default value is `false`. The definition takes effect only when defined alongside `type` being `array` (outside the `items`). |

## Constructors

### XmlKeyword(Uri namespace, string name, string prefix, bool? attribute, bool? wrapped, IReadOnlyDictionary\<string, JsonNode\> extensions)

Creates a new **Json.Schema.OpenApi.ExternalDocsKeyword**.

#### Declaration

```c#
public XmlKeyword(Uri namespace, string name, string prefix, bool? attribute, bool? wrapped, IReadOnlyDictionary<string, JsonNode> extensions)
```

| Parameter | Type | Description |
|---|---|---|
| namespace | Uri | The URI of the namespace definition. This MUST be in the form of an absolute URI. |
| name | string | Replaces the name of the element/attribute used for the described schema property.             When defined within `items`, it will affect the name of the individual XML elements within the list.             When defined alongside `type` being `array` (outside the `items`), it will affect the wrapping element and |
| prefix | string | The prefix to be used for the name. |
| attribute | bool? | Declares whether the property definition translates to an attribute instead of an |
| wrapped | bool? | MAY be used only for an array definition. Signifies whether the array is wrapped (for example, `\<books\>\<book /\>\<book /\>\</books\>`)             or unwrapped (`\<book /\>\<book /\>`). Default value is `false`. The definition takes effect only when defined alongside `type` |
| extensions | IReadOnlyDictionary\<string, JsonNode\> | Allows extensions to the OpenAPI Schema. The field name MUST begin with `x-`, for example, `x-internal-id`. Field names beginning `x-oai-` and `x-oas-` are reserved for uses defined by the OpenAPI Initiative. The value can be null, a primitive, an array or an object. |


## Methods

### GetConstraint(SchemaConstraint schemaConstraint, IReadOnlyList\<KeywordConstraint\> localConstraints, EvaluationContext context)

Builds a constraint object for a keyword.

#### Declaration

```c#
public KeywordConstraint GetConstraint(SchemaConstraint schemaConstraint, IReadOnlyList<KeywordConstraint> localConstraints, EvaluationContext context)
```

| Parameter | Type | Description |
|---|---|---|
| schemaConstraint | SchemaConstraint | The **Json.Schema.SchemaConstraint** for the schema object that houses this keyword. |
| localConstraints | IReadOnlyList\<KeywordConstraint\> | The set of other **Json.Schema.KeywordConstraint**s that have been processed prior to this one. Will contain the constraints for keyword dependencies. |
| context | EvaluationContext | The **Json.Schema.EvaluationContext**. |


#### Returns

A constraint object.

