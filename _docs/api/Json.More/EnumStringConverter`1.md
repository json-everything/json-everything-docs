---
layout: "page"
title: "EnumStringConverter<T> Class"
bookmark: "EnumStringConverter`1"
permalink: "/api/Json.More/:title/"
order: "9.12.000"
---
**Namespace:** Json.More

**Inheritance:**
`EnumStringConverter<T>`
 🡒 
`JsonConverter<T>`
 🡒 
`JsonConverter`
 🡒 
`object`


## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool |  |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to type <typeparamref name="T" />.

#### Declaration

```c#
public override T Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### ReadAsPropertyName(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads a dictionary key from a JSON property name.

#### Declaration

```c#
public override T ReadAsPropertyName(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The **System.Text.Json.Utf8JsonReader** to read from. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | The options to use when reading the value. |


#### Returns

The value that was converted.

### Write(Utf8JsonWriter writer, T value, JsonSerializerOptions options)

Writes a specified value as JSON.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, T value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | T | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


### WriteAsPropertyName(Utf8JsonWriter writer, T value, JsonSerializerOptions options)

Writes a dictionary key as a JSON property name.

#### Declaration

```c#
public override void WriteAsPropertyName(Utf8JsonWriter writer, T value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The **System.Text.Json.Utf8JsonWriter** to write to. |
| value | T | The value to convert. The value of **System.Text.Json.Serialization.JsonConverter`1.HandleNull** determines if the converter handles \<see langword="null" /\> values. |
| options | JsonSerializerOptions | The options to use when writing the value. |


