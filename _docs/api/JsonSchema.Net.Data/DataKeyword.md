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
- IEquatable\<DataKeyword\>

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

### Equals(DataKeyword other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(DataKeyword other)
```

| Parameter | Type | Description |
|---|---|---|
| other | DataKeyword | An object to compare with this object. |


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

