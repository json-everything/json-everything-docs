---
layout: "page"
title: "ConstAttribute Class"
bookmark: "ConstAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.008"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`ConstAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- INestableAttribute
- IAttributeHandler

Applies a `const` keyword.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **GenericParameter** | int | The index of the parameter to which the attribute should apply. Default is -1 to indicate the root. |
| **TypeId** | object |  |
| **Value** | JsonNode | The value. |

## Constructors

### ConstAttribute(int value)

Creates a new **Json.Schema.Generation.ConstAttribute** instance.

#### Declaration

```c#
public ConstAttribute(int value)
```

| Parameter | Type | Description |
|---|---|---|
| value | int | The value. |


### ConstAttribute(uint value)

Creates a new **Json.Schema.Generation.ConstAttribute** instance.

#### Declaration

```c#
public ConstAttribute(uint value)
```

| Parameter | Type | Description |
|---|---|---|
| value | uint | The value. |


### ConstAttribute(long value)

Creates a new **Json.Schema.Generation.ConstAttribute** instance.

#### Declaration

```c#
public ConstAttribute(long value)
```

| Parameter | Type | Description |
|---|---|---|
| value | long | The value. |


### ConstAttribute(ulong value)

Creates a new **Json.Schema.Generation.ConstAttribute** instance.

#### Declaration

```c#
public ConstAttribute(ulong value)
```

| Parameter | Type | Description |
|---|---|---|
| value | ulong | The value. |


### ConstAttribute(float value)

Creates a new **Json.Schema.Generation.ConstAttribute** instance.

#### Declaration

```c#
public ConstAttribute(float value)
```

| Parameter | Type | Description |
|---|---|---|
| value | float | The value. |


### ConstAttribute(double value)

Creates a new **Json.Schema.Generation.ConstAttribute** instance.

#### Declaration

```c#
public ConstAttribute(double value)
```

| Parameter | Type | Description |
|---|---|---|
| value | double | The value. |


### ConstAttribute(string value)

Creates a new **Json.Schema.Generation.ConstAttribute** instance.

#### Declaration

```c#
public ConstAttribute(string value)
```

| Parameter | Type | Description |
|---|---|---|
| value | string | The value. |


### ConstAttribute(bool value)

Creates a new **Json.Schema.Generation.ConstAttribute** instance.

#### Declaration

```c#
public ConstAttribute(bool value)
```

| Parameter | Type | Description |
|---|---|---|
| value | bool | The value. |


