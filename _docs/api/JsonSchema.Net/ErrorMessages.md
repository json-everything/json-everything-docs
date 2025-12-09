---
layout: "page"
title: "ErrorMessages Class"
bookmark: "ErrorMessages"
permalink: "/api/JsonSchema.Net/:title/"
order: "10.01.038"
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
| **Const** | string | Gets or sets the error message for **Json.Schema.Keywords.ConstKeyword**. |
| **ContainsTooFew** | string | Gets or sets the error message for **Json.Schema.Keywords.ContainsKeyword** when there are too few matching items. |
| **ContainsTooMany** | string | Gets or sets the error message for **Json.Schema.Keywords.ContainsKeyword** when there are too many matching items. |
| **Culture** | CultureInfo | Gets or sets a culture to use for error messages.  Default is **System.Globalization.CultureInfo.CurrentCulture**. |
| **DependentRequired** | string | Gets or sets the error message for **Json.Schema.Keywords.DependentRequiredKeyword**. |
| **DependentSchemas** | string | Gets or sets the error message for **Json.Schema.Keywords.DependentSchemasKeyword**. |
| **Enum** | string | Gets or sets the error message for **Json.Schema.Keywords.EnumKeyword**. |
| **ExclusiveMaximum** | string | Gets or sets the error message for **Json.Schema.Keywords.ExclusiveMaximumKeyword**. |
| **ExclusiveMinimum** | string | Gets or sets the error message for **Json.Schema.Keywords.ExclusiveMinimumKeyword**. |
| **FalseSchema** | string | Gets or sets the error message for the "false" schema. |
| **Format** | string | Gets or sets the error message for the **Json.Schema.Keywords.FormatKeyword**. |
| **FormatWithDetail** | string | Gets or sets the error message for the **Json.Schema.Keywords.FormatKeyword** with additional information from the format validation. |
| **Maximum** | string | Gets or sets the error message for **Json.Schema.Keywords.MinimumKeyword**. |
| **MaxItems** | string | Gets or sets the error message for **Json.Schema.Keywords.MaxItemsKeyword**. |
| **MaxLength** | string | Gets or sets the error message for **Json.Schema.Keywords.MaxLengthKeyword**. |
| **MaxProperties** | string | Gets or sets the error message for **Json.Schema.Keywords.MaxPropertiesKeyword**. |
| **MetaSchemaValidation** | string | Gets or sets the error message for when the schema cannot be validated against the meta-schema. |
| **Minimum** | string | Gets or sets the error message for **Json.Schema.Keywords.MinimumKeyword**. |
| **MinItems** | string | Gets or sets the error message for **Json.Schema.Keywords.MinItemsKeyword**. |
| **MinLength** | string | Gets or sets the error message for **Json.Schema.Keywords.MinLengthKeyword**. |
| **MinProperties** | string | Gets or sets the error message for **Json.Schema.Keywords.MinPropertiesKeyword**. |
| **MultipleOf** | string | Gets or sets the error message for **Json.Schema.Keywords.MultipleOfKeyword**. |
| **OneOf** | string | Gets or sets the error message for **Json.Schema.Keywords.OneOfKeyword**. |
| **Pattern** | string | Gets or sets the error message for **Json.Schema.Keywords.PatternKeyword**. |
| **Required** | string | Gets or sets the error message for **Json.Schema.Keywords.RequiredKeyword**. |
| **Type** | string | Gets or sets the error message for **Json.Schema.Keywords.TypeKeyword**. |
| **UniqueItems** | string | Gets or sets the error message for **Json.Schema.Keywords.UniqueItemsKeyword**. |
| **UnknownFormat** | string | Gets or sets the error message for an unknown format. |

## Methods

### Get(CultureInfo culture, string key)

Retrieves a localized error message string for the specified key and culture.

#### Declaration

```c#
public static string Get(CultureInfo culture, string key)
```

| Parameter | Type | Description |
|---|---|---|
| culture | CultureInfo | The culture to use when retrieving the error message. If null, the default culture or the current thread's culture |
| key | string | The resource key identifying the error message to retrieve. If not specified, the caller's member name is used. |


#### Returns

A localized error message string corresponding to the specified key and culture.

#### Remarks

If the <paramref name="key" /> parameter begins with "Get", that prefix is removed before looking up
            the resource. This method is typically used within error-handling code to retrieve user-facing error messages based

### GetConst(CultureInfo culture)

Gets the error message for **Json.Schema.Keywords.ConstKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.ContainsKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.ContainsKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.DependentRequiredKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.DependentSchemasKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.EnumKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.ExclusiveMaximumKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.ExclusiveMinimumKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.FormatKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.FormatKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.MinimumKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.MaxItemsKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.MaxLengthKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.MaxPropertiesKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.MinimumKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.MinItemsKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.MinLengthKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.MinPropertiesKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.MultipleOfKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.OneOfKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.PatternKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.RequiredKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.TypeKeyword** for a specific culture.

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

Gets the error message for **Json.Schema.Keywords.UniqueItemsKeyword** for a specific culture.

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

### ReplaceToken(this string message, string name, object value)

Replaces tokens in the form of `[[token]]` with a specified value, serialized as JSON.

#### Declaration

```c#
public static string ReplaceToken(this string message, string name, object value)
```

| Parameter | Type | Description |
|---|---|---|
| message | string | The message template. |
| name | string | The token name (without brackets) |
| value | object | The value. |


#### Returns

The detokenized string.

### ReplaceToken(this string message, string name, bool value)

Replaces tokens in the form of `[[token]]` with a specified value, serialized as JSON.

#### Declaration

```c#
public static string ReplaceToken(this string message, string name, bool value)
```

| Parameter | Type | Description |
|---|---|---|
| message | string | The message template. |
| name | string | The token name (without brackets) |
| value | bool | The value. |


#### Returns

The detokenized string.

### ReplaceToken(this string message, string name, int value)

Replaces tokens in the form of `[[token]]` with a specified value, serialized as JSON.

#### Declaration

```c#
public static string ReplaceToken(this string message, string name, int value)
```

| Parameter | Type | Description |
|---|---|---|
| message | string | The message template. |
| name | string | The token name (without brackets) |
| value | int | The value. |


#### Returns

The detokenized string.

### ReplaceToken(this string message, string name, long value)

Replaces tokens in the form of `[[token]]` with a specified value, serialized as JSON.

#### Declaration

```c#
public static string ReplaceToken(this string message, string name, long value)
```

| Parameter | Type | Description |
|---|---|---|
| message | string | The message template. |
| name | string | The token name (without brackets) |
| value | long | The value. |


#### Returns

The detokenized string.

### ReplaceToken(this string message, string name, decimal value)

Replaces tokens in the form of `[[token]]` with a specified value, serialized as JSON.

#### Declaration

```c#
public static string ReplaceToken(this string message, string name, decimal value)
```

| Parameter | Type | Description |
|---|---|---|
| message | string | The message template. |
| name | string | The token name (without brackets) |
| value | decimal | The value. |


#### Returns

The detokenized string.

### ReplaceToken(this string message, string name, double value)

Replaces tokens in the form of `[[token]]` with a specified value, serialized as JSON.

#### Declaration

```c#
public static string ReplaceToken(this string message, string name, double value)
```

| Parameter | Type | Description |
|---|---|---|
| message | string | The message template. |
| name | string | The token name (without brackets) |
| value | double | The value. |


#### Returns

The detokenized string.

### ReplaceToken(this string message, string name, string value)

Replaces tokens in the form of `[[token]]` with a specified value, serialized as JSON.

#### Declaration

```c#
public static string ReplaceToken(this string message, string name, string value)
```

| Parameter | Type | Description |
|---|---|---|
| message | string | The message template. |
| name | string | The token name (without brackets) |
| value | string | The value. |


#### Returns

The detokenized string.

### ReplaceToken(this string message, string name, string[] value)

Replaces tokens in the form of `[[token]]` with a specified value, serialized as JSON.

#### Declaration

```c#
public static string ReplaceToken(this string message, string name, string[] value)
```

| Parameter | Type | Description |
|---|---|---|
| message | string | The message template. |
| name | string | The token name (without brackets) |
| value | string[] | The value. |


#### Returns

The detokenized string.

### ReplaceToken(this string message, string name, Dictionary\<string, string[]\> value)

Replaces tokens in the form of `[[token]]` with a specified value, serialized as JSON.

#### Declaration

```c#
public static string ReplaceToken(this string message, string name, Dictionary<string, string[]> value)
```

| Parameter | Type | Description |
|---|---|---|
| message | string | The message template. |
| name | string | The token name (without brackets) |
| value | Dictionary\<string, string[]\> | The value. |


#### Returns

The detokenized string.

### ReplaceToken(this string message, string name, JsonElement value)

Replaces tokens in the form of `[[token]]` with a specified value, serialized as JSON.

#### Declaration

```c#
public static string ReplaceToken(this string message, string name, JsonElement value)
```

| Parameter | Type | Description |
|---|---|---|
| message | string | The message template. |
| name | string | The token name (without brackets) |
| value | JsonElement | The value. |


#### Returns

The detokenized string.

### ReplaceToken(this string message, string name, T value, JsonTypeInfo\<T\> typeInfo)

Replaces tokens in the form of `[[token]]` with a specified value, serialized as JSON.

#### Declaration

```c#
public static string ReplaceToken(this string message, string name, T value, JsonTypeInfo<T> typeInfo)
```

| Parameter | Type | Description |
|---|---|---|
| message | string | The message template. |
| name | string | The token name (without brackets) |
| value | T | The value. |
| typeInfo | JsonTypeInfo\<T\> | A JsonTypeInfo that matches **value**. |


#### Returns

The detokenized string.

