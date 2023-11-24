---
layout: "page"
title: "YamlConverter Class"
bookmark: "YamlConverter"
permalink: "/api/Yaml2JsonNode/:title/"
0.13.000"
---
**Namespace:** Yaml2JsonNode

**Inheritance:**
`YamlConverter`
 🡒 
`object`

Provides extensions to convert YAML models to JSON models.

## Methods

### ToJsonNode(this YamlStream yaml)

Converts all of the documents in a YAML stream to **System.Text.Json.Nodes.JsonNode**s.

#### Declaration

```c#
public static IEnumerable<JsonNode> ToJsonNode(this YamlStream yaml)
```

| Parameter | Type | Description |
|---|---|---|
| yaml | YamlStream | The YAML stream. |


#### Returns

A collection of nodes representing the YAML documents in the stream.

### ToJsonNode(this YamlDocument yaml)

Converts a single YAML document to a **System.Text.Json.Nodes.JsonNode**.

#### Declaration

```c#
public static JsonNode ToJsonNode(this YamlDocument yaml)
```

| Parameter | Type | Description |
|---|---|---|
| yaml | YamlDocument | The YAML document. |


#### Returns

A `JsonNode` representative of the YAML document.

### ToJsonNode(this YamlNode yaml)

Converts a single YAML node to a **System.Text.Json.Nodes.JsonNode**.

#### Declaration

```c#
public static JsonNode ToJsonNode(this YamlNode yaml)
```

| Parameter | Type | Description |
|---|---|---|
| yaml | YamlNode | The YAML node. |


#### Returns

A `JsonNode` representative of the YAML node.

### ToYamlNode(this JsonNode json)

Converts a single JSON node to a **YamlDotNet.RepresentationModel.YamlNode**.

#### Declaration

```c#
public static YamlNode ToYamlNode(this JsonNode json)
```

| Parameter | Type | Description |
|---|---|---|
| json | JsonNode |  |


#### Returns



