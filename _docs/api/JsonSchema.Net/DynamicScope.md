---
layout: "page"
title: "DynamicScope Class"
bookmark: "DynamicScope"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.23"
---
**Namespace:** Json.Schema

**Inheritance:**
`DynamicScope`
 🡒 
`object`

**Implemented interfaces:**

- IEnumerable\<Uri\>
- IEnumerable

Tracks the dynamic scope during schema evaluation.

## Remarks

Dynamic scope is the collection of URIs (defined by `$id`) represented by the evaluation path.

## Properties

| Name | Type | Summary |
|---|---|---|
| **LocalScope** | Uri | Gets the local scope, or the most recent schema URI encountered. |

## Methods

### GetEnumerator()

Returns an enumerator that iterates through the collection.

#### Declaration

```c#
public IEnumerator<Uri> GetEnumerator()
```


#### Returns

An enumerator that can be used to iterate through the collection.

