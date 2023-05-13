---
layout: "page"
title: "ErrorMessages Class"
bookmark: "ErrorMessages"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.07"
---
**Namespace:** Json.Schema

**Inheritance:**
`ErrorMessages`
 🡒 
`object`

Manages error messages returned by built-in keywords.

## Remarks

Default messages are provided by culture-specific resource files.
            
Many messages support tokens in the format `[[foo]]`.
Each message will specify the tokens it supports.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Const** | string | Gets or sets the error message for **Json.Schema.ConstKeyword**. |
| **ContainsTooFew** | string | Gets or sets the error message for **Json.Schema.ContainsKeyword** when there are too few matching items. |
| **ContainsTooMany** | string | Gets or sets the error message for **Json.Schema.ContainsKeyword** when there are too many matching items. |
| **Dependencies** | string | Gets or sets the error message for **Json.Schema.DependenciesKeyword**. |
| **DependentRequired** | string | Gets or sets the error message for **Json.Schema.DependentRequiredKeyword**. |
| **DependentSchemas** | string | Gets or sets the error message for **Json.Schema.DependentSchemasKeyword**. |
| **Enum** | string | Gets or sets the error message for **Json.Schema.EnumKeyword**. |
| **Culture** | CultureInfo | Gets or sets a culture to use for error messages.  Default is **System.Globalization.CultureInfo.CurrentCulture**. |
| **ExclusiveMaximum** | string | Gets or sets the error message for **Json.Schema.ExclusiveMaximumKeyword**. |
| **ExclusiveMinimum** | string | Gets or sets the error message for **Json.Schema.ExclusiveMinimumKeyword**. |
| **UnknownFormat** | string | Gets or sets the error message for an unknown format. |
| **Format** | string | Gets or sets the error message for the **Json.Schema.FormatKeyword**. |
| **FormatWithDetail** | string | Gets or sets the error message for the **Json.Schema.FormatKeyword** with<br>additional information from the format validation. |
| **InvalidItemsForm** | string | Gets or sets the error message for when **Json.Schema.ItemsKeyword** is specified<br>with an array of schemas in a draft 2020-12 or later schema. |
| **FalseSchema** | string | Gets or sets the error message for the "false" schema. |
| **Maximum** | string | Gets or sets the error message for **Json.Schema.MinimumKeyword**. |
| **MaxItems** | string | Gets or sets the error message for **Json.Schema.MaxItemsKeyword**. |
| **MaxLength** | string | Gets or sets the error message for **Json.Schema.MaxLengthKeyword**. |
| **MaxProperties** | string | Gets or sets the error message for **Json.Schema.MaxPropertiesKeyword**. |
| **Minimum** | string | Gets or sets the error message for **Json.Schema.MinimumKeyword**. |
| **MinItems** | string | Gets or sets the error message for **Json.Schema.MinItemsKeyword**. |
| **MinLength** | string | Gets or sets the error message for **Json.Schema.MinLengthKeyword**. |
| **MinProperties** | string | Gets or sets the error message for **Json.Schema.MinPropertiesKeyword**. |
| **MultipleOf** | string | Gets or sets the error message for **Json.Schema.MultipleOfKeyword**. |
| **OneOf** | string | Gets or sets the error message for **Json.Schema.OneOfKeyword**. |
| **InvalidPattern** | string | Gets or sets the error message for when the **Json.Schema.PatternKeyword** contains<br>an invalid or unsupported regular expression. |
| **Pattern** | string | Gets or sets the error message for **Json.Schema.OneOfKeyword**. |
| **Required** | string | Gets or sets the error message for **Json.Schema.RequiredKeyword**. |
| **MetaSchemaValidation** | string | Gets or sets the error message for when the schema cannot be validated<br>against the meta-schema. |
| **Type** | string | Gets or sets the error message for **Json.Schema.TypeKeyword**. |
| **UniqueItems** | string | Gets or sets the error message for **Json.Schema.UniqueItemsKeyword**. |
| **UnknownVocabularies** | string | Gets or sets the error message for when a vocabulary is unknown but required. |
## Methods

### ReplaceTokens(this string message, params (string token, object value)[] parameters)

Replaces tokens in the form of `[[token]]` with a specified value, serialized as JSON.

#### Declaration

```c#
public static string ReplaceTokens(this string message, params (string token, object value)[] parameters)
```
| Parameter | Type | Description |
|---|---|---|
| message | string | The message template. |
| parameters | params (string token, object value)[] | Tuple of the token name (without brackets) and the value which will replace it. |

#### Returns

The detokenized string.

