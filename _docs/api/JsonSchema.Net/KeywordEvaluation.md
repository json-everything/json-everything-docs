---
layout: "page"
title: "KeywordEvaluation Struct"
bookmark: "KeywordEvaluation"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.069"
---
**Namespace:** Json.Schema

**Inheritance:**
`KeywordEvaluation`
 🡒 
`ValueType`
 🡒 
`object`

Represents the result of evaluating a keyword, including its validity, associated annotation, and any subschema
evaluation results.

## Remarks

Use this struct to capture the outcome of a keyword evaluation, such as in schema validation
            scenarios. The struct provides information about the keyword, whether it was valid, any related annotation data,
            subschema results, and error information if applicable. The static Ignore field can be used to represent a keyword

## Fields

| Name | Type | Summary |
|---|---|---|
| **Ignore** | KeywordEvaluation | Represents a special evaluation that indicates a keyword should be ignored during processing. |

## Properties

| Name | Type | Summary |
|---|---|---|
| **Annotation** | JsonElement? | Gets the a JSON annotation produced by the keyword. |
| **ContributesToValidation** | bool | Gets a value indicating whether this member participates in validation. |
| **Details** | EvaluationResults[] | Gets the collection of evaluation results produced by subschemas. |
| **Error** | string | If validation failed, this may get an error message. |
| **IsValid** | bool | Gets a value indicating whether a validation succeeded. |
| **Keyword** | string | Gets the keyword that produced the evaluation. |

## Constructors

### KeywordEvaluation()

Initializes a new instance of the KeywordEvaluation type.

#### Declaration

```c#
public KeywordEvaluation()
```


