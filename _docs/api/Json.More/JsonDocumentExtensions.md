---
layout: "page"
title: "JsonDocumentExtensions Class"
bookmark: "JsonDocumentExtensions"
permalink: "/api/Json.More/:title/"
0.12.002"
---
**Namespace:** Json.More

**Inheritance:**
`JsonDocumentExtensions`
 🡒 
`object`

Provides extension functionality for **System.Text.Json.JsonDocument**.

## Methods

### IsEquivalentTo(this JsonDocument a, JsonDocument b)

Determines JSON-compatible equivalence.

#### Declaration

```c#
public static bool IsEquivalentTo(this JsonDocument a, JsonDocument b)
```

| Parameter | Type | Description |
|---|---|---|
| a | JsonDocument | The first document. |
| b | JsonDocument | The second document. |


#### Returns

`true` if the documents are equivalent; `false` otherwise.

### ToJsonDocument(this T value, JsonSerializerOptions options)

Converts an object to a **System.Text.Json.JsonDocument**.

#### Declaration

```c#
public static JsonDocument ToJsonDocument(this T value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| value | T | The value to convert. |
| options | JsonSerializerOptions | (optional) JSON serialization options. |


#### Returns

A **System.Text.Json.JsonDocument** representing the vale.

