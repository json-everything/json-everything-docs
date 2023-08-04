---
layout: "page"
title: "ErrorMessages Class"
bookmark: "ErrorMessages"
permalink: "/api/JsonSchema.Net/:title/"
order: "9.01.028"
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
| **Culture** | CultureInfo | Gets or sets a culture to use for error messages.  Default is **System.Globalization.CultureInfo.CurrentCulture**. |
| **Dependencies** | string | Gets or sets the error message for **Json.Schema.DependenciesKeyword**. |
| **DependentRequired** | string | Gets or sets the error message for **Json.Schema.DependentRequiredKeyword**. |
| **DependentSchemas** | string | Gets or sets the error message for **Json.Schema.DependentSchemasKeyword**. |
| **Enum** | string | Gets or sets the error message for **Json.Schema.EnumKeyword**. |
| **ExclusiveMaximum** | string | Gets or sets the error message for **Json.Schema.ExclusiveMaximumKeyword**. |
| **ExclusiveMinimum** | string | Gets or sets the error message for **Json.Schema.ExclusiveMinimumKeyword**. |
| **FalseSchema** | string | Gets or sets the error message for the "false" schema. |
| **Format** | string | Gets or sets the error message for the **Json.Schema.FormatKeyword**. |
| **FormatWithDetail** | string | Gets or sets the error message for the **Json.Schema.FormatKeyword** with<br>additional information from the format validation. |
| **InvalidItemsForm** | string | Gets or sets the error message for when **Json.Schema.ItemsKeyword** is specified<br>with an array of schemas in a draft 2020-12 or later schema. |
| **InvalidPattern** | string | Gets or sets the error message for when the **Json.Schema.PatternKeyword** contains<br>an invalid or unsupported regular expression. |
| **Maximum** | string | Gets or sets the error message for **Json.Schema.MinimumKeyword**. |
| **MaxItems** | string | Gets or sets the error message for **Json.Schema.MaxItemsKeyword**. |
| **MaxLength** | string | Gets or sets the error message for **Json.Schema.MaxLengthKeyword**. |
| **MaxProperties** | string | Gets or sets the error message for **Json.Schema.MaxPropertiesKeyword**. |
| **MetaSchemaValidation** | string | Gets or sets the error message for when the schema cannot be validated<br>against the meta-schema. |
| **Minimum** | string | Gets or sets the error message for **Json.Schema.MinimumKeyword**. |
| **MinItems** | string | Gets or sets the error message for **Json.Schema.MinItemsKeyword**. |
| **MinLength** | string | Gets or sets the error message for **Json.Schema.MinLengthKeyword**. |
| **MinProperties** | string | Gets or sets the error message for **Json.Schema.MinPropertiesKeyword**. |
| **MultipleOf** | string | Gets or sets the error message for **Json.Schema.MultipleOfKeyword**. |
| **OneOf** | string | Gets or sets the error message for **Json.Schema.OneOfKeyword**. |
| **Pattern** | string | Gets or sets the error message for **Json.Schema.PatternKeyword**. |
| **Required** | string | Gets or sets the error message for **Json.Schema.RequiredKeyword**. |
| **Type** | string | Gets or sets the error message for **Json.Schema.TypeKeyword**. |
| **UniqueItems** | string | Gets or sets the error message for **Json.Schema.UniqueItemsKeyword**. |
| **UnknownFormat** | string | Gets or sets the error message for an unknown format. |
| **UnknownVocabularies** | string | Gets or sets the error message for when a vocabulary is unknown but required. |

## Methods

### GetConst(CultureInfo culture)

Gets the error message for **Json.Schema.ConstKeyword** for a specific culture.

#### Declaration

```c#
public static string GetConst(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[value]] - the value in the schema

### GetContainsTooFew(CultureInfo culture)

Gets the error message for **Json.Schema.ContainsKeyword** for a specific culture.

#### Declaration

```c#
public static string GetContainsTooFew(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[received]] - the number of matching items provided in the JSON instance
  - [[minimum]] - the lower limit specified in the schema

### GetContainsTooMany(CultureInfo culture)

Gets the error message for **Json.Schema.ContainsKeyword** for a specific culture.

#### Declaration

```c#
public static string GetContainsTooMany(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[received]] - the number of matching items provided in the JSON instance
  - [[maximum]] - the upper limit specified in the schema

### GetDependentRequired(CultureInfo culture)

Gets the error message for **Json.Schema.DependentRequiredKeyword** for a specific culture.

#### Declaration

```c#
public static string GetDependentRequired(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[missing]] - the value in the schema

### GetDependentSchemas(CultureInfo culture)

Gets the error message for **Json.Schema.DependentSchemasKeyword** for a specific culture.

#### Declaration

```c#
public static string GetDependentSchemas(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[value]] - the value in the schema

### GetEnum(CultureInfo culture)

Gets the error message for **Json.Schema.EnumKeyword** for a specific culture.

#### Declaration

```c#
public static string GetEnum(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[received]] - the value provided in the JSON instance
  - [[values]] - the available values in the schema
            
The default messages are static and do not use these tokens as enum values
may be any JSON type and could be quite large.  They are provided to support
custom messages.

### GetExclusiveMaximum(CultureInfo culture)

Gets the error message for **Json.Schema.ExclusiveMaximumKeyword** for a specific culture.

#### Declaration

```c#
public static string GetExclusiveMaximum(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[received]] - the value provided in the JSON instance
  - [[limit]] - the upper limit in the schema

### GetExclusiveMinimum(CultureInfo culture)

Gets the error message for **Json.Schema.ExclusiveMinimumKeyword** for a specific culture.

#### Declaration

```c#
public static string GetExclusiveMinimum(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[received]] - the value provided in the JSON instance
  - [[limit]] - the lower limit in the schema

### GetFormat(CultureInfo culture)

Gets the error message for **Json.Schema.FormatKeyword** for a specific culture.

#### Declaration

```c#
public static string GetFormat(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[format]] - the format key

### GetFormatWithDetail(CultureInfo culture)

Gets the error message for **Json.Schema.FormatKeyword** for a specific culture.

#### Declaration

```c#
public static string GetFormatWithDetail(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[format]] - the format key
  - [[detail]] - the detail

### GetMaximum(CultureInfo culture)

Gets the error message for **Json.Schema.MinimumKeyword** for a specific culture.

#### Declaration

```c#
public static string GetMaximum(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[received]] - the value provided in the JSON instance
  - [[limit]] - the upper limit in the schema

### GetMaxItems(CultureInfo culture)

Gets the error message for **Json.Schema.MaxItemsKeyword** for a specific culture.

#### Declaration

```c#
public static string GetMaxItems(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[received]] - the number of items provided in the JSON instance
  - [[limit]] - the upper limit specified in the schema

### GetMaxLength(CultureInfo culture)

Gets the error message for **Json.Schema.MaxLengthKeyword** for a specific culture.

#### Declaration

```c#
public static string GetMaxLength(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[received]] - the length of the JSON string
  - [[limit]] - the upper limit specified in the schema

### GetMaxProperties(CultureInfo culture)

Gets the error message for **Json.Schema.MaxPropertiesKeyword** for a specific culture.

#### Declaration

```c#
public static string GetMaxProperties(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[received]] - the number of properties provided in the JSON instance
  - [[limit]] - the upper limit specified in the schema

### GetMetaSchemaValidation(CultureInfo culture)

Gets or sets the error message for when the schema cannot be validated
against the meta-schema.

#### Declaration

```c#
public static string GetMetaSchemaValidation(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[uri]] - the URI of the meta-schema

### GetMinimum(CultureInfo culture)

Gets the error message for **Json.Schema.MinimumKeyword** for a specific culture.

#### Declaration

```c#
public static string GetMinimum(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo |  |


#### Returns



#### Remarks

Available tokens are:
  - [[received]] - the value provided in the JSON instance
  - [[limit]] - the lower limit in the schema

### GetMinItems(CultureInfo culture)

Gets the error message for **Json.Schema.MinItemsKeyword** for a specific culture.

#### Declaration

```c#
public static string GetMinItems(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[received]] - the number of items provided in the JSON instance
  - [[limit]] - the lower limit specified in the schema

### GetMinLength(CultureInfo culture)

Gets the error message for **Json.Schema.MinLengthKeyword** for a specific culture.

#### Declaration

```c#
public static string GetMinLength(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[received]] - the length of the JSON string
  - [[limit]] - the lower limit specified in the schema

### GetMinProperties(CultureInfo culture)

Gets the error message for **Json.Schema.MinPropertiesKeyword** for a specific culture.

#### Declaration

```c#
public static string GetMinProperties(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[received]] - the number of properties provided in the JSON instance
  - [[limit]] - the lower limit specified in the schema

### GetMultipleOf(CultureInfo culture)

Gets the error message for **Json.Schema.MultipleOfKeyword** for a specific culture.

#### Declaration

```c#
public static string GetMultipleOf(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[received]] - the value provided in the JSON instance
  - [[divisor]] - the required divisor

### GetOneOf(CultureInfo culture)

Gets the error message for **Json.Schema.OneOfKeyword** for a specific culture.

#### Declaration

```c#
public static string GetOneOf(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[count]] - the number of subschemas that passed validation

### GetPattern(CultureInfo culture)

Gets the error message for **Json.Schema.PatternKeyword** for a specific culture.

#### Declaration

```c#
public static string GetPattern(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[pattern]] - the regular expression

### GetRequired(CultureInfo culture)

Gets the error message for **Json.Schema.RequiredKeyword** for a specific culture.

#### Declaration

```c#
public static string GetRequired(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[missing]] - the properties missing from the JSON instance

### GetType(CultureInfo culture)

Gets the error message for **Json.Schema.TypeKeyword** for a specific culture.

#### Declaration

```c#
public static string GetType(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[received]] - the type of value provided in the JSON instance
  - [[expected]] - the type(s) required by the schema

### GetUniqueItems(CultureInfo culture)

Gets the error message for **Json.Schema.UniqueItemsKeyword** for a specific culture.

#### Declaration

```c#
public static string GetUniqueItems(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[duplicates]] - the indices of duplicate pairs as a comma-delimited list of "(x, y)" items

### GetUnknownFormat(CultureInfo culture)

Gets the error message for an unknown format.

#### Declaration

```c#
public static string GetUnknownFormat(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[format]] - the format key

### GetUnknownVocabularies(CultureInfo culture)

Gets or sets the error message for when a vocabulary is unknown but required.

#### Declaration

```c#
public static string GetUnknownVocabularies(CultureInfo culture)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to retrieve. |


#### Returns



#### Remarks

Available tokens are:
  - [[vocabs]] - the URI IDs of the missing vocabularies as a comma-delimited list

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

