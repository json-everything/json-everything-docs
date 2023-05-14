---
layout: "page"
title: "EvaluationResults Class"
bookmark: "EvaluationResults"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.30"
---
**Namespace:** Json.Schema

**Inheritance:**
`EvaluationResults`
 🡒 
`object`

The results object for evaluations.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Annotations** | IReadOnlyDictionary\<string, JsonNode\> | The collection of annotations from this node. |
| **Details** | IReadOnlyList\<EvaluationResults\> | The collection of nested results. |
| **Errors** | IReadOnlyDictionary\<string, string\> | The collection of error from this node. |
| **EvaluationPath** | JsonPointer | The schema location that generated this node. |
| **HasAnnotations** | bool | Gets whether this node has annotations. |
| **HasDetails** | bool | Gets whether there are nested results. |
| **HasErrors** | bool | Gets whether this node has errors. |
| **InstanceLocation** | JsonPointer | The instance location that was processed. |
| **IsValid** | bool | Indicates whether the validation passed or failed. |
| **Parent** | EvaluationResults | Gets the parent result. |
| **SchemaLocation** | Uri | The absolute schema location. |

## Methods

### Fail()

Marks the result as invalid.

#### Declaration

```c#
public void Fail()
```


#### Remarks

For better support for customization, consider using the overload that takes parameters.

### Fail(string keyword, string message)

Marks the result as invalid.

#### Declaration

```c#
public void Fail(string keyword, string message)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | string | The keyword that failed validation. |
| message | string | (optional) An error message. |


#### Remarks

For better support for customization, consider using the overload that takes parameters.

### Fail(string keyword, string message, params (string token, object value)[] parameters)

Marks the result as invalid.

#### Declaration

```c#
public void Fail(string keyword, string message, params (string token, object value)[] parameters)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | string | The keyword that failed validation. |
| message | string | The error message. |
| parameters | params (string token, object value)[] | Parameters to replace in the message. |


### GetAllAnnotations(string keyword)

Gets all annotations of a particular data type for the current evaluation level.

#### Declaration

```c#
public IEnumerable<JsonNode> GetAllAnnotations(string keyword)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | string | The key under which the annotation is stored.  Typically a keyword. |


#### Returns

The set of all annotations for the current evaluation level.

### Ignore()

Marks the result of this keyword to be excluded from output.

#### Declaration

```c#
public void Ignore()
```


#### Remarks

This is used for keywords like `$defs` which don't actually have any
annotation or assertion behavior and exist solely to house data.

### SetAnnotation(string keyword, JsonNode value)

Sets an annotation.

#### Declaration

```c#
public void SetAnnotation(string keyword, JsonNode value)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | string | The annotation key.  Typically the name of the keyword. |
| value | JsonNode | The annotation value. |


### ToFlag()

Transforms the results to the `flag` format.

#### Declaration

```c#
public void ToFlag()
```


### ToList()

Transforms the results to the `basic` format.

#### Declaration

```c#
public void ToList()
```


### TryGetAnnotation(string keyword, out JsonNode annotation)

Tries to get an annotation.

#### Declaration

```c#
public bool TryGetAnnotation(string keyword, out JsonNode annotation)
```

| Parameter | Type | Description |
|---|---|---|
| keyword | string | The annotation key. |
| annotation | out JsonNode |  |


#### Returns

The annotation or null.

