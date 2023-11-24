---
layout: "page"
title: "PatchExtensions Class"
bookmark: "PatchExtensions"
permalink: "/api/JsonPatch.Net/:title/"
0.09.002"
---
**Namespace:** Json.Patch

**Inheritance:**
`PatchExtensions`
 🡒 
`object`

Provides extension methods for **Json.Patch.JsonPatch**.

## Methods

### Apply(this JsonPatch patch, T obj, JsonSerializerOptions options)

Apply a patch to an object to transform its data.

#### Declaration

```c#
public static T Apply(this JsonPatch patch, T obj, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| patch | JsonPatch | The patch |
| obj | T | The object |
| options | JsonSerializerOptions | Serializer options. |


#### Returns

New instance of patched object

### Apply(this JsonPatch patch, TOriginal obj, JsonSerializerOptions options)

Apply a patch to an object to transform it to another type.

#### Declaration

```c#
public static TTarget Apply(this JsonPatch patch, TOriginal obj, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| patch | JsonPatch | The patch |
| obj | TOriginal | The object |
| options | JsonSerializerOptions | Serializer options. |


#### Returns

New instance of patched object

### CreatePatch(this JsonNode original, JsonNode target)

Create JsonPatch from difference between original and target

#### Declaration

```c#
public static JsonPatch CreatePatch(this JsonNode original, JsonNode target)
```

| Parameter | Type | Description |
|---|---|---|
| original | JsonNode | Original object |
| target | JsonNode | target object |


#### Returns

JsonPatch

### CreatePatch(this TOriginal original, TTarget target, JsonSerializerOptions options)

Creates a **Json.Patch.JsonPatch** by analyzing the difference between original and target versions.

#### Declaration

```c#
public static JsonPatch CreatePatch(this TOriginal original, TTarget target, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| original | TOriginal | The original object. |
| target | TTarget | The target object. |
| options | JsonSerializerOptions | Serializer options. |


#### Returns

A **Json.Patch.JsonPatch** that represents the transformation.

