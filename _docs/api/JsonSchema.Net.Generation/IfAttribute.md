---
layout: "page"
title: "IfAttribute Class"
bookmark: "IfAttribute"
permalink: "/api/JsonSchema.Net.Generation/:title/"
order: "10.05.032"
---
**Namespace:** Json.Schema.Generation

**Inheritance:**
`IfAttribute`
 🡒 
`ConditionalAttribute`
 🡒 
`Attribute`
 🡒 
`object`

**Implemented interfaces:**

- INestableAttribute
- IConditionalAttribute

Creates or amends a condition group by expecting a value in a property.

## Properties

| Name | Type | Summary |
|---|---|---|
| **ConditionGroup** | object | Identifies the condition group under which this attribute applies. |
| **GenericParameter** | int | The index of the parameter to which the attribute should apply. Default is -1 to indicate the root. |
| **PropertyName** | string | The property name. |
| **TypeId** | object |  |
| **Value** | JsonNode | The expected property value. |

## Constructors

### IfAttribute(string propertyName, int value, object group)

Creates a new **Json.Schema.Generation.IfAttribute** instance.

#### Declaration

```c#
public IfAttribute(string propertyName, int value, object group)
```

| Parameter | Type | Description |
|---|---|---|
| propertyName | string | The name of the property. |
| value | int | The expected value for the property. |
| group | object | The condition group. |


### IfAttribute(string propertyName, uint value, object group)

Creates a new **Json.Schema.Generation.IfAttribute** instance.

#### Declaration

```c#
public IfAttribute(string propertyName, uint value, object group)
```

| Parameter | Type | Description |
|---|---|---|
| propertyName | string | The name of the property. |
| value | uint | The expected value for the property. |
| group | object | The condition group. |


### IfAttribute(string propertyName, long value, object group)

Creates a new **Json.Schema.Generation.IfAttribute** instance.

#### Declaration

```c#
public IfAttribute(string propertyName, long value, object group)
```

| Parameter | Type | Description |
|---|---|---|
| propertyName | string | The name of the property. |
| value | long | The expected value for the property. |
| group | object | The condition group. |


### IfAttribute(string propertyName, ulong value, object group)

Creates a new **Json.Schema.Generation.IfAttribute** instance.

#### Declaration

```c#
public IfAttribute(string propertyName, ulong value, object group)
```

| Parameter | Type | Description |
|---|---|---|
| propertyName | string | The name of the property. |
| value | ulong | The expected value for the property. |
| group | object | The condition group. |


### IfAttribute(string propertyName, float value, object group)

Creates a new **Json.Schema.Generation.IfAttribute** instance.

#### Declaration

```c#
public IfAttribute(string propertyName, float value, object group)
```

| Parameter | Type | Description |
|---|---|---|
| propertyName | string | The name of the property. |
| value | float | The expected value for the property. |
| group | object | The condition group. |


### IfAttribute(string propertyName, double value, object group)

Creates a new **Json.Schema.Generation.IfAttribute** instance.

#### Declaration

```c#
public IfAttribute(string propertyName, double value, object group)
```

| Parameter | Type | Description |
|---|---|---|
| propertyName | string | The name of the property. |
| value | double | The expected value for the property. |
| group | object | The condition group. |


### IfAttribute(string propertyName, bool value, object group)

Creates a new **Json.Schema.Generation.IfAttribute** instance.

#### Declaration

```c#
public IfAttribute(string propertyName, bool value, object group)
```

| Parameter | Type | Description |
|---|---|---|
| propertyName | string | The name of the property. |
| value | bool | The expected value for the property. |
| group | object | The condition group. |


### IfAttribute(string propertyName, string value, object group)

Creates a new **Json.Schema.Generation.IfAttribute** instance.

#### Declaration

```c#
public IfAttribute(string propertyName, string value, object group)
```

| Parameter | Type | Description |
|---|---|---|
| propertyName | string | The name of the property. |
| value | string | The expected value for the property. |
| group | object | The condition group. |


