---
layout: page
title: A Vocabulary for Extended Validation of Arrays
bookmark: Array Extensions
permalink: /schema/vocabs/array-ext/
icon: fas fa-tag
order: "01.8.2"
---

## 1. Purpose {#purpose}

This document describes a vocabulary defining keywords that can be used to validate array instances beyond that which is provided by the standard JSON Schema dialect.

## 2. Declarations {#declarations}

The ID for this vocabulary is `https://docs.json-everything.net/schema/vocabs/array-ext` (the URI to this document).

The meta-schema which validates keyword usage for this vocabulary can be found at `https://json-everything.net/meta/vocab/array-ext`, which also serves as its `$id` value.

> For convenience, a 2020-12 dialect extension meta-schema is also available at `https://json-everything.net/meta/array-ext`, which also serves as its `$id` value.  This dialect meta-schema extends the standard 2020-12 dialect to include only the keywords defined in this vocabulary.  To support multiple vocabulary extensions, you'll need to [make your own dialect meta-schema](https://blog.json-everything.net/posts/updating-vocabs/#meta-schema-rework) which incorporates all of the vocabularies you want to use.
{: .prompt-info }

## 3. Keywords {#keywords}

### 3.1. `uniqueKeys` {#uniquekeys}

The `uniqueKeys` keyword provides a mechanism to determine uniqueness of array items according to values in specified locations within each item.

This keyword is ignored if the instance is not an array.

The value of `uniqueKeys` MUST be a non-empty array of JSON Pointers as defined by [RFC 6901](https://tools.ietf.org/html/rfc6901).

These JSON Pointers, when resolved against each item, define a set of values for that item.  If an item does not contain the location specified by a JSON Pointer, the implementation MUST keep an internal placeholder to indicate a missing value.  (The placeholder cannot be a JSON `null` as there needs to be a distinction between the location existing and holding a `null` value and the location not existing at all.)

Validation for this keyword passes the value sets for all of the items are distinct, that is, no two sets contain the same ordered collection.

#### 3.1.1. Example: Single Key {#uniquekeys-single}

The following defines a schema to validate an array with items that have unique values at `/foo`.

```json
{
  "$schema": "https://json-everything.net/meta/array-ext",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "foo": { "type": "integer" }
    }
  },
  "uniqueKeys": [ "/foo" ]
}
```

This value passes validation because all of the values located at `/foo` in each item are unique.

```json
[
  { "foo": 8 },
  { "foo": 12 },
  { "foo": 42 }
]
```

This value fails validation because the value `8` is repeated in two of the items at the `/foo` location.

```json
[
  { "foo": 8 },
  { "foo": 12 },
  { "foo": 8 }
]
```

This value passes validation because `/foo` doesn't return a value for `{"bar": 8}`, so the value sets are `(8)` and `(<missing>)`, which are unique.

```json
[
  { "foo": 8 },
  { "bar": 8 }
]
```

This value fails validation because the value `8` is repeated in two of the items at the `/foo` location.  This example highlights the difference between `uniqueKeys` and `uniqueItems`.  This value would pass `"uniqueItems": true` because `bar` is different between the two `"foo": 8` items.

```json
[
  { "foo": 8, "bar": true },
  { "foo": 12, "bar": true },
  { "foo": 8, "bar": false }
]
```

#### 3.1.2. Example: Multiple Keys {#uniquekeys-multiple}

The following defines a schema to validate an array with items that have unique _combinations_ of values at `/foo` and `/bar`.

```json
{
  "$schema": "https://json-everything.net/meta/array-ext",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "foo": { "type": "integer" },
      "bar": { "type": "boolean" }
    }
  },
  "uniqueKeys": [ "/foo", "/bar" ]
}
```

This instance passes validation because for all combinations of "foo" and "bar", the value sets are unique.

```json
[
  { "foo": 8, "bar": true },
  { "foo": 12, "bar": true },
  { "foo": 8, "bar": false }
]
```

This instance fails validation because the first two items have the same combinations of "foo" and "bar", `(8, true)`, even though `"baz"` is different.  This example also would pass `uniqueItems`.

```json
[
  { "foo": 8, "bar": true, "baz": "yes" },
  { "foo": 8, "bar": true, "baz": "no" },
  { "foo": 8, "bar": false }
]
```

### 3.2. `ordering` {#ordering}

The `ordering` keyword provides a mechanism to validate that items in an array are sequenced properly according to the data contain within each item.

This keyword is ignored if the instance is not an array.

The value of `ordering` MUST be a non-empty array containing specifier objects.  The specifier object has four defined properties:

| Property | Description | Example |
|:--|:--|:--|
| `by` | A JSON Pointer that indicates a value within the item | `"/foo"` |
| `direction` | Whether the ordering should be ascending or descending | `"asc"` or `"desc"` |
| `culture` | An RFC 4646 culture code | `"en-US"` |
| `ignoreCase` | A boolean to indicate case-sensitivity | `true` or `false` |

The `by` pointer is relative to each item and identifies a value by which the items are expected to be ordered.  This property is required.

The order direction is determined by `direction`, which MUST be either `asc` for ascending ordering or `desc` for descending ordering.  `direction` applies to both numbers and strings.  Omitting this property has the same behavior as including it with `asc`.

The value of `culture` MUST be the string `none`, which indicates the values should be ordered by Unicode code point, or a valid language code as defined by [RFC 4646](https://datatracker.ietf.org/doc/html/rfc4646) to indicate a locale.  If the value is a language code which is not recognized or supported, the implementation MUST refuse to process the schema.  Omitting this property has the same behavior as including it with `none`.

The value of `ignoreCase` MUST be a boolean.  Its value indicates whether the sorting should consider character casing.  The value of this property may not apply to some locales.  Omitting this property has the same behavior as including it with `false`.

Specifier objects are listed in priority order.  That is, for validation to succeed, the items MUST be ordered first by the first specifier, then by the second, and so on.

Ordering is defined for numbers (including integers) and strings.  All values indicated by a single specifier MUST be of the same type.  Implementations MUST NOT convert between types.  For example, comparing `"5"` (string) and `5` (number) is disallowed and MUST result in a failed validation.

For numbers, standard mathematical ordering applies.  `culture` and `ignoreCase` do not apply to numeric values and MUST be ignored.

For strings, ordering is determined by the values of `culture` and `ignoreCase`.

Validation of `ordering` passes if:

-  all of the items in the instance have values at the locations indicated by the pointers,
-  for each specifier, all the indicated values have the same type, either numbers or strings, and
-  all of the items in the instance are ordered by their respective values as indicated by the specifiers.

If any of the above conditions are not met, validation MUST fail.

> An item missing a value at the indicated location does not constitute a resolution failure; the result is a validation failure with an appropriate error message.  Implementations do not halt execution for this case.
{: .prompt-info }

#### 3.2.1. Example: `ordering` with Single Specifier

This example show how `ordering` behaves with only a single, simple specifier object.

```json
{
  "$schema": "https://json-everything.net/meta/array-ext",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "foo": { "type": "integer" },
      "bar": { "type": "string" }
    }
  },
  "ordering": [
    { "by": "/foo" }
  ]
}
```

This schema indicates that all of the items should be ordered by their `foo` value.  Because `direction` is not specified, the direction is assumed to be ascending.

This instance passes because the `foo` values are in an ascending order.

```json
[
  { "foo": 1, "bar": "ipsum" },
  { "foo": 1, "bar": "Lorem" },
  { "foo": 2, "bar": "dolor" },
  { "foo": 3, "bar": "sit" },
  { "foo": 5, "bar": "amet" }
]
```

Notes:

- `bar` values don't matter.
- Duplicate values may appear in any order.

This instance fails validation because the `foo` values are out of sequence.

```json
[
  { "foo": 1, "bar": "Lorem" },
  { "foo": 5, "bar": "amet" },
  { "foo": 2, "bar": "dolor" },
  { "foo": 1, "bar": "ipsum" },
  { "foo": 3, "bar": "sit" },
]
```

#### 3.2.2. Example: `ordering` with Multiple Specifiers

Building on the previous example, we introduce `/bar` to the ordering requirements.

```json
{
  "$schema": "https://json-everything.net/meta/array-ext",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "foo": { "type": "integer" },
      "bar": { "type": "string" }
    }
  },
  "ordering": [
    { "by": "/foo" },
    { "by": "/bar", "direction": "desc" }
  ]
}
```

Here, the values should be ordered first by `foo` ascending, then by `bar` descending.  Note that because no culture is specified, the string order is assumed to be by Unicode code points.

This instance is valid:

```json
[
  { "foo": 1, "bar": "ipsum" },
  { "foo": 1, "bar": "Lorem" },
  { "foo": 2, "bar": "dolor" },
  { "foo": 3, "bar": "sit" },
  { "foo": 5, "bar": "amet" }
]
```

But switching the first two lines results in an a failed validation:

```json
[
  { "foo": 1, "bar": "Lorem" },
  { "foo": 1, "bar": "ipsum" },
  { "foo": 2, "bar": "dolor" },
  { "foo": 3, "bar": "sit" },
  { "foo": 5, "bar": "amet" }
]
```

Additionally, ordering first by `bar` is invalid.

```json
[
  { "foo": 1, "bar": "Lorem" },
  { "foo": 5, "bar": "amet" },
  { "foo": 2, "bar": "dolor" },
  { "foo": 1, "bar": "ipsum" },
  { "foo": 3, "bar": "sit" }
]
```
