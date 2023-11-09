---
layout: page
title: A Vocabulary of Array Extensions (WIP)
bookmark: Array Extensions
permalink: /schema/vocabs/array-ext/
icon: fas fa-tag
order: "1.8.3"
---

> This vocabulary is a work in progress.  It is intended to deprecate the existing [`uniqueKeys` vocabulary](/schema/vocabs/uniquekeys) and add some more array-centric functionality.  Comments, questions, and ideas are welcome as issues in the [repository for this site](https://github.com/gregsdennis/json-everything-docs).
{: .prompt-warning }

## 1. Purpose {#purpose}

This document describes a vocabulary defining keywords that can be used to validate array instances beyond that which is provided by the standard JSON Schema dialect.

## 2. Declarations {#declarations}

The ID for this vocabulary is `https://docs.json-everything.net/schema/vocabs/array-ext` (the URI to this document).

The meta-schema which validates keyword usage for this vocabulary can be found at `https://json-everything.net/meta/vocab/array-ext`, which also serves as its `$id` value.

> For convenience, a 2020-12 dialect extension meta-schema is also available at `https://json-everything.net/meta/array-ext`, which also serves as its `$id` value.  This dialect meta-schema extends the standard 2020-12 dialect to include only the keywords defined in this vocabulary.  To support multiple vocabulary extensions, you'll need to [make your own dialect meta-schema]() which incorporates all of the vocabularies you want to use.
{: .prompt-info }

## 3. Keywords {#keywords}

### 3.1. `uniqueKeys` {#uniquekeys}

The value of `uniqueKeys` MUST be a non-empty array of JSON Pointers as defined by [RFC 6901](https://tools.ietf.org/html/rfc6901).

These JSON Pointers, when resolved against each item, define a set of values for that item.  If an item does not contain the location specified by a JSON Pointer, the implementation MUST keep an internal placeholder to indicate a missing value.  (The placeholder cannot be a JSON `null` as there needs to be a distinction between the location existing and holding a `null` value and the location not existing at all.)

Validation for this keyword passes if the value sets for all of the items are distinct, that is, no two sets contain the same ordered collection.

## 3.1.1. Example: Single Key {#uniquekeys-single}

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
  "uniqueKeys": [
    "/foo"
  ]
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

### 3.1.2. Example: Multiple Keys {#uniquekeys-multiple}

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
  "uniqueKeys": [
    "/foo",
    "/bar"
  ]
}
```

This value passes validation because for all combinations of "foo" and "bar", the value sets are unique.

```json
[
  { "foo": 8, "bar": true },
  { "foo": 12, "bar": true },
  { "foo": 8, "bar": false }
]
```

This value fails validation because the first two items have the same combinations of "foo" and "bar", `(8, true)`, even though `"baz"` is different.  This example also would pass `uniqueItems`.

```json
[
  { "foo": 8, "bar": true, "baz": "yes" },
  { "foo": 8, "bar": true, "baz": "no" },
  { "foo": 8, "bar": false }
]
```

### 3.2. `orderedBy`, `orderDirection`, `orderCulture`, and `orderIgnoreCase` {#ordering}

The value of `orderedBy` MUST be a string containing a JSON Pointer.  The pointer is relative to each item and identifies a value by which the items are expected to be ordered.  The behavior of `orderedBy` is determined by

- the values indicated by the pointer, and
- the values of `orderDirection`, `orderCulture`, and `orderIgnoreCase`

Ordering is defined for numbers (including integers) and strings.  All values to be sorted MUST be of the same type.

The order direction is determined by `orderDirection`, which MUST be either `asc` for ascending ordering or `desc` for descending ordering.  `orderDirection` applies to both numbers and strings.

For numbers, standard mathematical ordering applies.  `orderCulture` and `orderIgnoreCase` do not apply to numeric values and MUST be ignored.

For strings, ordering is determined by the values of `orderCulture` and `orderIgnoreCase`.

The value of `orderCulture` MUST be the string `none`, which indicates the values should be ordered by Unicode code point, or a valid language code as defined by [ISO 639-1](https://www.loc.gov/standards/iso639-2/php/code_list.php) to indicate a locale.  If the value is a language code which is not recognized or supported by an implementation, it MUST refuse to process the schema.

The value of `orderIgnoreCase` MUST be a boolean.  Its value indicates whether the sorting should consider character casing.  The value of this property may not apply to some locales.

Validation of `orderedBy` passes if:

-  all of the items in the array have a value at the location indicated by the pointer,
-  all the indicated values have the same type, either numbers or strings, and
-  all of the items in the in the array are ordered by their respective values as specified by the other keywords defined in this section.

If any of the above conditions are not met, validation MUST fail.

