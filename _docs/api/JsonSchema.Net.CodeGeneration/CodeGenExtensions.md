---
layout: "page"
title: "CodeGenExtensions Class"
bookmark: "CodeGenExtensions"
permalink: "/api/JsonSchema.Net.CodeGeneration/:title/"
0.07.000"
---
**Namespace:** Json.Schema.CodeGeneration

**Inheritance:**
`CodeGenExtensions`
 🡒 
`object`

Generates code from a **Json.Schema.JsonSchema**.

## Methods

### GenerateCode(this JsonSchema schema, ICodeWriter codeWriter, EvaluationOptions options)

Generates code from a **Json.Schema.JsonSchema**.

#### Declaration

```c#
public static string GenerateCode(this JsonSchema schema, ICodeWriter codeWriter, EvaluationOptions options)
```

| Parameter | Type | Description |
|---|---|---|
| schema | JsonSchema | The JSON Schema object. |
| codeWriter | ICodeWriter | The writer for the output language. |
| options | EvaluationOptions | Evaluation options. |


#### Returns



