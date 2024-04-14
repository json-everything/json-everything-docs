---
layout: page
title: JSON Schema Generation with System.ComponentModel.DataAnnotations
bookmark: Data Annotations
permalink: /schema/schemagen/:title/
icon: fas fa-tag
order: "01.5.3"
---
The _System.ComponentModel.DataAnnotations_ namespace defines numerous attributes that are commonly used within ASP.Net and other areas to validate data models.

The primary downside to using this approach is that the JSON has to be deserialized into the model before validation can occur.

An alternative is to generate a JSON Schema from the model.  The _JsonSchema.Net.Generation.DataAnnotations_ library is an extension on _JsonSchema.Net.Generation_ to support the _System.ComponentModel.DataAnnotations_ attributes.

> It's important to understand that the DataAnnotations attributes are not as flexible as the attributes defined in the main library.  For advanced schema features, using the main library attributes is imperative.
{: .prompt-warning}

## Usage

In order to generate constraints from the DataAnnotations attributes, you'll need to first register the handlers.

```c#
DataAnnotationsSupport.AddDataAnnotations();
```

## Supported attributes

The following attributes are supported:

|Attribute|Description of support|
|:-|:-|
|`[AllowedValues()]`|Produces an `enum` keyword with the indicated values. (.Net 8 only)|
|`[DeniedValues()]`|Produces a `not: { enum: []}` keyword construct with the indicated values. (.Net 8 only)|
|`[Base64String]`|Produces a `format: base64` keyword.  Note that this format is defined by OpenAPI but not JSON Schema.|
|`[EmailAddress]`|Produces a `format: email` keyword.|
|`[EnumDataType()]`|Produces an `enum` keyword with the values of the C# enum type supplied in the attribute.|
|`[Length()]`|Produces `minLength` and/or `maxLength` keywords.|
|`[MaxLength()]`|Produces a `maxLength` keyword.|
|`[MinLength()]`|Produces a `minLength` keyword.|
|`[Range()]`|Produces `minimum` and/or `maximum` keywords.|
|`[RegularExpression()]`|Produces a `pattern` keyword.|
|`[StringLength()]`|Produces `minLength` and/or `maxLength` keywords.|
|`[UrlAttribute]`|Produces a `format: uri` keyword.|
