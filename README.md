# eslint-config-clearleft

ESLint configuration to be shared across all Clearleft repositories.

## Overview

This package is an [ESLint shareable config](http://eslint.org/docs/developer-guide/shareable-configs) which can be used in conjunction with an ESLint based plugin such as [xo](https://github.com/sindresorhus/xo), in order to help maintain consistent styles across a codebase.

```
"xo": {
  "extends": "https://github.com/clearleft/eslint-config-clearleft/"
}
```

## Usage
To use with `xo`, pass the repo name to the the [`extends`](https://github.com/sindresorhus/xo#extends) option in `package.json`:

```
{
  "name": "repo-name",
  ...
  },
  "xo": {
    "extends": "https://github.com/clearleft/eslint-config-clearleft/"
  }
}
```

## Requirements
Node: >= 6.0.0
