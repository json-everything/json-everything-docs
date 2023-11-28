---
layout: page
title: Setting Up Vocabs
bookmark: Vocab Setup
permalink: /schema/examples/:title/
icon: fas fa-tag
order: "01.8.4.1"
---

In order to use the vocabulary extension libraries, there is some initial setup that will need to be performed.

Each of the vocabulary libraries expose a `Vocabularies` static class which defines a `.Register()` method.  This will need to be called at application startup.

```c#
using Json.Schema.Data;

Vocabularies.Register();
```

This will globally register the vocabularies, the keywords, and the meta-schemas, making them available for use.

> The `.Register()` method also takes optional parameters for specific vocabulary and schema registries in case you don't want to make them available globally.
{: .prompt-tip }
