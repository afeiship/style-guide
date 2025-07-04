# style-guide
> My frontend style guide.

## Installation

```shell
# For default prettier config
yarn add --dev prettier @jswork/style-guide

# For tailwindcss
yarn add --dev prettier prettier-plugin-tailwindcss @jswork/style-guide
```

## Usage

Create a `.prettierrc.js` file in your project root.

**Default:**
```js
module.exports = require('@jswork/style-guide');
```

**With Tailwind CSS:**
```js
module.exports = require('@jswork/style-guide/tailwind');
```

Alternatively, you can reference it in your `package.json`:
```json
{
  "prettier": "@jswork/style-guide"
}
```

or for tailwind:
```json
{
  "prettier": "@jswork/style-guide/tailwind"
}
```

## Extending the config

You can override the rules in both `.prettierrc.js` and `.prettierrc.json` files.

**Using `.prettierrc.js`:**

If you want to override some of the rules, you can do so by spreading the base config:

```js
// .prettierrc.js
const baseConfig = require('@jswork/style-guide');

module.exports = {
  ...baseConfig,
  // your overrides here
  semi: false,
  singleQuote: false,
};
```

**Using `.prettierrc.json`:**

Create a `.prettierrc.json` file and use the `extends` key to inherit the configuration, then add your overrides.

```json
{
  "extends": "@jswork/style-guide",
  "semi": false,
  "singleQuote": false
}
```

## references
- Inspired by [airbnb/javascript](https://github.com/strangelove-ventures/style-guide)
- https://js.work/works/939fac7b3e2c3
