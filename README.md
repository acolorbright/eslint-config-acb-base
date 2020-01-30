# eslint-config-acb-base

This plugin provides ACB's base JS `.eslintrc` (without React plugins) as an extensible shared config, based on Airbnb's
[eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base).

## Installation

The plugin requires `eslint`, `babel-eslint`, and the following other packages:
  - `eslint-plugin-extra-rules`
  - `eslint-plugin-import`

```shell
$ npm install --save-dev 'acolorbright/eslint-config-acb-base#v3.1.1' babel-eslint@10.x eslint@6.x eslint-plugin-extra-rules@^0.8 eslint-plugin-import@2.x
```

Then add `"extends": "acb-base"` to your `.eslintrc` file.
