---
layout: "page"
title: "DiscriminatorKeyword Class"
bookmark: "DiscriminatorKeyword"
permalink: "/api/JsonSchema.Net.OpenApi/:title/"
order: "9.04.000"
---
**Namespace:** Json.Schema.OpenApi

**Inheritance:**
`DiscriminatorKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword
- IEquatable\<DiscriminatorKeyword\>

Handles `example`.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Extensions** | IReadOnlyDictionary\<string, JsonNode\> | Allows extensions to the OpenAPI Schema. The field name MUST begin with `x-`, for example,<br>`x-internal-id`. Field names beginning `x-oai-` and `x-oas-` are reserved for uses defined by the OpenAPI Initiative.<br>The value can be null, a primitive, an array or an object. |
| **Mapping** | IReadOnlyDictionary\<string, string\> | An object to hold mappings between payload values and schema names or references. |
| **PropertyName** | string | The name of the property in the payload that will hold the discriminator value. |

## Constructors

### DiscriminatorKeyword(string propertyName, IReadOnlyDictionary\<string, string\> mapping, IReadOnlyDictionary\<string, JsonNode\> extensions)

Creates a new **Json.Schema.OpenApi.DiscriminatorKeyword**.

#### Declaration

```c#
public DiscriminatorKeyword(string propertyName, IReadOnlyDictionary<string, string> mapping, IReadOnlyDictionary<string, JsonNode> extensions)
```

| Parameter | Type | Description |
|---|---|---|
| propertyName | string | The name of the property in the payload that will hold the discriminator value. |
| mapping | IReadOnlyDictionary\<string, string\> | An object to hold mappings between payload values and schema names or references. |
| extensions | IReadOnlyDictionary\<string, JsonNode\> | Allows extensions to the OpenAPI Schema. The field name MUST begin with `x-`, for example,<br>`x-internal-id`. Field names beginning `x-oai-` and `x-oas-` are reserved for uses defined by the OpenAPI Initiative.<br>The value can be null, a primitive, an array or an object. |


## Methods

### Equals(DiscriminatorKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(DiscriminatorKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | DiscriminatorKeyword | An object to compare with this object. |


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

