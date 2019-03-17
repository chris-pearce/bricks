[![NPM
version](https://img.shields.io/npm/v/@bricks/spacing.svg?longCache=true&style=popout-square)](https://www.npmjs.com/package/@bricks/spacing) [![Downloads](https://img.shields.io/npm/dw/bricks.svg?longCache=true&style=popout-square)](https://www.npmjs.com/package/@bricks/spacing)

# 🧱 Bricks / Spacing <!-- omit in toc -->

## Table of Contents <!-- omit in toc -->

- [Description](#description)
  - [Further Reading](#further-reading)
- [API](#api)
- [Examples](#examples)
  - [`children`](#children)
  - [`size`](#size)
  - [`isUpwards`](#isupwards)
  - [`...props`](#props)
- [Tokens](#tokens)
- [Installation](#installation)
- [Sandbox](#sandbox)

## Description

It's not good practice to bake in spacing that is external to your components—"outer" being spacing that is applied via the `margin` property.

Why? Because it makes your components context aware which in turn makes them less reusable or portable. We want to be building highly reusable Presentational components that are completely context agnostic.

This component can be used to apply vertical spacing between your components. The spacing is applied in a downwards direction (`margin-bottom`) by default. There are certain conditions when you need to apply spacing in the upwards direction (`margin-top`) which is what the `isUpwards` prop is for.

### Further Reading

- [Handling spacing in a UI component library](https://medium.com/fed-or-dead/handling-spacing-in-a-ui-component-library-70f3b22ec89)

## API

| Name        | Type      | Required | Description                                                     |
| ----------- | --------- | -------- | --------------------------------------------------------------- |
| `children`  | `node`    | Yes      | The contents.                                                   |
| `size`      | `string`  | Yes      | The size of the space (a valid CSS unit, e.g., `1rem`, `26px`). |
| `isUpwards` | `boolean` | No       | Applies spacing in an upwards direction.                        |
| `...props`  | `object`  | No       | Further props, (see ✋).                                        |

**✋ Refer to the [Closed for Extension](../../README.md#closed-for-extension) section of the master `README.md`.**

## Examples

### `children`

```jsx
<Spacing size={tokens.spacing.default}>
  <YourComponent />
</Spacing>
<YourComponent />
```

### `size`

```jsx
<Spacing size={tokens.spacing.small}>
  <YourComponent />
</Spacing>
<YourComponent />
```

```jsx
<Spacing size="40px">
  <YourComponent />
</Spacing>
<YourComponent />
```

### `isUpwards`

```jsx
<YourComponent />
<Spacing isUpwards size={tokens.spacing.default}>
  <YourComponent />
</Spacing>
```

### `...props`

```jsx
<Spacing id="uuid" size={tokens.spacing.small}>
  <YourComponent />
</Spacing>
<YourComponent />
```

## Tokens

Refer to the [**Tokens**](../../README.md#tokens) section of the master `README.md`.

## Installation

Refer to the [**Installing a Component**](../../README.md#installing-a-component) section of the master `README.md`.

## Sandbox

Refer to the [**Sandbox**](../../README.md#sandbox) section of the master `README.md`.
