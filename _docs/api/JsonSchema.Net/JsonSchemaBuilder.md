---
layout: "page"
title: "JsonSchemaBuilder Class"
bookmark: "JsonSchemaBuilder"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.083"
---
**Namespace:** Json.Schema

**Inheritance:**
`JsonSchemaBuilder`
 🡒 
`object`

A fluent-style builder for **Json.Schema.JsonSchema**.

## Methods

### Add(IJsonSchemaKeyword keyword)

Adds a new keyword.

#### Declaration

```c#
public void Add(IJsonSchemaKeyword keyword)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | IJsonSchemaKeyword | The keyword to add. |


### Build()

Builds the schema.

#### Declaration

```c#
public JsonSchema Build()
```


#### Returns

A **Json.Schema.JsonSchema**.

### Get()

Gets a keyword if one has been added.

#### Declaration

```c#
public T Get()
```


#### Returns

The keyword, if it exists; `null` otherwise.

### RecursiveRefRoot()

Creates a new **Json.Schema.JsonSchema**.

#### Declaration

```c#
public static JsonSchema RecursiveRefRoot()
```


#### Returns

A JSON Schema that simply refers back to the recursive root schema.

### RefRoot()

Creates a new **Json.Schema.JsonSchema**.

#### Declaration

```c#
public static JsonSchema RefRoot()
```


#### Returns

A JSON Schema that simply refers back to the root schema.

