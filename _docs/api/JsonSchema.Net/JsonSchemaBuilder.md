---
layout: "page"
title: "JsonSchemaBuilder Class"
bookmark: "JsonSchemaBuilder"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.062"
---
**Namespace:** Json.Schema

**Inheritance:**
`JsonSchemaBuilder`
 🡒 
`object`

A fluent-style builder for **Json.Schema.JsonSchema**.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Empty** | JsonSchemaBuilder | Gets an instance of **Json.Schema.JsonSchemaBuilder** that represents an empty JSON schema. |
| **False** | JsonSchemaBuilder | Gets a schema builder that always evaluates to false, representing a schema that does not match any JSON value. |
| **True** | JsonSchemaBuilder | Gets a schema builder that creates a schema which always validates as \<see langword="true" /\>. |

## Constructors

### JsonSchemaBuilder(BuildOptions buildOptions)

Initializes a new instance of the JsonSchemaBuilder class.

#### Declaration

```c#
public JsonSchemaBuilder(BuildOptions buildOptions)
```


#### Remarks

Use this constructor to create a new JsonSchemaBuilder for defining and constructing JSON schema
            objects. The builder can be configured with various schema properties and constraints before generating the final

## Methods

### Add(string keyword, JsonNode value)

Adds a new keyword with a value.

#### Declaration

```c#
public void Add(string keyword, JsonNode value)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | string | The keyword to add. |
| value | JsonNode | The value. |


### Add(string keyword, JsonSchemaBuilder builder)

Adds a new keyword with a nested schema.

#### Declaration

```c#
public void Add(string keyword, JsonSchemaBuilder builder)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | string | The keyword to add. |
| builder | JsonSchemaBuilder | Another builder. |


### Add(string keyword, IEnumerable\<JsonSchemaBuilder\> builders)

Adds a new keyword with a nested schema.

#### Declaration

```c#
public void Add(string keyword, IEnumerable<JsonSchemaBuilder> builders)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | string | The keyword to add. |
| builders | IEnumerable\<JsonSchemaBuilder\> | Another builder. |


### Add(string keyword, IEnumerable\<(string, JsonSchemaBuilder)\> builders)

Adds a new keyword with a nested schema.

#### Declaration

```c#
public void Add(string keyword, IEnumerable<(string, JsonSchemaBuilder)> builders)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | string | The keyword to add. |
| builders | IEnumerable\<(string, JsonSchemaBuilder)\> | Another builder. |


### Add(string keyword, IEnumerable\<KeyValuePair\<string, JsonSchemaBuilder\>\> builders)

Adds a new keyword with a nested schema.

#### Declaration

```c#
public void Add(string keyword, IEnumerable<KeyValuePair<string, JsonSchemaBuilder>> builders)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | string | The keyword to add. |
| builders | IEnumerable\<KeyValuePair\<string, JsonSchemaBuilder\>\> | Another builder. |


### Build(BuildOptions options, Uri baseUri)

Builds a JSON schema from the configured keywords and returns a corresponding **Json.Schema.JsonSchema** instance.

#### Declaration

```c#
public JsonSchema Build(BuildOptions options, Uri baseUri)
```

| Parameter | Type | Description |
|---|---|---|
| options | BuildOptions | (Optional) Build options that control schema generation behavior.  Overrides build options |
| baseUri | Uri | (Optional) A base URI to associate with the generated schema. If specified, it is used to resolve relative |


#### Returns

A **Json.Schema.JsonSchema** instance representing the constructed schema based on the provided options and base URI.

### RecursiveRefRoot()

Creates a new **Json.Schema.JsonSchema**.

#### Declaration

```c#
public static JsonSchemaBuilder RecursiveRefRoot()
```


#### Returns

A JSON Schema that simply refers back to the recursive root schema.

### RefRoot()

Creates a new **Json.Schema.JsonSchema**.

#### Declaration

```c#
public static JsonSchemaBuilder RefRoot()
```


#### Returns

A JSON Schema that simply refers back to the root schema.

