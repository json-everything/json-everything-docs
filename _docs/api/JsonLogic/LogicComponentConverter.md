---
layout: "page"
title: "LogicComponentConverter Class"
bookmark: "LogicComponentConverter"
permalink: "/api/JsonLogic/:title/"
order: "9.10.016"
---
**Namespace:** Json.Logic

**Inheritance:**
`LogicComponentConverter`
 🡒 
`JsonConverter<Rule>`
 🡒 
`JsonConverter`
 🡒 
`object`

Provides serialization for all **Json.Logic.Rule** derivatives.

## Properties

| Name | Type | Summary |
|---|---|---|
| **HandleNull** | bool | Indicates whether \<see langword="null" /\> should be passed to the converter<br>on serialization, and whether **System.Text.Json.JsonTokenType.Null**<br>should be passed on deserialization. |
| **SaveSource** | bool | Gets or sets whether to save the source data for re-serialization; default is true. |

## Methods

### Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)

Reads and converts the JSON to type **Json.Logic.Rule**.

#### Declaration

```c#
public override Rule Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| reader | ref Utf8JsonReader | The reader. |
| typeToConvert | Type | The type to convert. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


#### Returns

The converted value.

### Write(Utf8JsonWriter writer, Rule value, JsonSerializerOptions options)

Writes a specified value as JSON.

#### Declaration

```c#
public override void Write(Utf8JsonWriter writer, Rule value, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer to write to. |
| value | Rule | The value to convert to JSON. |
| options | JsonSerializerOptions | An object that specifies serialization options to use. |


