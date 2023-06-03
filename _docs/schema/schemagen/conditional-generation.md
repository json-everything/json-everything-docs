---
layout: page
title: Conditional JSON Schema Generation
bookmark: Conditionals
permalink: /schema/:title/
icon: fas fa-tag
order: "1.5.2"
---
Draft 7 of JSON Schema introduced a nice way to include some conditional constraints into your schemas.  The most common way that people use these is to apply different constraints to various properties based on the value of another property.  This is similar to the `discriminator` keyword offered by Open API.

The idea is that if `myObj.X == "foo"` then apply some constraints to `myObj.Y`, such as `minLength` or make it required.

In JSON Schema, the recommended pattern for this kind of conditional looks something like this:

```json
{
  "type": "object",
  "properties": {
    "type": { "type": "string" },
    "intProp": { "type": "integer" },
    "stringProp": { "type": "string" }
  },
  "required": [ "type" ],
  "anyOf": [
    {
      "if": {
        "properties": {
          "type": { "const": "int" }
        }
      },
      "then": {
        "required": [ "intProp" ]
      }
    },
    {
      "if": {
        "properties": {
          "type": { "const": "string" }
        }
      },
      "then": {
        "required": [ "stringProp" ]
      }
    }
  ]
}
```

Here we can see that depending on the value of `type`, we either want `intProp` or `stringProp` to also be required.

As of v3.3.0, _JsonSchema.Net.Generation_ includes the ability to define conditional constraints like these.

> Currently this system only supports matching discrete values, not ranges, which is a feature that may be added at a later date.
{: .prompt-info }

## Condition groups {#conditional-groups}

The first step to defining conditional constraints is to set up some condition groups.  Condition groups allow you to define one or more conditions into groups, and for each group, every condition must be met before the constraints for that group can apply.  (See [below](#conditional-constraints) to learn how to apply constraints conditionally.)

This can be done with either the `[If]` or the `[IfEnum]` attributes.  These are special attributes that are applied to the type itself.

### `[If]` {#if-attribute}

The `[If]` attribute takes three parameters:

- `propertyName` - This is the name of the property on the object.  Ideally, you'll want to use the `nameof()` C# keyword for this to support compiler checking even if you're using a different naming method.
- `value` - This is the expected value for the property you named above.  The condition will apply when the property is this value.  The value can be any compiler-constant value, but really should be JSON-compatible.  So strings, numbers, and booleans are generally best.  Enum values will work, too, but `[IfEnum]` may be a better option if you're using an enum property.
- `group` - This is a key that identifies a group for this condition.  It can be any compiler-constant value.

### `[IfEnum]` {#ifenum-attribute}

The `[IfEnum]` attribute takes only one parameter: `propertyName` from above, but it _must_ be an enum property.

This attribute will generate a group for each of the values defined by the enum, and the key for that group is the enum value itself.

### Example {#condition-group-examples}

The example starts by defining a person which contains a couple properties that we want to constrain conditionally.

```c#
[If(nameof(AgeCategory), "child", "isChild")]
[If(nameof(AgeCategory), "adult", "isAdult")]
[If(nameof(AgeCategory), "senior", "isSenior")]
public class Person
{
    public string Name { get; set; }
    public string AgeCategory { get; set; }
    public int Age { get; set; }
    public bool CanVote { get; set; }
}
```

Eventually, we want to restrict `Age` to a valid range given a specific `AgeCategory`.  For now, we need to set up different condition groups, one for each `AgeCategory` value that we care about.

Here, we've defined

- the group `"isChild"` for when `AgeCategory == "child"`
- the group `"isAdult"` for when `AgeCategory == "adult"`
- the group `"isSenior"` for when `AgeCategory == "senior"`

> These groups are identified by strings, but they don't have to be.  We could just as well have used integers or any compile-time constant we wanted.
{: .prompt-tip}

In JSON Schema, these translate to the `if` keywords that you can see in the example at the top of the page.

We'll define constraints that apply to these groups in the next section.

If we know that these are _all_ of the values that `AgeCategory` can be, we might consider changing our model for `AgeCategory` to an enum to enforce that.  This also allows us to use the `[IfEnum]` attribute and makes things a little cleaner.

```c#
public enum AgeCategory
{
    Child,
    Adult,
    Senior
}

[IfEnum(nameof(AgeCategory))]
public class Person
{
    public string Name { get; set; }
    public AgeCategory AgeCategory { get; set; }
    public int Age { get; set; }
    public bool CanVote { get; set; }
}
```

Now this will create the following groups:

- `AgeCategory.Child` for when `AgeCategory == "child"`
- `AgeCategory.Adult` for when `AgeCategory == "adult"`
- `AgeCategory.Senior` for when `AgeCategory == "senior"`

The group keys have been auto-generated as the enum values.

## Conditional constraints {#conditional-constraints}

Now that we have some groups defined, we can use them to define constraints that should apply when each group is active.

Most of the constraint attributes now expose a `ConditionGroup` property that can be used to set the group for that constraint.  If the constraint group is not specified (or is explicitly set to null), the attribute will apply globally instead of inside a conditional constraint set.

For the example above, we wanted to limit the value range for the `Age` property.  To do that, we'll use `[Minimum]` and `[Maximum]`.

```c#
[If(nameof(AgeCategory), "child", "isChild")]
[If(nameof(AgeCategory), "adult", "isAdult")]
[If(nameof(AgeCategory), "senior", "isSenior")]
public class SplitAgeRanges
{
		[Required]
		public string Name { get; set; }

		[Required]
		public string AgeCategory { get; set; }

		[Required]
		[Minimum(0, ConditionGroup = "isChild")]
		[Maximum(17, ConditionGroup = "isChild")]
		[Minimum(18, ConditionGroup = "isAdult")]
		[Maximum(64, ConditionGroup = "isAdult")]
		[Minimum(65, ConditionGroup = "isSenior")]
		public int Age { get; set; }

		[Required]
		[Const(false, ConditionGroup = "isChild")]
		[Const(true, ConditionGroup = "isAdult")]
		[Const(true, ConditionGroup = "isSenior")]
		public bool CanVote { get; set; }
}
```

> The above shows the first case, where we've used a string for `AgeCategory`.  If we wanted to use the enum approach, the `ConditionGroup` would need to be the associated enum value:
> 
> ```c#
> [Minimum(0, ConditionGroup = AgeCategory.Child)]
> ```
{: .prompt-tip }

The above sets multiple minimums and maximums that each apply for different groups.

In JSON Schema, these translate to the `then` keywords that you can see in the example at the top of the page.  The JSON Schema that is generated from this example is below:

<details markdown="1">
  <summary>Expand for example</summary>

```json
{
  "type": "object",
  "properties": {
    "Name": { "type": "string" },
    "AgeCategory": { "type": "string" },
    "Age": { "type": "integer" },
    "CanVote": { "type": "boolean" }
  },
  "required": [ "Name", "AgeCategory", "Age", "CanVote" ],
  "anyOf": [
    {
      "if": {
        "properties": {
          "AgeCategory": { "const": "child" }
        },
        "required": [ "AgeCategory" ]
      },
      "then": {
        "properties": {
          "Age": {
            "minimum": 0,
            "maximum": 17
          },
          "CanVote": { "const": false }
        }
      }
    },
    {
      "if": {
        "properties": {
          "AgeCategory": { "const": "adult" }
        },
        "required": [ "AgeCategory" ]
      },
      "then": {
        "properties": {
          "Age": {
            "minimum": 18,
            "maximum": 64
          },
          "CanVote": { "const": true }
        }
      }
    },
    {
      "if": {
        "properties": {
          "AgeCategory": { "const": "senior" }
        },
        "required": [ "AgeCategory" ]
      },
      "then": {
        "properties": {
          "Age": { "minimum": 65 },
          "CanVote": { "const": true }
        }
      }
    }
  ]
}
```

</details>

## Complex conditions

The above example also shows what happens when you have multiple constraints.  You can see how the `Age` and `CanVote` constraints were combined into the same `then` keyword.

Now let's look at combining conditions: getting multiple constraints in the `if` keywords.  Consider this contrived example:

```c#
public class Contrived
{
    [Required]
    public bool Foo { get; set; }
    [Required]
    public bool Bar { get; set; }
    
    public FooBar TieBreaker { get; set; } // FooBar is an enum { Foo, Bar }
}
```

For whatever reason, we need `TieBreaker` to be present when both `Foo` and `Bar` are `true`.  To do this, we set up multiple conditions and specify the same group for both.

```c#
[If(nameof(Foo), true, "foobar")]
[If(nameof(Bar), true, "foobar")]
public class Contrived
{
    // ...
}
```

Then we apply our constraint as we would normally.

```c#
[If(nameof(Foo), true, "foobar")]
[If(nameof(Bar), true, "foobar")]
public class Contrived
{
    [Required]
    public bool Foo { get; set; }
    [Required]
    public bool Bar { get; set; }
    
    [Required(ConditionGroup = "foobar")]
    public FooBar TieBreaker { get; set; }
}
```

This will yield the following schema:

```json
{
  "type": "object",
  "properties": {
    "Foo": { "type": "boolean" },
    "Bar": { "type": "boolean" },
    "TieBreaker": { "enum": [ "Foo", "Bar" ] }
  },
  "required": [ "Foo", "Bar" ],
  "if": {
    "properties": {
      "Foo": { "const": true },
      "Bar": { "const": true },
    },
    "required": [ "Foo", "Bar" ]
  },
  "then": {
    "required": [ "TieBreaker" ]
  }
}
```

Notice how both of the conditions appear in the `if` subschema.  Now, `TieBreaker` will only be required when both `Foo` and `Bar` are true.
