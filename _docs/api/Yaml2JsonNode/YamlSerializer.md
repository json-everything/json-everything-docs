---
layout: "page"
title: "YamlSerializer Class"
bookmark: "YamlSerializer"
permalink: "/api/Yaml2JsonNode/:title/"
order: "10.13.001"
---
**Namespace:** Yaml2JsonNode

**Inheritance:**
`YamlSerializer`
 🡒 
`object`

Provides common serializer functionality.

## Methods

### Deserialize(string yamlText, JsonSerializerOptions options)

Deserializes the first YAML document found in text to an object.

#### Declaration

```c#
public static T Deserialize(string yamlText, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| yamlText | string | The YAML text. |
| options | JsonSerializerOptions |  |


#### Returns

The object or null.

### Parse(string yamlText)

Parses YAML text into a stream (collection of documents).

#### Declaration

```c#
public static YamlStream Parse(string yamlText)
```

| Parameter | Type | Description |
|---|---|---|
| yamlText | string | The YAML text. |


#### Returns

A YAML stream representing the content of the text.

### Serialize(YamlStream yaml, Action\<SerializerBuilder\> configure)

Serializes a YAML stream (a collection of documents) to a string.

#### Declaration

```c#
public static string Serialize(YamlStream yaml, Action<SerializerBuilder> configure)
```

| Parameter | Type | Description |
|---|---|---|
| yaml | YamlStream | The stream. |
| configure | Action\<SerializerBuilder\> | (optional) YAML serializer configuration method. |


#### Returns

The YAML string.

### Serialize(YamlDocument yaml, Action\<SerializerBuilder\> configure)

Serializes a YAML document to a string.

#### Declaration

```c#
public static string Serialize(YamlDocument yaml, Action<SerializerBuilder> configure)
```

| Parameter | Type | Description |
|---|---|---|
| yaml | YamlDocument | The document. |
| configure | Action\<SerializerBuilder\> | (optional) YAML serializer configuration method. |


#### Returns

The YAML string.

### Serialize(YamlNode yaml, Action\<SerializerBuilder\> configure)

Serializes a YAML node to a string

#### Declaration

```c#
public static string Serialize(YamlNode yaml, Action<SerializerBuilder> configure)
```

| Parameter | Type | Description |
|---|---|---|
| yaml | YamlNode | The node. |
| configure | Action\<SerializerBuilder\> | (optional) YAML serializer configuration method. |


#### Returns

The YAML string.

### Serialize(T obj, JsonSerializerOptions options, Action\<SerializerBuilder\> configure)

Serializes an object to a YAML string

#### Declaration

```c#
public static string Serialize(T obj, JsonSerializerOptions options, Action<SerializerBuilder> configure)
```

| Parameter | Type | Description |
|---|---|---|
| obj | T | The object. |
| options | JsonSerializerOptions | (optional) JSON serializer options. |
| configure | Action\<SerializerBuilder\> | (optional) YAML serializer configuration method. |


#### Returns

The YAML string.

