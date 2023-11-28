---
layout: "page"
title: "TypeModel Class"
bookmark: "TypeModel"
permalink: "/api/JsonSchema.Net.CodeGeneration/:title/"
order: "10.07.003"
---
**Namespace:** Json.Schema.CodeGeneration.Model

**Inheritance:**
`TypeModel`
 🡒 
`object`

**Implemented interfaces:**

- IEquatable\<TypeModel\>

Base class for modeling a type.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Name** | string | Gets the name of the type.  Provided by the `title` keyword. |

## Methods

### Equals(TypeModel other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public virtual bool Equals(TypeModel other)
```

| Parameter | Type | Description |
|---|---|---|
| other | TypeModel | An object to compare with this object. |


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

