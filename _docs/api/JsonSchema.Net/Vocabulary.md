---
layout: "page"
title: "Vocabulary Class"
bookmark: "Vocabulary"
permalink: "/api/JsonSchema.Net/:title/"
0.01.177"
---
**Namespace:** Json.Schema

**Inheritance:**
`Vocabulary`
 🡒 
`object`

Represents a Draft 2019-09 and later vocabulary.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Id** | Uri | The vocabulary ID. |
| **Keywords** | IReadOnlyCollection\<Type\> | The types of the keywords that are defined by the vocabulary. |

## Constructors

### Vocabulary(string id, params Type[] keywords)

Creates a new **Json.Schema.Vocabulary**.

#### Declaration

```c#
public Vocabulary(string id, params Type[] keywords)
```

| Parameter | Type | Description |
|---|---|---|
| id | string | The vocabulary ID. |
| keywords | params Type[] | The types of the keywords that are defined by the vocabulary. |


### Vocabulary(string id, IEnumerable\<Type\> keywords)

Creates a new **Json.Schema.Vocabulary**.

#### Declaration

```c#
public Vocabulary(string id, IEnumerable<Type> keywords)
```

| Parameter | Type | Description |
|---|---|---|
| id | string | The vocabulary ID. |
| keywords | IEnumerable\<Type\> | The types of the keywords that are defined by the vocabulary. |


