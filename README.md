[![GitHub
license](https://img.shields.io/github/license/chris-pearce/bricks.svg?longCache=true&style=popout-square)](https://github.com/chris-pearce/bricks/blob/master/LICENSE) [![Code of
conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?longCache=true&style=popout-square)](https://github.com/chris-pearce/bricks/blob/master/CODE_OF_CONDUCT.md) [![PRs
Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# 🧱 Bricks <!-- omit in toc -->

A bunch of accessible ([#a11y](https://twitter.com/search?src=typd&q=%23a11y)) React presentational components that you can use to help build your UI.

To start with, Bricks is focusing on primitive (or foundational) components (see the [list](#the-components)).

## Table of Contents <!-- omit in toc -->

- [Installing a Component](#installing-a-component)
  - [npm](#npm)
  - [Download](#download)
  - [CDN](#cdn)
- [How to Add a Component](#how-to-add-a-component)
  - [With a Bundler (webpack, Parcel, etc.)](#with-a-bundler-webpack-parcel-etc)
    - [ES Modules](#es-modules)
    - [CommonJS Modules](#commonjs-modules)
    - [Styles](#styles)
  - [Without a bundler](#without-a-bundler)
    - [Styles](#styles-1)
- [The Components](#the-components)
- [Styling](#styling)
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

The following instructions use a **`<package-name>`** placeholder to represent a component's package name which you can get from the `name` field of the package's `package.json` file, e.g.:

[add link here]

And a **`<ComponentName>`** placeholder that represent's the component name (or filename), e.g.:

- `HideVisually`
- `Spacing`

### npm

Run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @bricks/<package-name> --save-dev
```

If you prefer [Yarn](https://yarnpkg.com/en/), use this command instead:

```bash
yarn add @bricks/<package-name> --dev
```

### Download

`https://cdn.jsdelivr.net/npm/@bricks/<package-name>/lib`

### CDN

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

So, if we were importing the `HideVisually` component our imports would look like this:

```js
import HideVisually from '@bricks/HideVisually';
import '@bricks/hide-visually/lib/HideVisually.css';
```

### Without a bundler

Add a `<script>` element to your page:

```html
<script src="https://unpkg.com/@bricks/<package-name>"></script>
```

You can find the library on `window.Bricks<ComponentName>`, e.g.: `BricksHideVisually`.

#### Styles

Add a `<link>` element to your page but make sure it's placed before any of your project's styles, e.g.:

```html
<link rel="stylesheet" href="@bricks/<package-name>/lib/<ComponentName>.css" />
<link rel="stylesheet" href="<your-projects-styles>" />
```

## The Components

- [`<HideVisually />`](packages/hide-visually/README.md)
- [`<Spacing />`](packages/spacing/README.md)

## Styling

_Coming soon…_

## Contributing

_Coming soon…_

## License

The code is available under the [MIT license](LICENSE).
