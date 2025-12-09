---
layout: "page"
title: "DataRegistryExtensions Class"
bookmark: "DataRegistryExtensions"
permalink: "/api/JsonSchema.Net.Data/:title/"
order: "10.02.003"
---
**Namespace:** Json.Schema.Data

**Inheritance:**
`DataRegistryExtensions`
 🡒 
`object`

Provides extension methods for associating a custom **Json.Schema.Data.DataRegistry** with **Json.Schema.BuildOptions**
instances.

## Remarks

These methods enable attaching and retrieving a **Json.Schema.Data.DataRegistry** to a **Json.Schema.BuildOptions** object without modifying its structure. This is useful for scenarios where build options need
            to be linked with specific data registries at runtime. The association is maintained using a weak reference, so it

## Methods

### GetDataRegistry(this BuildOptions options)

Retrieves the data registry associated with the specified build options.

#### Declaration

```c#
public static DataRegistry GetDataRegistry(this BuildOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| options | BuildOptions | The build options for which to obtain the corresponding data registry. |


#### Returns

The data registry linked to the provided build options. If no specific registry is associated, returns the global

### SetDataRegistry(this BuildOptions options, DataRegistry registry)

Associates the specified data registry with the given build options instance.

#### Declaration

```c#
public static void SetDataRegistry(this BuildOptions options, DataRegistry registry)
```

| Parameter | Type | Description |
|---|---|---|
| options | BuildOptions | The build options instance to which the data registry will be attached. Cannot be null. |
| registry | DataRegistry | The data registry to associate with the build options. Cannot be null. |


