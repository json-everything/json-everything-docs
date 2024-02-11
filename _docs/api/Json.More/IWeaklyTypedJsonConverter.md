---
layout: "page"
title: "IWeaklyTypedJsonConverter Interface"
bookmark: "IWeaklyTypedJsonConverter"
permalink: "/api/Json.More/:title/"
order: "10.12.001"
---
**Namespace:** Json.More

**Inheritance:**
`IWeaklyTypedJsonConverter`

Interface to enable JsonConverter implementations to call other JsonConverter's Read methods
without statically being aware of their type parameters.

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to object?.

#### Declaration

```c#
public abstract object Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### Write(Utf8JsonWriter writer, object value, JsonSerializerOptions options, JsonTypeInfo typeInfo)

Writes a specified value as JSON.

#### Declaration

```c#
public abstract void Write(Utf8JsonWriter writer, object value, JsonSerializerOptions options, JsonTypeInfo typeInfo)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | object | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |
| typeInfo | JsonTypeInfo | The **System.Text.Json.Serialization.Metadata.JsonTypeInfo** for the value being serialized. |


