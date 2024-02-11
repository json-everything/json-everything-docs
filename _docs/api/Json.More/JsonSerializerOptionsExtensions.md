---
layout: "page"
title: "JsonSerializerOptionsExtensions Class"
bookmark: "JsonSerializerOptionsExtensions"
permalink: "/api/Json.More/:title/"
order: "10.12.010"
---
**Namespace:** Json.More

**Inheritance:**
`JsonSerializerOptionsExtensions`
 🡒 
`object`

Provides extension functionality for **System.Text.Json.JsonSerializerOptions**.

## Remarks

Most (if not all) of these extension methods are workarounds for
https://github.com/dotnet/runtime/issues/50205.

## Methods

### GetConverter(this JsonSerializerOptions options, JsonTypeInfo typeInfo)

Returns the converter for the specified type.

#### Declaration

```c#
public static JsonConverter<T> GetConverter(this JsonSerializerOptions options, JsonTypeInfo typeInfo)
```

| Parameter | Type | Description |
|---|---|---|
| options | JsonSerializerOptions | The **System.Text.Json.JsonSerializerOptions** being used. |
| typeInfo | JsonTypeInfo | An explicit typeInfo to use for looking up the Converter. If not provided, options.GetTypeInfo will be used. |


#### Returns

An implementation of **System.Text.Json.Serialization.JsonConverter`1** as determined by the provided options

### Read(this JsonSerializerOptions options, ref Utf8JsonReader reader, JsonTypeInfo\<T\> typeInfo)

Read and convert the JSON to T.

#### Declaration

```c#
public static T Read(this JsonSerializerOptions options, ref Utf8JsonReader reader, JsonTypeInfo<T> typeInfo)
```

| Parameter | Type | Description |
|---|---|---|
| options | JsonSerializerOptions | The **System.Text.Json.JsonSerializerOptions** being used. |
| reader | ref Utf8JsonReader | The **System.Text.Json.Utf8JsonReader** to read from. |
| typeInfo | JsonTypeInfo\<T\> | An explicit typeInfo to use for looking up the Converter. If not provided, options.GetTypeInfo will be used. |


#### Returns

The value that was converted.

#### Remarks

A converter may throw any Exception, but should throw <cref>JsonException</cref> when the JSON is invalid.

### ReadArray(this JsonSerializerOptions options, ref Utf8JsonReader reader, JsonTypeInfo\<T\> typeInfo)

Read and convert the JSON to multiple T.

#### Declaration

```c#
public static T[] ReadArray(this JsonSerializerOptions options, ref Utf8JsonReader reader, JsonTypeInfo<T> typeInfo)
```

| Parameter | Type | Description |
|---|---|---|
| options | JsonSerializerOptions | The **System.Text.Json.JsonSerializerOptions** being used. |
| reader | ref Utf8JsonReader | The **System.Text.Json.Utf8JsonReader** to read from. |
| typeInfo | JsonTypeInfo\<T\> | An explicit typeInfo to use for looking up the Converter. If not provided, options.GetTypeInfo will be used. |


#### Returns

The value that was converted.

#### Remarks

A converter may throw any Exception, but should throw <cref>JsonException</cref> when the JSON is invalid.

### ReadDictionary(this JsonSerializerOptions options, ref Utf8JsonReader reader, JsonTypeInfo\<T\> valueTypeInfo)

Read and convert string/T dictionary to JSON

#### Declaration

```c#
public static Dictionary<string, T> ReadDictionary(this JsonSerializerOptions options, ref Utf8JsonReader reader, JsonTypeInfo<T> valueTypeInfo)
```

| Parameter | Type | Description |
|---|---|---|
| options | JsonSerializerOptions | The **System.Text.Json.JsonSerializerOptions** being used. |
| reader | ref Utf8JsonReader | The **System.Text.Json.Utf8JsonReader** to read from. |
| valueTypeInfo | JsonTypeInfo\<T\> | An explicit typeInfo to use for looking up the Converter. If not provided, options.GetTypeInfo will be used. |


#### Returns

The value that was converted.

### ReadDictionaryList(this JsonSerializerOptions options, ref Utf8JsonReader reader, JsonTypeInfo\<T\> valueTypeInfo)

Read and convert string/list-T dictionary to JSON

#### Declaration

```c#
public static Dictionary<string, List<T>> ReadDictionaryList(this JsonSerializerOptions options, ref Utf8JsonReader reader, JsonTypeInfo<T> valueTypeInfo)
```

| Parameter | Type | Description |
|---|---|---|
| options | JsonSerializerOptions | The **System.Text.Json.JsonSerializerOptions** being used. |
| reader | ref Utf8JsonReader | The **System.Text.Json.Utf8JsonReader** to read from. |
| valueTypeInfo | JsonTypeInfo\<T\> | An explicit typeInfo to use for looking up the Converter. If not provided, options.GetTypeInfo will be used. |


#### Returns

The value that was converted.

### ReadList(this JsonSerializerOptions options, ref Utf8JsonReader reader, JsonTypeInfo\<T\> typeInfo)

Read and convert the JSON to multiple T.

#### Declaration

```c#
public static List<T> ReadList(this JsonSerializerOptions options, ref Utf8JsonReader reader, JsonTypeInfo<T> typeInfo)
```

| Parameter | Type | Description |
|---|---|---|
| options | JsonSerializerOptions | The **System.Text.Json.JsonSerializerOptions** being used. |
| reader | ref Utf8JsonReader | The **System.Text.Json.Utf8JsonReader** to read from. |
| typeInfo | JsonTypeInfo\<T\> | An explicit typeInfo to use for looking up the Converter. If not provided, options.GetTypeInfo will be used. |


#### Returns

The value that was converted.

#### Remarks

A converter may throw any Exception, but should throw <cref>JsonException</cref> when the JSON is invalid.

### Write(this JsonSerializerOptions options, Utf8JsonWriter writer, T value, JsonTypeInfo\<T\> typeInfo)

Write a T to JSON.

#### Declaration

```c#
public static void Write(this JsonSerializerOptions options, Utf8JsonWriter writer, T value, JsonTypeInfo<T> typeInfo)
```

| Parameter | Type | Description |
|---|---|---|
| options | JsonSerializerOptions | The **System.Text.Json.JsonSerializerOptions** being used. |
| writer | Utf8JsonWriter | The **System.Text.Json.Utf8JsonReader** to read from. |
| value | T | The value to serialize. |
| typeInfo | JsonTypeInfo\<T\> | An explicit typeInfo to use for looking up the Converter. If not provided, options.GetTypeInfo will be used. |


#### Remarks

A converter may throw any Exception, but should throw <cref>JsonException</cref> when the JSON is invalid.

### Write(this JsonSerializerOptions options, Utf8JsonWriter writer, object value, Type inputType)



#### Declaration

```c#
public static void Write(this JsonSerializerOptions options, Utf8JsonWriter writer, object value, Type inputType)
```

| Parameter | Type | Description |
|---|---|---|
| options | JsonSerializerOptions | The **System.Text.Json.JsonSerializerOptions** being used. |
| writer | Utf8JsonWriter | The **System.Text.Json.Utf8JsonReader** to read from. |
| value | object | The value to serialize. |
| inputType | Type | The type to serialize. |


#### Remarks

A converter may throw any Exception, but should throw <cref>JsonException</cref> when the JSON is invalid.

### WriteDictionary(this JsonSerializerOptions options, Utf8JsonWriter writer, IEnumerable\<KeyValuePair\<string, T\>\> values, JsonTypeInfo\<T\> valueTypeInfo)

Convert and write string/T dictionary to JSON

#### Declaration

```c#
public static void WriteDictionary(this JsonSerializerOptions options, Utf8JsonWriter writer, IEnumerable<KeyValuePair<string, T>> values, JsonTypeInfo<T> valueTypeInfo)
```

| Parameter | Type | Description |
|---|---|---|
| options | JsonSerializerOptions | The **System.Text.Json.JsonSerializerOptions** being used. |
| writer | Utf8JsonWriter | The **System.Text.Json.Utf8JsonWriter** to write to. |
| values | IEnumerable\<KeyValuePair\<string, T\>\> | The collection of values to convert. |
| valueTypeInfo | JsonTypeInfo\<T\> | An explicit typeInfo to use for looking up the Converter. If not provided, options.GetTypeInfo will be used. |


### WriteDictionaryList(this JsonSerializerOptions options, Utf8JsonWriter writer, IEnumerable\<KeyValuePair\<string, IReadOnlyList\<T\>\>\> values, JsonTypeInfo\<T\> valueTypeInfo)

Convert and write string/list-T dictionary to JSON

#### Declaration

```c#
public static void WriteDictionaryList(this JsonSerializerOptions options, Utf8JsonWriter writer, IEnumerable<KeyValuePair<string, IReadOnlyList<T>>> values, JsonTypeInfo<T> valueTypeInfo)
```

| Parameter | Type | Description |
|---|---|---|
| options | JsonSerializerOptions | The **System.Text.Json.JsonSerializerOptions** being used. |
| writer | Utf8JsonWriter | The **System.Text.Json.Utf8JsonWriter** to write to. |
| values | IEnumerable\<KeyValuePair\<string, IReadOnlyList\<T\>\>\> | The collection of values to convert. |
| valueTypeInfo | JsonTypeInfo\<T\> | An explicit typeInfo to use for looking up the Converter. If not provided, options.GetTypeInfo will be used. |


### WriteList(this JsonSerializerOptions options, Utf8JsonWriter writer, IEnumerable\<T\> values, JsonTypeInfo\<T\> typeInfo)

Convert and write multiple T to JSON

#### Declaration

```c#
public static void WriteList(this JsonSerializerOptions options, Utf8JsonWriter writer, IEnumerable<T> values, JsonTypeInfo<T> typeInfo)
```

| Parameter | Type | Description |
|---|---|---|
| options | JsonSerializerOptions | The **System.Text.Json.JsonSerializerOptions** being used. |
| writer | Utf8JsonWriter | The **System.Text.Json.Utf8JsonWriter** to write to. |
| values | IEnumerable\<T\> | The collection of values to convert. |
| typeInfo | JsonTypeInfo\<T\> | An explicit typeInfo to use for looking up the Converter. If not provided, options.GetTypeInfo will be used. |


