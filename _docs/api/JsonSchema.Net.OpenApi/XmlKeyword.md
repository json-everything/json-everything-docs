---
layout: "page"
title: "XmlKeyword Class"
bookmark: "XmlKeyword"
permalink: "/api/JsonSchema.Net.OpenApi/:title/"
order: "9.04.008"
---
**Namespace:** Json.Schema.OpenApi

**Inheritance:**
`XmlKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IEquatable\<XmlKeyword\>

Handles `example`.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Attribute** | bool? | Declares whether the property definition translates to an attribute instead of an<br>element. Default value is `false`. |
| **Extensions** | IReadOnlyDictionary\<string, JsonNode\> | Allows extensions to the OpenAPI Schema. The field name MUST begin with `x-`, for example,<br>`x-internal-id`. Field names beginning `x-oai-` and `x-oas-` are reserved for uses defined by the OpenAPI Initiative.<br>The value can be null, a primitive, an array or an object. |
| **Name** | string | Replaces the name of the element/attribute used for the described schema property.<br>When defined within `items`, it will affect the name of the individual XML elements within the list.<br>When defined alongside `type` being `array` (outside the `items`), it will affect the wrapping element and<br>only if `wrapped` is `true`. If `wrapped` is `false`, it will be ignored. |
| **Namespace** | Uri | The URI of the namespace definition. This MUST be in the form of an absolute URI. |
| **Prefix** | string | The prefix to be used for the name. |
| **Wrapped** | bool? | MAY be used only for an array definition. Signifies whether the array is wrapped (for example, `\<books\>\<book /\>\<book /\>\</books\>`)<br>or unwrapped (`\<book /\>\<book /\>`). Default value is `false`. The definition takes effect only when defined alongside `type`<br>being `array` (outside the `items`). |

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
| name | string | Replaces the name of the element/attribute used for the described schema property.<br>            When defined within `items`, it will affect the name of the individual XML elements within the list.<br>            When defined alongside `type` being `array` (outside the `items`), it will affect the wrapping element and |
| prefix | string | The prefix to be used for the name. |
| attribute | bool? | Declares whether the property definition translates to an attribute instead of an |
| wrapped | bool? | MAY be used only for an array definition. Signifies whether the array is wrapped (for example, `\<books\>\<book /\>\<book /\>\</books\>`)<br>            or unwrapped (`\<book /\>\<book /\>`). Default value is `false`. The definition takes effect only when defined alongside `type` |
| extensions | IReadOnlyDictionary\<string, JsonNode\> | Allows extensions to the OpenAPI Schema. The field name MUST begin with `x-`, for example,<br>`x-internal-id`. Field names beginning `x-oai-` and `x-oas-` are reserved for uses defined by the OpenAPI Initiative.<br>The value can be null, a primitive, an array or an object. |


## Methods

### Equals(XmlKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(XmlKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | XmlKeyword | An object to compare with this object. |


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

### Evaluate(EvaluationContext context)

Performs evaluation for the keyword.

#### Declaration

```c#
public void Evaluate(EvaluationContext context)
```

| Parameter | Type | Description |
|---|---|---|
| context | EvaluationContext | Contextual details for the evaluation process. |


### GetHashCode()

Serves as the default hash function.

#### Declaration

```c#
public override int GetHashCode()
```


#### Returns

A hash code for the current object.

