---
layout: "page"
title: "PropertyDependency Class"
bookmark: "PropertyDependency"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.81"
---
**Namespace:** Json.Schema

**Inheritance:**
`PropertyDependency`
 🡒 
`object`

**Implemented interfaces:**

- IKeyedSchemaCollector
- IEquatable\<PropertyDependency\>

Represents a single entry in the `propertyDependencies` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Schemas** | IReadOnlyDictionary\<string, JsonSchema\> | Gets the collection of value-dependent schemas for this property. |

## Constructors

### PropertyDependency(IReadOnlyDictionary\<string, JsonSchema\> schemas)

Creates a new instance of **Json.Schema.PropertyDependency**.

#### Declaration

```c#
public PropertyDependency(IReadOnlyDictionary<string, JsonSchema> schemas)
```

| Parameter | Type | Description |
|---|---|---|
| schemas | IReadOnlyDictionary\<string, JsonSchema\> | The collection of value-dependent schemas for this property |


### PropertyDependency(params (string property, JsonSchema schema)[] schemas)

Creates a new instance of **Json.Schema.PropertyDependency**.

#### Declaration

```c#
public PropertyDependency(params (string property, JsonSchema schema)[] schemas)
```

| Parameter | Type | Description |
|---|---|---|
| schemas | params (string property, JsonSchema schema)[] | The collection of value-dependent schemas for this property |


## Methods

### Equals(PropertyDependency other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(PropertyDependency other)
```

| Parameter | Type | Description |
|---|---|---|
| other | PropertyDependency | An object to compare with this object. |


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

### GetHashCode()

Serves as the default hash function.

#### Declaration

```c#
public override int GetHashCode()
```


#### Returns

A hash code for the current object.

