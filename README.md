# eslint-config-acb-base

This plugin provides ACB's base JS `.eslintrc` (without React plugins) as an extensible shared config, based on Airbnb's
[eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base).

## Installation

The plugin requires `eslint` and the following other packages:
  - `eslint-plugin-compat`
  - `eslint-plugin-extra-rules`
  - `eslint-plugin-import`

```shell
$ npm install --save-dev acolorbright/eslint-config-acb-base#v1.0.1 eslint-plugin-compat@2.2.0 eslint-plugin-extra-rules@0.8.1 eslint-plugin-import@2.9.0
```

Then add `"extends": "acb-base"` to your `.eslintrc` file.
