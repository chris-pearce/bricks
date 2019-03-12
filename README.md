[![GitHub
license](https://img.shields.io/github/license/chris-pearce/bricks.svg?longCache=true&style=popout-square)](https://github.com/chris-pearce/bricks/blob/master/LICENSE) [![Code of
conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?longCache=true&style=popout-square)](https://github.com/chris-pearce/bricks/blob/master/CODE_OF_CONDUCT.md) [![PRs
Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# 🧱 Bricks <!-- omit in toc -->

A bunch of accessible ([#a11y](https://twitter.com/search?src=typd&q=%23a11y)) React presentational components to help build your UI (brick by brick).

## Table of Contents <!-- omit in toc -->

- [Installing a Component](#installing-a-component)
  - [npm](#npm)
  - [Download/CDN](#downloadcdn)
- [How to Add a Component](#how-to-add-a-component)
  - [With a Bundler (webpack, Parcel, etc.)](#with-a-bundler-webpack-parcel-etc)
    - [ES Modules](#es-modules)
    - [CommonJS Modules](#commonjs-modules)
    - [Styles](#styles)
    - [Example](#example)
  - [Without a bundler](#without-a-bundler)
    - [JavaScript](#javascript)
    - [Styles](#styles-1)
    - [Example](#example-1)
- [Styling](#styling)
  - [How Components are Styled Internally](#how-components-are-styled-internally)
    - [Global Styles](#global-styles)
  - [How Components are Styled Externally](#how-components-are-styled-externally)
    - [Closed for Extension](#closed-for-extension)
    - [Placement](#placement)
    - [Multiple Elements](#multiple-elements)
    - [Provider Component](#provider-component)
    - [Examples](#examples)
      - [`className` prop](#classname-prop)
        - [Vanilla](#vanilla)
        - [CSS Modules](#css-modules)
      - [`styled-components`](#styled-components)
- [The Components](#the-components)
  - [Coming Soon](#coming-soon)
- [Browser support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## Installing a Component

Bricks is a [monorepo](<[https://en.wikipedia.org/wiki/Monorepo](https://medium.com/trabe/monorepo-setup-with-lerna-and-yarn-workspaces-5d747d7c0e91)>) meaning every component is an interdependent npm package located in the [`/packages`](/packages) folder. It makes sense to use npm's [scoped packages](https://docs.npmjs.com/misc/scope) so that we can group all of Brick's components under one scope: **`@bricks`**.

```bash
├── packages
│   ├── hide-visually #@bricks/hide-visually
│   ├── spacing       #@bricks/spacing
│   └── …
```

The following instructions use a **`<package-name>`** placeholder to represent a component's package name which you can get from the `name` field of the package's `package.json` file, for example:

[add link here]

And a **`<ComponentName>`** placeholder that represent's the component/file name, for example:

- `HideVisually`
- `Spacing`

Package names use **kebab-case** and component/file names use **PascalCase**.

### npm

Run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @bricks/<package-name> --save-dev
```

If you prefer [Yarn](https://yarnpkg.com/en/), use this command instead:

```bash
yarn add @bricks/<package-name> --dev
```

**Make sure to install the `peerDependencies`.**

### Download/CDN

- **jsDelivr** `https://www.jsdelivr.com/package/npm/@bricks/<package-name>`
- **unpkg** `https://unpkg.com/@bricks/<package-name>`

## How to Add a Component

### With a Bundler (webpack, Parcel, etc.)

#### ES Modules

```js
import <ComponentName> from '@bricks/<package-name>';
```

#### CommonJS Modules

```js
const <ComponentName> = require('@bricks/<package-name>');
```

#### Styles

```js
import '@bricks/<package-name>/lib/<ComponentName>.css';
```

_For general information on how Brick's is styled, see the [Styling section](#styling)._

#### Example

```js
import HideVisually from '@bricks/HideVisually';
import '@bricks/hide-visually/lib/HideVisually.css';
```

### Without a bundler

#### JavaScript

Add a `<script>` element to your document:

```html
<script src="https://unpkg.com/@bricks/<package-name>.js"></script>
```

You can find the library on:

```
window.Bricks<ComponentName>
```

For example:

```
window.BricksHideVisually
```

#### Styles

Add a `<link>` element to your document making sure it's placed before any of your project's styles:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@bricks/<package-name>/lib/<ComponentName>.css"
/>
<link rel="stylesheet" href="<your-projects-styles>" />
```

#### Example

```html
<!DOCTYPE html>
<html>
  <head>
    …
    <link
      rel="stylesheet"
      href="https://unpkg.com/@bricks/hide-visually/lib/HideVisually.css"
    />
    <link rel="stylesheet" href="/styles/styles.css" />
  </head>
  <body>
    …
    <!-- peerDependencies (for <version-number> see package.json) -->
    <script src="https://unpkg.com/react/<version-number>"></script>
    <script src="https://unpkg.com/react-dom/<version-number>"></script>
    <!-- Bricks component -->
    <script src="https://unpkg.com/@bricks/hide-visually.js"></script>
  </body>
</html>
```

## Styling

### How Components are Styled Internally

Bricks uses vanilla CSS to style its components and only includes functional styles. That is, styles that are necassary for the component to **work** rather than not how it **works** _and_ **looks**. How a component **looks** is left up to you 🙂.

Class selectors are always used and are structured like this:

```
[scope-][component-name][element]
```

So, for the `HideVisually` component, which is only one element, its class name is:

```
bricks-hide-visually-root
```

#### Global Styles

Bricks doesn't use any global styles, all styles are scoped to a component.

If you're looking for _a lightweight and somewhat opinionated CSS foundation that is best suited to applications_ then we recommend [`backpack.css`](https://github.com/chris-pearce/backpack.css) 🎒🙂.

### How Components are Styled Externally

It's up to you how you want to extend a component's styles. For example, you can use the `className` prop _or_ if CSS-in-JS is your thing you can extend that way. However, when you extend a component's styles you should be referencing Bricks' functional styles so you know what's already been provided and therefore what not to override. Additionally, never use Brick's CSS classes in your stylesheet, always provide your own.

#### Closed for Extension

Certain components cannot be extended as they are purely functional, for example, the `HideVisually` component. These components will be labelled as such and will not allow further props to be applied to them.

#### Placement

You need to always make sure that Brick's component styles are imported before your own project styles to ensure the rules of the cascade and specificity apply.

So, when looking at your compiled stylesheet you should always see Bricks CSS classes coming first:

```css
.bricks-heading-root {
  /* Bricks library styles */
}

.heading {
  /* Your project styles */
}

.bricks-fieldset-root {
  /* Bricks library styles */
}

.fieldset {
  /* Your project styles */
}
```

Or:

```css
.bricks-heading-root {
  /* Bricks library styles */
}

.bricks-fieldset-root {
  /* Bricks library styles */
}

.heading {
  /* Your project styles */
}

.fieldset {
  /* Your project styles */
}
```

It really depends on where you're importing Brick's library styles and your project styles. As long as the library styles are imported first then everything will be fine.

#### Multiple Elements

Some components are comprised of multiple elements. For example, the `FieldSet` component's HTML structure looks like this:

```html
<fieldset>
  <legend><!-- legend text --></legend>
  <!-- children -->
</fieldset>
```

If you need to style a child element, in this case the `<legend>` element, you have a couple of options:

- You can pass an array to the `className` prop where each item in the array represents an element's class name. The order is important,

```jsx
<Fieldset className={['fieldset-root', 'fieldset-legend']} />
{
  root: 'root',
  legend: 'legend',
}
```

#### Provider Component

_Coming soon…_

#### Examples

##### `className` prop

###### Vanilla

```jsx
<Heading className="heading" />
```

###### CSS Modules

```jsx
<Heading className={styles.heading} />
```

##### `styled-components`

```js
const HeadingStyled = styled(Heading)`
  // Your project styles
`;
```

## The Components

- [`HideVisually`](packages/hide-visually/README.md)
- [`Spacing`](packages/spacing/README.md)

### Coming Soon

- `Heading`
- `Container`
- `Fieldset`
- `LongFormCopy`
- `Icon`
- `Media`

## Browser support

Here is the [Browserslist](https://github.com/browserslist/browserslist) query Bricks uses:

```bash
last 4 versions and > 0.5%,
Firefox ESR,
not ie < 11,
not op_mini all,
not dead
```

Which you can see [here](https://browserl.ist/?q=last+4+versions+and+%3E+0.5%25%2C+Firefox+ESR%2C+not+ie+%3C+11%2C+not+op_mini+all%2C+not+dead).

[Autoprefixer](https://github.com/postcss/autoprefixer) is applied to each of Brick's component's CSS.

## Contributing

_Coming soon…_

## License

The code is available under the [MIT license](LICENSE).
