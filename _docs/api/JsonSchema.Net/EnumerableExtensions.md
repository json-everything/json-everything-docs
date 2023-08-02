---
layout: "page"
title: "EnumerableExtensions Class"
bookmark: "EnumerableExtensions"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.026"
---
**Namespace:** Json.Schema

**Inheritance:**
`EnumerableExtensions`
 🡒 
`object`

More extensions on **System.Collections.Generic.IEnumerable`1**.

## Methods

### ContentsEqual(this IReadOnlyList\<T\> collection, IReadOnlyList\<T\> other)

Determines contents-based equality: each element appears equally in each set.

#### Declaration

```c#
public static bool ContentsEqual(this IReadOnlyList<T> collection, IReadOnlyList<T> other)
```

| Parameter | Type | Description |
|---|---|---|
| collection | IReadOnlyList\<T\> | The first collection. |
| other | IReadOnlyList\<T\> | The second collection. |


#### Returns

`true` if the collections contain the same number of the same elements; `false` otherwise.

### ContentsEqual(this IReadOnlyList\<T\> collection, IReadOnlyList\<T\> other, IEqualityComparer\<T\> comparer)

Determines contents-based equality: each element appears equally in each set.

#### Declaration

```c#
public static bool ContentsEqual(this IReadOnlyList<T> collection, IReadOnlyList<T> other, IEqualityComparer<T> comparer)
```

| Parameter | Type | Description |
|---|---|---|
| collection | IReadOnlyList\<T\> | The first collection. |
| other | IReadOnlyList\<T\> | The second collection. |
| comparer | IEqualityComparer\<T\> | A custom equality comparer. |


#### Returns

`true` if the collections contain the same number of the same elements; `false` otherwise.

### GetStringDictionaryHashCode(this IDictionary\<string, T\> collection)

Gets a string-dictionary-oriented hash code by combining the hash codes of its elements.

#### Declaration

```c#
public static int GetStringDictionaryHashCode(this IDictionary<string, T> collection)
```

| Parameter | Type | Description |
|---|---|---|
| collection | IDictionary\<string, T\> | The collection of elements. |


#### Returns

A singular integer value that represents the collection.

#### Remarks

This can be used to correctly compare the contents of string dictionaries where
key ordering is not important.

### GetStringDictionaryHashCode(this IReadOnlyDictionary\<string, T\> collection)

Gets a string-dictionary-oriented hash code by combining the hash codes of its elements.

#### Declaration

```c#
public static int GetStringDictionaryHashCode(this IReadOnlyDictionary<string, T> collection)
```

| Parameter | Type | Description |
|---|---|---|
| collection | IReadOnlyDictionary\<string, T\> | The collection of elements. |


#### Returns

A singular integer value that represents the collection.

#### Remarks

This can be used to correctly compare the contents of string dictionaries where
key ordering is not important.

### GetUnorderedCollectionHashCode(this IEnumerable\<T\> collection)

Gets a collection-oriented hash code by combining the hash codes of its elements.

#### Declaration

```c#
public static int GetUnorderedCollectionHashCode(this IEnumerable<T> collection)
```

| Parameter | Type | Description |
|---|---|---|
| collection | IEnumerable\<T\> | The collection of elements. |


#### Returns

A singular integer value that represents the collection.

#### Remarks

This can be used to correctly compare the contents of collections.

