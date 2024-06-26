---
layout: "page"
title: "FunctionRepository Class"
bookmark: "FunctionRepository"
permalink: "/api/JsonPath.Net/:title/"
order: "10.08.002"
---
**Namespace:** Json.Path

**Inheritance:**
`FunctionRepository`
 🡒 
`object`

Stores expression function definitions.

## Methods

### Register(ValueFunctionDefinition function)

Registers a new function implementation, allowing it to be parsed.

#### Declaration

```c#
public static void Register(ValueFunctionDefinition function)
```

| Parameter | Type | Description |
|---|---|---|
| function | ValueFunctionDefinition | The function. |


### Register(LogicalFunctionDefinition function)

Registers a new function implementation, allowing it to be parsed.

#### Declaration

```c#
public static void Register(LogicalFunctionDefinition function)
```

| Parameter | Type | Description |
|---|---|---|
| function | LogicalFunctionDefinition | The function. |


### Register(NodelistFunctionDefinition function)

Registers a new function implementation, allowing it to be parsed.

#### Declaration

```c#
public static void Register(NodelistFunctionDefinition function)
```

| Parameter | Type | Description |
|---|---|---|
| function | NodelistFunctionDefinition | The function. |


### Register(ValueFunctionDefinition function, Type functionType)

Registers a new function implementation, allowing it to be parsed.

#### Declaration

```c#
public static void Register(ValueFunctionDefinition function, Type functionType)
```

| Parameter | Type | Description |
|---|---|---|
| function | ValueFunctionDefinition | The function. |
| functionType | Type | The type of the function. |


### Register(LogicalFunctionDefinition function, Type functionType)

Registers a new function implementation, allowing it to be parsed.

#### Declaration

```c#
public static void Register(LogicalFunctionDefinition function, Type functionType)
```

| Parameter | Type | Description |
|---|---|---|
| function | LogicalFunctionDefinition | The function. |
| functionType | Type | The type of the function. |


### Register(NodelistFunctionDefinition function, Type functionType)

Registers a new function implementation, allowing it to be parsed.

#### Declaration

```c#
public static void Register(NodelistFunctionDefinition function, Type functionType)
```

| Parameter | Type | Description |
|---|---|---|
| function | NodelistFunctionDefinition | The function. |
| functionType | Type | The function type. |


### RegisterLogicalFunction()

Registers a new function implementation, allowing it to be parsed.

#### Declaration

```c#
public static void RegisterLogicalFunction()
```


### RegisterNodelistFunction()

Registers a new function implementation, allowing it to be parsed.

#### Declaration

```c#
public static void RegisterNodelistFunction()
```


### RegisterValueFunction()

Registers a new function implementation, allowing it to be parsed.

#### Declaration

```c#
public static void RegisterValueFunction()
```


### TryGet(string name, out IPathFunctionDefinition function)

Gets a function implementation by name.

#### Declaration

```c#
public static bool TryGet(string name, out IPathFunctionDefinition function)
```

| Parameter | Type | Description |
|---|---|---|
| name | string | A function name. |
| function | out IPathFunctionDefinition | The function, if found; otherwise null. |


#### Returns

True if found; otherwise false.

### Unregister()

Unregisters a function implementation.

#### Declaration

```c#
public static void Unregister()
```


### Unregister(string name)

Unregisters a function implementation.

#### Declaration

```c#
public static void Unregister(string name)
```


