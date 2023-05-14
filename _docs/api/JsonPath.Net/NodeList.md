---
layout: "page"
title: "NodeList Class"
bookmark: "NodeList"
permalink: "/api/JsonPath.Net/:title/"
order: "9.07.14"
---
**Namespace:** Json.Path

**Inheritance:**
`NodeList`
 🡒 
`object`

**Implemented interfaces:**

- IReadOnlyList\<Node\>
- IReadOnlyCollection\<Node\>
- IEnumerable\<Node\>
- IEnumerable

A collection of nodes, generally resulting from an operation or query.

## Fields

| Name | Type | Summary |
|---|---|---|
| **Empty** | NodeList | An empty nodelist. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Count** | int | Gets the number of elements in the collection. |
| **Item** | Node | Gets the element at the specified index in the read-only list. |

## Constructors

### NodeList(IEnumerable\<Node\> nodes)

Creates a new nodelist.

#### Declaration

```c#
public NodeList(IEnumerable<Node> nodes)
```

| Parameter | Type | Description |
|---|---|---|
| nodes | IEnumerable\<Node\> | The nodes. |


## Methods

### GetEnumerator()

Returns an enumerator that iterates through the collection.

#### Declaration

```c#
public IEnumerator<Node> GetEnumerator()
```


#### Returns

An enumerator that can be used to iterate through the collection.

