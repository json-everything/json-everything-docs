---
layout: page
title: Extending JSON Schema Using Vocabularies
bookmark: Vocabularies
permalink: /schema/:title/
icon: fas fa-tag
order: "01.04"
---
JSON Schema drafts 2019-09 and 2020-12 define the idea of vocabularies to enable some spec support for custom keywords.

A vocabulary is just a collection of keywords.  It will be identified by a URI and should have an associated specification that describes the function of each of the keywords.  There *may* also be an associated meta-schema.

Creating a vocabulary in *JsonSchema.Net* isn't strictly required in order to add custom keywords, but if you're using it to create a meta-schema that will consume and validate other draft 2019-09 or 2020-12 schemas, it is strongly suggested.

## Defining a vocabulary

To make all of this work, we need a few things:

- A vocab schema that provides the syntax requirements for any new keywords defined by the vocabulary.
- A vocab URI ID, this is different from the vocab schema's `$id` value.
- A meta-schema that includes a `$vocabulary` keyword that references the vocab ID (along with any other vocabs you want to include) and a `$ref` keyword that references any vocab schemas (or meta-schemas that already include them).

This is best explained with an example.  Let's suppose we want to define new keywords `minDate` and `maxDate`.

We'll start by defining our vocab schema:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://myserver.net/meta/dateMath",
  "properties": {
    "minDate": {
      "type": "string",
      "format": "date"
    },
    "maxDate": {
      "type": "string",
      "format": "date"
    }
  }
}
```

> If you're defining keywords that contain subschemas (e.g. `allOf` or `properties`), you'll want to add a `"$dynamicAnchor": "meta"` to the root schema and then use `{ "$dynamicRef": "#meta" }` where you need schemas.
{: .prompt-hint }

For the vocab URI ID, we'll use `https://myserver.net/vocab/dateMath`.

And then we need a meta-schema to tie everything together:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://myserver.net/meta-schema",
  "$dynamicAnchor": "meta",
  "$vocabulary": {
    "https://json-schema.org/draft/2020-12/vocab/core": true,
    "https://json-schema.org/draft/2020-12/vocab/applicator": true,
    "https://json-schema.org/draft/2020-12/vocab/validation": true,
    "https://json-schema.org/draft/2020-12/vocab/meta-data": true,
    "https://json-schema.org/draft/2020-12/vocab/format-annotation": true,
    "https://json-schema.org/draft/2020-12/vocab/content": true,
    "https://json-schema.org/draft/2020-12/vocab/unevaluated": true,
    "https://myserver.net/vocab/dateMath": true
  },
  "allOf": [
    { "$ref": "https://json-schema.org/draft/2020-12/schema" },
    { "$ref": "https://myserver.net/meta/dateMath" }
  ]
}
```

> It's not always necessary to have a vocab schema.  If you decide to not have one, then any meta-schema evaluations won't be able to validate your keyword's syntax.  Maybe your keyword doesn't require any specific syntax... or validating syntax isn't important to you.
{: .prompt-info }

## How this works

When a schema evaluator loads a schema that uses our meta-schema in its `$schema` keyword, it loads the meta-schema and looks at the `$vocabulary` keyword to determine the set of vocabularies which the meta-schema uses.

That set of vocabularies specifies which keywords to process, defining a "dialect".  Any keywords that are not defined by the dialect have their values collected as annotations (or they're ignored).

The catch is that while we can read "minDate" and know that its value represents the minimum acceptable date... because we're human, and we understand things like that, a validator isn't going to be able to infer what a keyword is supposed to do by its name or the subschema that defines its syntax.  It can only validate that the schema uses a date-formatted string.

That's where the vocabulary specification comes in.

## Defining keyword functionality

The vocabulary specification is a human-readable document that gives *semantic* meaning to the vocab's keywords.  It is documentation of business logic that allows a programmer to code an extension that provides additional validation.  For example, this is the documentation for `minLength` in the Schema Validation specification:

> **6.3.2. minLength**
>
> The value of this keyword MUST be a non-negative integer.
>
> A string instance is valid against this keyword if its length is greater than, or equal to, the value of this keyword.
>
> The length of a string instance is defined as the number of its characters as defined by RFC 8259.
>
> Omitting this keyword has the same behavior as a value of 0.

It gives meaning to the keyword beyond how the meta-schema describes it: a non-negative integer.

Any validator can validate that `minDate` is a date-formatted string, but only a validator that understands `https://myserver.net/vocab/dateMath` _as a vocabulary_ will understand that `minDate` should validate that the date in the instance should be later than the date in the schema.

Now, if you look at the `$vocabulary` entry for `https://myserver.net/vocab/dateMath`, the vocabulary has its ID as the key with a boolean value.  In this case, that value is `true`.  That means that if the evaluator *doesn't* know about the vocabulary, it **must** refuse to process any schema that uses our meta-schema.  If this value were `false`, then the validator would be allowed to continue, but it would only be able to collect the keyword's value as an annotation (or ignore it).

## Creating and registering a vocabulary {#schema-vocabs-registration}

To tell *JsonSchema.Net* about a vocabulary, you need to create a `Vocabulary` instance and register it using `VocabularyRegistry.Register<T>()`.  This can be registered with either the global registry or with the one on the build options.

The `Vocabulary` class is quite simple.  It defines the vocabulary's ID and lists the keywords which it supports.

You will still need to create a custom dialect to make use of your keyword.

See [Defining and Using Custom Keywords](custom-keywords) for information on how to create custom keywords and dialects.
