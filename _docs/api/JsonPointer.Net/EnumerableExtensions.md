---
layout: "page"
title: "EnumerableExtensions Class"
bookmark: "EnumerableExtensions"
permalink: "/api/JsonPointer.Net/:title/"
order: "9.09.01"
---
**Namespace:** Json.Pointer

**Inheritance:**
`EnumerableExtensions`
 🡒 
`object`

More extensions on **System.Collections.Generic.IEnumerable`1**.

## Methods

### GetCollectionHashCode(this IEnumerable\<T\> collection)

Gets a collection-oriented hash code by combining the hash codes of its elements.

#### Declaration

```c#
public static int GetCollectionHashCode(this IEnumerable<T> collection)
```

| Parameter | Type | Description |
|---|---|---|
| collection | IEnumerable\<T\> | The collection of elements. |


#### Returns

A singular integer value that represents the collection.

#### Remarks

This can be used to correctly compare the contents of collections.

