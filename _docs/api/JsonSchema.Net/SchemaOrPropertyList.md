---
layout: "page"
title: "SchemaOrPropertyList Class"
bookmark: "SchemaOrPropertyList"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.153"
---
**Namespace:** Json.Schema

**Inheritance:**
`SchemaOrPropertyList`
 🡒 
`object`

**Implemented interfaces:**

- IEquatable\<SchemaOrPropertyList\>

A holder for either a schema dependency or a requirements dependency.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Requirements** | List\<string\> | The property dependency. |
| **Schema** | JsonSchema | The schema dependency. |

## Constructors

### SchemaOrPropertyList(JsonSchema schema)

Creates a schema dependency.

#### Declaration

```c#
public SchemaOrPropertyList(JsonSchema schema)
```

| Parameter | Type | Description |
|---|---|---|
| schema | JsonSchema | The schema dependency. |


### SchemaOrPropertyList(IEnumerable\<string\> requirements)

Creates a property dependency.

#### Declaration

```c#
public SchemaOrPropertyList(IEnumerable<string> requirements)
```

| Parameter | Type | Description |
|---|---|---|
| requirements | IEnumerable\<string\> | The property dependency. |


## Methods

### Equals(SchemaOrPropertyList other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(SchemaOrPropertyList other)
```

| Parameter | Type | Description |
|---|---|---|
| other | SchemaOrPropertyList | An object to compare with this object. |


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

