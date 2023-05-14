---
layout: "page"
title: "JsonWriterExtensions Class"
bookmark: "JsonWriterExtensions"
permalink: "/api/JsonLogic/:title/"
order: "9.10.12"
---
**Namespace:** Json.Logic

**Inheritance:**
`JsonWriterExtensions`
 🡒 
`object`

Provides extended functionality for serializing rules.

## Methods

### WriteRule(this Utf8JsonWriter writer, Rule rule, JsonSerializerOptions options)

Writes a rule to the stream, taking its specific type into account.

#### Declaration

```c#
public static void WriteRule(this Utf8JsonWriter writer, Rule rule, JsonSerializerOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer. |
| rule | Rule | The rule. |
| options | JsonSerializerOptions | Serializer options. |


### WriteRules(this Utf8JsonWriter writer, IEnumerable\<Rule\> rules, JsonSerializerOptions options, bool unwrapSingle)

Writes a rule to the stream, taking its specific type into account.

#### Declaration

```c#
public static void WriteRules(this Utf8JsonWriter writer, IEnumerable<Rule> rules, JsonSerializerOptions options, bool unwrapSingle)
```

| Parameter | Type | Description |
|---|---|---|
| writer | Utf8JsonWriter | The writer. |
| rules | IEnumerable\<Rule\> | The rules. |
| options | JsonSerializerOptions | Serializer options. |
| unwrapSingle | bool | Unwraps single items instead of writing an array. |


