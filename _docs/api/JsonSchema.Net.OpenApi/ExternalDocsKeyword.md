---
layout: "page"
title: "ExternalDocsKeyword Class"
bookmark: "ExternalDocsKeyword"
permalink: "/api/JsonSchema.Net.OpenApi/:title/"
order: "9.04.002"
---
**Namespace:** Json.Schema.OpenApi

**Inheritance:**
`ExternalDocsKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IEquatable\<ExternalDocsKeyword\>

Handles `example`.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Description** | string | A description of the target documentation. CommonMark syntax MAY be used for rich text representation. |
| **Extensions** | IReadOnlyDictionary\<string, JsonNode\> | Allows extensions to the OpenAPI Schema. The field name MUST begin with `x-`, for example,<br>`x-internal-id`. Field names beginning `x-oai-` and `x-oas-` are reserved for uses defined by the OpenAPI Initiative.<br>The value can be null, a primitive, an array or an object. |
| **Url** | Uri | The URL for the target documentation. This MUST be in the form of a URL. |

## Constructors

### ExternalDocsKeyword(Uri url, string description, IReadOnlyDictionary\<string, JsonNode\> extensions)

Creates a new **Json.Schema.OpenApi.ExternalDocsKeyword**.

#### Declaration

```c#
public ExternalDocsKeyword(Uri url, string description, IReadOnlyDictionary<string, JsonNode> extensions)
```

| Parameter | Type | Description |
|---|---|---|
| url | Uri | The URL for the target documentation. This MUST be in the form of a URL. |
| description | string | A description of the target documentation. CommonMark syntax MAY be used for rich text representation. |
| extensions | IReadOnlyDictionary\<string, JsonNode\> | Allows extensions to the OpenAPI Schema. The field name MUST begin with `x-`, for example,<br>`x-internal-id`. Field names beginning `x-oai-` and `x-oas-` are reserved for uses defined by the OpenAPI Initiative.<br>The value can be null, a primitive, an array or an object. |


## Methods

### Equals(ExternalDocsKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(ExternalDocsKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | ExternalDocsKeyword | An object to compare with this object. |


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

