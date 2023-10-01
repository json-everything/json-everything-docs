---
layout: "page"
title: "JsonSerializerOptionsExtensions Class"
bookmark: "JsonSerializerOptionsExtensions"
permalink: "/api/Json.More/:title/"
order: "9.12.009"
---
**Namespace:** Json.More

**Inheritance:**
`JsonSerializerOptionsExtensions`
 🡒 
`object`

Provides extension functionality for **System.Text.Json.JsonSerializerOptions**.

## Methods

### GetConverter(this JsonSerializerOptions options)


#### Declaration

```c#
public static JsonConverter<T> GetConverter(this JsonSerializerOptions options)
```


#### Returns


### Read(this JsonSerializerOptions options, ref Utf8JsonReader reader)

Read and convert the JSON to T.

#### Declaration

```c#
public static T Read(this JsonSerializerOptions options, ref Utf8JsonReader reader)
```

| Parameter | Type | Description |
|---|---|---|
| options | JsonSerializerOptions | The **System.Text.Json.JsonSerializerOptions** being used. |
| reader | ref Utf8JsonReader | The **System.Text.Json.Utf8JsonReader** to read from. |


#### Returns

The value that was converted.

#### Remarks

A converter may throw any Exception, but should throw <cref>JsonException</cref> when the JSON is invalid.

