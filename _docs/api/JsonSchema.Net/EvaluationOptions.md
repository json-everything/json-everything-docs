---
layout: "page"
title: "EvaluationOptions Class"
bookmark: "EvaluationOptions"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.055"
---
**Namespace:** Json.Schema

**Inheritance:**
`EvaluationOptions`
 🡒 
`object`

Allows configuration of the evaluation process.

## Properties

| Name | Type | Summary |
|---|---|---|
| **AddAnnotationForUnknownKeywords** | bool | Outputs an annotation that lists any unknown keywords.  Can be useful for catching typos. |
| **Culture** | CultureInfo | Gets or sets the culture for error messages.  Overrides **Json.Schema.ErrorMessages.Culture**. |
| **Default** | EvaluationOptions | The default settings. |
| **EvaluateAs** | SpecVersion | Indicates which specification version to process as.  This will filter the keywords of a schema based on their support. |
| **IgnoredAnnotations** | IEnumerable\<Type\> | Gets the set of keyword types from which annotations will be ignored. |
| **OnlyKnownFormats** | bool | Specifies whether the `format` keyword should fail validations for unknown formats.  Default is false. |
| **OutputFormat** | OutputFormat | Specifies the output format. |
| **PreserveDroppedAnnotations** | bool | If enabled, annotations that are dropped as a result of a failing subschema will be reported in a `droppedAnnotations` property in the output. |
| **ProcessCustomKeywords** | bool | Specifies whether custom keywords that aren't defined in vocabularies should be processed.  Default is false. |
| **RequireFormatValidation** | bool | Specifies whether the `format` keyword should be required to provide validation results.  Default is false, which just produces annotations for drafts 2019-09 and prior or follows the behavior set forth by the format-annotation vocabulary requirement in the `$vocabulary` keyword in a meta-schema declaring draft 2020-12. |
| **SchemaRegistry** | SchemaRegistry | The local schema registry.  If a schema is not found here, it will automatically check the global registry as well. |
| **ValidateAgainstMetaSchema** | bool | Indicates whether the schema should be validated against its `$schema` value. this is not typically necessary. |

## Constructors

### EvaluationOptions()

Create a new instance of the **Json.Schema.EvaluationOptions** class.

#### Declaration

```c#
public EvaluationOptions()
```


## Methods

### ClearIgnoredAnnotations()

Clears ignored annotations.

#### Declaration

```c#
public void ClearIgnoredAnnotations()
```


### CollectAnnotationsFrom()

Restores annotation collection for the specified keyword.

#### Declaration

```c#
public void CollectAnnotationsFrom()
```


### From(EvaluationOptions other)

Creates a deep copy of the options.

#### Declaration

```c#
public static EvaluationOptions From(EvaluationOptions other)
```

| Parameter | Type | Description |
|---|---|---|
| other | EvaluationOptions | The source options. |


#### Returns

A new options instance with the same settings.

### IgnoreAllAnnotations()

Ignores annotations from all keywords.

#### Declaration

```c#
public void IgnoreAllAnnotations()
```


### IgnoreAnnotationsFrom()

Ignores annotations from the specified keyword.

#### Declaration

```c#
public void IgnoreAnnotationsFrom()
```


