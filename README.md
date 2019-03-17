[![GitHub
license](https://img.shields.io/github/license/chris-pearce/bricks.svg?longCache=true&style=popout-square)](https://github.com/chris-pearce/bricks/blob/master/LICENSE) [![Code of
conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?longCache=true&style=popout-square)](https://github.com/chris-pearce/bricks/blob/master/CODE_OF_CONDUCT.md) [![PRs
Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# 🧱 Bricks <!-- omit in toc -->

A bunch of accessible ([#a11y](https://twitter.com/search?src=typd&q=%23a11y)) React presentational components to help build your UI (brick by brick).

[View Sandbox](https://chris-pearce.github.io/bricks).

**✋ Bricks is still in development and therefore isn't quite ready for consumption.**

## Table of Contents <!-- omit in toc -->

- [Installing a Component](#installing-a-component)
  - [Placeholders](#placeholders)
    - [`<package-name>`](#package-name)
    - [`<ComponentName>`](#componentname)
    - [Case Formats](#case-formats)
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
- [Tokens](#tokens)
- [Styling](#styling)
  - [How Components are Styled Internally](#how-components-are-styled-internally)
    - [Global Styles](#global-styles)
  - [How Components are Styled Externally](#how-components-are-styled-externally)
    - [`className` prop](#classname-prop)
      - [Vanilla](#vanilla)
      - [CSS Modules](#css-modules)
    - [`styled-components`](#styled-components)
    - [Closed for Extension](#closed-for-extension)
    - [Placement](#placement)
    - [Child Elements](#child-elements)
- [Sandbox](#sandbox)
- [Development](#development)
  - [Installation](#installation)
  - [Scripts](#scripts)
    - [`yarn dev`](#yarn-dev)
    - [`yarn deploy:sandbox`](#yarn-deploysandbox)
    - [`yarn bootstrap`](#yarn-bootstrap)
    - [`yarn postbootstrap`](#yarn-postbootstrap)
    - [`yarn build`](#yarn-build)
    - [`yarn precommit`](#yarn-precommit)
    - [`yarn lint`](#yarn-lint)
    - [`yarn clean:lib`](#yarn-cleanlib)
  - [Yarn Workspaces](#yarn-workspaces)
  - [Visual Studio Code](#visual-studio-code)
- [Roadmap](#roadmap)
  - [Coming Soon…](#coming-soon)
  - [Later](#later)
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

### Placeholders

The following instructions use two placeholders to avoid repeating the same information in every package's `README.md` file.

#### `<package-name>`

This placeholder represents a component's package name which you can get from the `name` field of the package's `package.json` file. For example:

```json
"name": "@bricks/hide-visually"
```

—[source](https://github.com/chris-pearce/bricks/blob/96400348c352864c3a6d80db8b7bd45c44e39fb3/packages/hide-visually/package.json#L2)

#### `<ComponentName>`

This placeholder represents the component/file name, for example:

| Component name | JavaScript file name | CSS file name      |
| -------------- | -------------------- | ------------------ |
| `HideVisually` | `Hidevisually.js`    | `HideVisually.css` |
| `Spacing`      | `Spacing.js`         | `Spacing.css`      |

#### Case Formats

- Package names use **kebab-case**.
- Component/file names use **PascalCase**.

### npm

Run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @bricks/<package-name> --save-dev
```

If you prefer [Yarn](https://yarnpkg.com/en/), use this command instead:

```bash
yarn add @bricks/<package-name> --dev
```

**✋ Make sure to install the package's `peerDependencies`.**

### Download/CDN

- **jsDelivr** `https://www.jsdelivr.com/package/npm/@bricks/<package-name>`
- **unpkg** `https://unpkg.com/@bricks/<package-name>`

## How to Add a Component

### With a Bundler (webpack, Parcel, etc.)

#### ES Modules

```js
import { <ComponentName> } from '@bricks/<package-name>';
```

#### CommonJS Modules

```js
const <ComponentName> = require('@bricks/<package-name>');
```

#### Styles

```js
import '@bricks/<package-name>/lib/<ComponentName>.css';
```

💡 _For general information on how Brick's is styled, see the [**Styling**](#styling) section._

#### Example

```js
import { HideVisually } from '@bricks/HideVisually';
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

## Tokens

_Will be explained soon…_

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development.—<https://www.lightningdesignsystem.com/design-tokens/>

## Styling

### How Components are Styled Internally

Bricks uses vanilla CSS to style its components and only includes functional styles. That is, styles that are necassary for the component to **work** rather than not how it **works** _and_ **looks**. How a component **looks** is left up to you 🙂.

Class selectors are always used and are structured like this:

```
[scope-][component-name][element]
```

_`[element]` will be removed if there's only one element._

So, for the `HideVisually` component, which is only one element, the class name will be:

```
bricks-hide-visually
```

#### Global Styles

Bricks doesn't use any global styles, all styles are scoped to a component by the parent element's class selector.

If you're looking for _**a lightweight and somewhat opinionated CSS foundation that is best suited to applications**_ then we recommend [`backpack.css`](https://github.com/chris-pearce/backpack.css) 🎒🔌.

### How Components are Styled Externally

It's up to you how you want to extend a component's styles. For example, you can use the `className` prop _or_ if CSS-in-JS is your thing you can extend that way. For example:

#### `className` prop

##### Vanilla

```jsx
<Heading className="heading" />
```

##### CSS Modules

```jsx
<Heading className={styles.heading} />
```

#### `styled-components`

```js
const HeadingStyled = styled(Heading)`
  // Your project styles
`;
```

**✋ However, when you extend a component's styles you should be referencing Bricks' functional styles so you know what's already been provided and therefore what not to override.**

Additionally, never use Brick's CSS classes in your stylesheet, always provide your own.

#### Closed for Extension

Certain components cannot be extended as they are purely functional, for example, the `HideVisually` and `Spacing` components. These components will be labelled as such and will not allow `className` and/or `style` props to be applied.

#### Placement

You need to always make sure that Brick's component styles are imported before your own project styles to ensure the rules of the cascade and specificity apply.

So, when looking at your compiled stylesheet you should always see Bricks CSS classes coming first, for example:

```css
/* Your stylesheet */

.bricks-heading {
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
/* Your stylesheet */

.bricks-heading {
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

It really depends on where you import Brick's library styles and your own project styles within your project. As long as the library styles are imported first then everything will be fine.

#### Child Elements

_Will be explained soon…_

## Sandbox

Bricks uses [Storybook](https://storybook.js.org) for its sandbox, [view here](https://chris-pearce.github.io/bricks/).

**✋ The sandbox is not Brick's official documentation, that is handled via the `README.md`'s.**

The sandbox is used for two purposes:

1. As a development environment.
2. A place where people can go to see Brick's components being used in certain scenerios and demoing their API's (props).

## Development

Bricks uses [Lerna](https://lernajs.io/) to manage its monorepo.

### Installation

1. Clone the repository and `cd` into the project:

   ```bash
   git clone git@github.com:chris-pearce/bricks.git && cd bricks
   ```

2. Install the dependencies:

   ```bash
   yarn install
   ```

3. Bootstrap the project using Lerna:

   ```bash
   yarn bootstrap
   ```

4. Build the project:

   ```bash
   yarn build
   ```

### Scripts

_In the order they are listed in the master [`package.json`](package.json) file._

#### `yarn dev`

Launches the [Sandbox](#sandbox).

_💡 The script detects all files within the `packages` folder ending in `.stories.js`._

#### `yarn deploy:sandbox`

Deploys the sandbox to the [GitHub Pages site](https://chris-pearce.github.io/bricks) using [storybook-deployer](https://github.com/storybooks/storybook-deployer).

#### `yarn bootstrap`

Bootstraps Lerna so all dependencies get linked for cross-component development.

**✋ Will be removed as Bricks is using [Yarn Workspaces](#yarn-workspaces).**

#### `yarn postbootstrap`

Runs `yarn build` (see next script) directly after `yarn bootstrap`.

#### `yarn build`

Builds all packages saving them to their `lib` folder.

The following tasks are performed in this order:

1. Clean the package's `lib` folder.
2. Bundle the packages using [Rollup](https://rollupjs.org).
3. Copy statics files to the package's `lib` folder.

#### `yarn precommit`

Perform a series of tasks using [`lint-staged`](https://github.com/okonet/lint-staged) which are automatically triggered when performing a git commit.

The following tasks are performed in this order:

1. Runs [Prettier](https://prettier.io/) over all processed files rewriting any issues.
2. Lints all JavaScript files using [ESLint](https://eslint.org/) rewriting any issues (see [`yarn lint`](#yarn-lint)).

#### `yarn lint`

Lints all JavaScript files in the project using [ESLint](https://eslint.org/). See [.eslintignore](.eslintignore) for the files ESLint ignores.

**✋ Runs automatically as part of the precommit hook.**

#### `yarn clean:lib`

Cleans all of the `lib` folders within each package.

### Yarn Workspaces

_Will be explained soon…_

Some further reading in the meantime:

- [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)
- [A Beginner's Guide to Lerna with Yarn Workspaces](https://medium.com/@jsilvax/a-workflow-guide-for-lerna-with-yarn-workspaces-60f97481149d)

### Visual Studio Code

_Will be explained soon…_

## Roadmap

This roadmap is specifically concerned with upcoming Bricks components.

### Coming Soon…

1. `Heading`
2. `Container`
3. `Fieldset`
4. `LongFormCopy`
5. `Icon`
6. `Media`

### Later

- `Dialog`
- `MenuButton`
- `Toolip`

## Browser support

Here's the [Browserslist](https://github.com/browserslist/browserslist) query Bricks uses:

```bash
last 4 versions and > 0.5%,
Firefox ESR,
not ie < 11,
not op_mini all,
not dead
```

Which you can see [here](https://browserl.ist/?q=last+4+versions+and+%3E+0.5%25%2C+Firefox+ESR%2C+not+ie+%3C+11%2C+not+op_mini+all%2C+not+dead).

## Contributing

_Coming soon…_

## License

The code is available under the [MIT license](LICENSE).
