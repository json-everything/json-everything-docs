---
layout: "page"
title: "DynamicScope Class"
bookmark: "DynamicScope"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.045"
---
**Namespace:** Json.Schema

**Inheritance:**
`DynamicScope`
 🡒 
`object`

**Implemented interfaces:**

- IEnumerable\<Uri\>
- IEnumerable
- IEquatable\<DynamicScope\>

Tracks the dynamic scope during schema evaluation.

## Remarks

Dynamic scope is the collection of URIs (defined by `$id`) represented by the evaluation path.

## Properties

| Name | Type | Summary |
|---|---|---|
| **LocalScope** | Uri | Gets the local scope, or the most recent schema URI encountered. |

## Methods

### Equals(DynamicScope other)

Indicates whether the current object is equal to another object of the same type.

#### Declaration

```c#
public bool Equals(DynamicScope other)
```

| Parameter | Type | Description |
|---|---|---|
| other | DynamicScope | An object to compare with this object. |


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

### GetEnumerator()

Returns an enumerator that iterates through the collection.

#### Declaration

```c#
public IEnumerator<Uri> GetEnumerator()
```


#### Returns

An enumerator that can be used to iterate through the collection.

### GetHashCode()

Serves as the default hash function.

#### Declaration

```c#
public override int GetHashCode()
```


#### Returns

A hash code for the current object.

