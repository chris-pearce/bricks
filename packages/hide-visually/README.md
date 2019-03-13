[![NPM
version](https://img.shields.io/npm/v/@bricks/hide-visually.svg?longCache=true&style=popout-square)](https://www.npmjs.com/package/@bricks/hide-visually) [![Downloads](https://img.shields.io/npm/dw/bricks.svg?longCache=true&style=popout-square)](https://www.npmjs.com/package/@bricks/hide-visually)

# 🧱 Bricks / HideVisually <!-- omit in toc -->

## Table of Contents <!-- omit in toc -->

- [Description](#description)
  - [Further Reading](#further-reading)
- [API](#api)
  - [Examples](#examples)
    - [`children`](#children)
    - [`isInline`](#isinline)
    - [`...props`](#props)
- [Installation](#installation)
- [Sandbox](#sandbox)

## Description

We should always provide a text alternative for visual elements as per [WCAG Success Criterion **1.1.1 Non-text Content**](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html).

If the visual element is a native interactive element, such as a `<button>` element, then we can use the `aria-label` attribute. For example, on a button that only contains a "hamburger" SVG icon, we could use it like this:

```html
<button aria-label="Open menu" type="button">
  <svg aria-hidden="true" […]>
    <path d="M2 12h21M7 6l-6 6 6 6" […]>
  </svg>
</button>
```

_💡 `aria-hidden="true"` is assigned to the `<svg>` element to ensure that it is removed from [The Accessibility Tree](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree) thus making it unavailable to assistive technologies._

An alternative way is to hide the text alternative from visual users via CSS whilst ensuring it stays in the The Accessibility Tree thus making it available to assistive technologies. For example:

```html
<button type="button">
  <span class="bricks-hide-visually">Open menu</span>
  <svg aria-hidden="true" […]>
    <path d="M2 12h21M7 6l-6 6 6 6" […]>
  </svg>
</button>
```

This alternative way is what this component does.

_💡 The `aria-label` attribute is a nicer and easier implementation due to it being applied by an attribute as opposed to adding an element to the DOM as this component does. However, due to the `aria-label` attribute only working on native interactive elements the `HideVisually` component still has its use cases._

### Further Reading

- [See No Evil: Hidden Content and Accessibility](https://cloudfour.com/thinks/see-no-evil-hidden-content-and-accessibility/)

## API

| Name       | Type      | Required | Description                                                     |
| ---------- | --------- | -------- | --------------------------------------------------------------- |
| `children` | `node`    | Yes      | The contents.                                                   |
| `isInline` | `boolean` | No       | Changes the wrapping element to a `span` thus making it inline. |
| `...props` | `spread`  | No       | Further props, except for `className` (see ✋).                 |

**✋ This component's styles are purely functional, therefore, they cannot be extended.**

### Examples

#### `children`

```jsx
<HideVisually>Your text</HideVisually>
```

```jsx
<HideVisually>
  Your text with a <a href="#">link</a>
</HideVisually>
```

#### `isInline`

```jsx
<HideVisually isInline>Your text</HideVisually>
```

#### `...props`

```jsx
<HideVisually id="uuid">Your text</HideVisually>
```

## Installation

Refer to the [**Installing a Component**](../../README.md#installing-a-component) section of the master `README.md`.

## Sandbox

Refer to the [**Sandbox** section](../../README.md#sandbox) of the master `README.md`.
