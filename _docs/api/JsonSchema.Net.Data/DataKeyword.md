---
layout: "page"
title: "DataKeyword Class"
bookmark: "DataKeyword"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "9.02.000"
---
**Namespace:** Json.Schema.Data

**Inheritance:**
`DataKeyword`
 🡒 
`object`

**Implemented interfaces:**

- IJsonSchemaKeyword

Represents the `data` keyword.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Name** | string | The JSON name of the keyword. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **ExternalDataRegistry** | ConcurrentDictionary\<Uri, JsonNode\> | Provides a registry for known external data sources. |
| **Fetch** | Func\<Uri, JsonNode\> | Gets or sets a method to download external references. |
| **References** | IReadOnlyDictionary\<string, IDataResourceIdentifier\> | The collection of keywords and references. |

## Constructors

### DataKeyword(IReadOnlyDictionary\<string, IDataResourceIdentifier\> references)

Creates an instance of the **Json.Schema.Data.DataKeyword** class.

#### Declaration

```c#
public DataKeyword(IReadOnlyDictionary<string, IDataResourceIdentifier> references)
```

| Parameter | Type | Description |
|---|---|---|
| references | IReadOnlyDictionary\<string, IDataResourceIdentifier\> | The collection of keywords and references. |


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
| localConstraints | IReadOnlyList\<KeywordConstraint\> | The set of other **Json.Schema.KeywordConstraint**s that have been processed prior to this one.<br>Will contain the constraints for keyword dependencies. |
| context | EvaluationContext | The **Json.Schema.EvaluationContext**. |


#### Returns

A constraint object.

### SimpleDownload(Uri uri)

Provides a simple data fetch method that supports `http`, `https`, and `file` URI schemes.

#### Declaration

```c#
public static JsonNode SimpleDownload(Uri uri)
```

| Parameter | Type | Description |
|---|---|---|
| uri | Uri | The URI to fetch. |


#### Returns

A JSON string representing the data

