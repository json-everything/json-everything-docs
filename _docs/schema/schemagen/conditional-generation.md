---
layout: page
title: Conditional JSON Schema Generation
bookmark: Conditionals
permalink: /schema/schemagen/:title/
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
  "allOf": [
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

As of v3.3.0, _JsonSchema.Net.Generation_ includes the ability to define conditional constraints like these and more.

## Condition groups {#conditional-groups}

The first step to defining conditional constraints is to set up some condition groups.  Condition groups allow you to define one or more conditions into groups, and for each group, every condition must be met before the constraints for that group can apply.  (See [below](#conditional-constraints) to learn how to apply constraints conditionally.)

Condition groups can be defined with one of the `[If*]` attributes, which are special attributes that are applied to the type itself.

### `[If]` {#if-attribute}

The `[If]` attribute creates a condition involving a discrete value.  It takes three parameters:

- `propertyName` - This is the name of the property on the object.  Ideally, you'll want to use the `nameof()` C# keyword for this to support compiler checking even if you're using a different naming method.
- `value` - This is the expected value for the property you named above.  The condition will apply when the property equals this value.  The value can be any compiler-constant value, but really should be JSON-compatible.  So strings, numbers, and booleans are generally best.  Enum values will work, too, but `[IfEnum]` may be a better option if you're using an enum property.
- `group` - This is a key that identifies a group for this condition.  It can be any compiler-constant value.

#### Example {#if-example}

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


### `[IfEnum]` {#ifenum-attribute}

The `[IfEnum]` attribute takes only one parameter: `propertyName` from above, but it _must_ be an enum property.

This attribute will generate a group for each of the values defined by the enum, and the key for that group is the enum value itself.

#### Example {#ifenum-example}

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

The group keys are auto-generated as the enum values.

### `[IfMin]` and `[IfMax]` {#if-min-max}

In addition to conditions that depend on discrete values, you can also create conditions that accept ranges of values.  For these cases, the `[IfMin]` and `[IfMax]` are your friends.

These attributes, which take the same parameters as `[If]`, will add different keywords depending on the type of the target property.

- For numeric types, they will add `minimum` and `maximum`.  There is an optional `IsExclusive` property as well that will instead add `exclusiveMinimum` and `exclusiveMaximum`.
- For strings, they will add `minLength` and `maxLength`.
- For arrays and other non-dictionary enumerables, they will add `minItems` and `maxItems`.
- For dictionaries and other objects, they will add `minProperties` and `maxProperties`.

The value for these attributes is a `double`, however for any non-numeric types, if the value is less than zero, the attributes will not be added as the associated keywords are lengths and counts where negatives don't make sense.

#### Examples {#ifminmax-examples}

Let's first take a look at creating a condition on a range of values for an integer property.

```c#
[IfMin(nameof(Value), 10, "group")]
[IfMax(nameof(Value), 20, "group", IsExclusive = true)]
public class NumberRangeConditions
{
    [Required]
    public int Value { get; set; }

    [Required(ConditionGroup = "group")]
    public string Required { get; set; }
}
```

In this case, we only want `Required` to be required if `Value` is 10 up to (but not including) 20.  The generated schema is

```json
{
  "type": "object",
  "properties": {
    "Value": { "type": "integer" },
    "Required": { "type": "string" }
  },
  "required": [ "Value" ],
  "if": {
    "properties": {
      "Value": {
        "minimum": 10,
        "exclusiveMaximum": 20
      }
    },
    "required": [ "Value" ]
  },
  "then": {
    "required": [ "Required" ]
  }
}
```

There are two other things to take note of in this example:

1. Specifying multiple conditions with the same group ID combines them into a single `if` keyword.
2. If there's only one condition group, the condition and constraints are expressed without using an `allOf`.

Now let's see what happens when we change `Value` to a string.

```c#
[IfMin(nameof(Value), 10, "group")]
[IfMax(nameof(Value), 20, "group")]
public class NumberRangeConditions
{
    [Required]
    public string Value { get; set; }

    [Required(ConditionGroup = "group")]
    public string Required { get; set; }
}
```

This generates

```json
{
  "type": "object",
  "properties": {
    "Value": { "type": "string" },
    "Required": { "type": "string" }
  },
  "required": [ "Value" ],
  "if": {
    "properties": {
      "Value": {
        "minLength": 10,
        "maxLength": 20
      }
    },
    "required": [ "Value" ]
  },
  "then": {
    "required": [ "Required" ]
  }
}
```

You can see the `minimum` and `exclusiveMaximum` keywords now render as `minLength` and `maxLength`.

## Conditional constraints {#conditional-constraints}

Now that we have some groups defined, we can use them to define constraints that should apply when each group is active.

Most of the constraint attributes now expose a `ConditionGroup` property that can be used to set the group for that constraint.  If the constraint group is not specified (or is explicitly set to null), the attribute will apply globally instead of inside a conditional constraint set.

Going back to the `Person` example, we wanted to limit the value range for the `Age` property.  To do that, we'll use `[Minimum]` and `[Maximum]`.

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
  <summary><em>Expand for example</em></summary>

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
  "allOf": [
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

## Strict generation {#strict-generation}

Sometimes it's not enough to say that you want to have certain constraints on a property under some circumstances.  Sometimes you want to _forbid_ that property from existing at all unless your condition is true.

For these cases, the `SchemaGeneratorConfiguration.StrictConditionals` option has been added.  Let's continue with the `Person` example and replace `CanVote` with a new string property called `DriversLicenseNumber`.

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

    [Required(ConditionGroup = "isAdult")]
    [Required(ConditionGroup = "isSenior")]
    public bool DriversLicenseNumber { get; set; }
}
```

This generates the following schema

<details markdown="1">
  <summary><em>Expand for example</em></summary>

```json
{
  "type": "object",
  "properties": {
    "Name": { "type": "string" },
    "AgeCategory": { "type": "string" }
  },
  "required": [ "Name", "AgeCategory", "Age" ],
  "allOf": [
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
          }
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
          "DriversLicenseNumber": { "type": "string" }
        },
        "required": [ "DriversLicenseNumber" ]
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
          "DriversLicenseNumber": { "type": "string" }
        },
        "required": [ "DriversLicenseNumber" ]
      }
    }
  ],
  "unevaluatedProperties": false
}
```

</details>

Notable differences:

- `Age` is no longer listed in the top-level `properties`, but it's still listed in `required`.  Instead it is listed in each of the `then` subschemas.
- `DriversLicenseNumber` also is not listed in the top-level `properties`.  It, too, is listed in each of the `then` subschemas.
- `unevaluatedProperties : false` has been added at the top level.

The effect of these changes means that `DriversLicenseNumber` is only a valid property if `AgeCategory` is `adult` or `senior`.  If `AgeCategory` is `child`, then the mere presence of `DriversLicenseNumber` is invalid.
