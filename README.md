# Unnecessary ESLint and Prettier setup

[![npm version](https://img.shields.io/npm/v/eslint-config-jcv)](https://www.npmjs.com/package/eslint-plugin-jcv)
![badge](https://action-badges.now.sh/fourjuaneight/eslint-config-jcv)

Personally unnecessary config for ESLint and Prettier. I guess you can use it too, though there's hardly anything in it.

## What it does
* Lints JavaScript based on the latest standards
* Fixes issues and formatting errors with Prettier
* Lints + Fixes inside of HTML script tags
* Lints + Fixes React via eslint-config-airbnb

Please don't just install some rando's configuration for a potential code-breaking tool. Look at what I'm using and determine which rules work best for you.

## Installing
We're reasonable people, so let's install this locally.

1. If you don't already have a `package.json` file, create one with `npm init`.

2. Install the config's dependencies:

```
npx install-peerdeps --dev eslint-config-jcv
```

3. Create a `.eslintrc.js` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc.js` file should look like this:

```json
{
  "extends": [
    "jcv"
  ]
}
```

For React projects:
```json
{
  "extends": [
    "jcv"
    "jcv/react"
  ]
}
```

Alternatively, you can put this object in your `package.json` under the property `"eslintConfig"`.

4. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

5. Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`. You probably want your editor to do this though.


_Setup and instructions "inspired" by [Wes Bos' No-Sweat™ config](https://github.com/wesbos/eslint-config-wesbos/)._