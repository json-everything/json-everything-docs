---
layout: "page"
title: "UriIdentifier Class"
bookmark: "UriIdentifier"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "10.02.012"
---
**Namespace:** Json.Schema.Data

**Inheritance:**
`UriIdentifier`
 🡒 
`object`

**Implemented interfaces:**

- IDataResourceIdentifier

Handles data references that are URIs.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Target** | Uri | The URI target. |

## Constructors

### UriIdentifier(Uri target)

Creates a new instance of **Json.Schema.Data.UriIdentifier**.

#### Declaration

```c#
public UriIdentifier(Uri target)
```

| Parameter | Type | Description |
|---|---|---|
| target | Uri | The target. |


## Methods

### ToString()

Returns a string that represents the current object.

#### Declaration

```c#
public override string ToString()
```


#### Returns

A string that represents the current object.

### TryResolve(KeywordEvaluation evaluation, SchemaRegistry registry, out JsonNode value)

Resolves a resource.

#### Declaration

```c#
public bool TryResolve(KeywordEvaluation evaluation, SchemaRegistry registry, out JsonNode value)
```

| Parameter | Type | Description |
|---|---|---|
| evaluation | KeywordEvaluation | The evaluation being process.  This will help identify. |
| registry | SchemaRegistry | The schema registry. |
| value | out JsonNode | The value, if **evaluation** was resolvable. |


#### Returns

True if resolution was successful; false otherwise.

