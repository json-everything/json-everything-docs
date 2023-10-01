---
layout: "page"
title: "ICodeWriter Interface"
bookmark: "ICodeWriter"
permalink: "/api/JsonSchema.Net.CodeGeneration/:title/"
order: "9.07.002"
---
**Namespace:** Json.Schema.CodeGeneration.Language

**Inheritance:**
`ICodeWriter`

Converts the type model into code text.

## Methods

### TransformName(string original)

Transforms a name as it appears in a JSON string into a language-appropriate type or member name.

#### Declaration

```c#
public abstract string TransformName(string original)
```

| Parameter | Type | Description |
|---|---|---|
| original | string | The JSON string. |


#### Returns

The transformed name, or null if the string is unsupported.

### Write(StringBuilder builder, TypeModel model)

Converts a single type model into code text.

#### Declaration

```c#
public abstract void Write(StringBuilder builder, TypeModel model)
```

| Parameter | Type | Description |
|---|---|---|
| builder | StringBuilder | A string builder. |
| model | TypeModel | A type model. |


