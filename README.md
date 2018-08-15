# eslint-config-clearleft

ESLint configuration to be shared across all Fractal repositories.

[![NPM Version](https://img.shields.io/npm/v/@clearleft/eslint-config-clearleft.svg?style=flat-square)](https://www.npmjs.com/package/@clearleft/eslint-config-clearleft)

## Overview

This package is an [ESLint shareable config](http://eslint.org/docs/developer-guide/shareable-configs) which can be used in conjunction with an ESLint based plugin such as [xo](https://github.com/sindresorhus/xo), in order to help maintain consistent styles across a codebase.

```
"xo": {
  "extends": "@clearleft/eslint-config-clearleft"
}
```

## Installation

Installation is via [npm](https://www.npmjs.com/).

`npm i @clearleft/eslint-config-clearleft`


## Usage
To use with `xo`, first ensure the package has been installed (see above) and then pass the package name to the the [`extends`](https://github.com/sindresorhus/xo#extends) option in `package.json`:

```
{
  "name": "repo-name",
  ...
  },
  "devDependencies": {
    "@clearleft/eslint-config-clearleft": "0.1.0"
  },
  "xo": {
    "extends": "@clearleft/eslint-config-clearleft"
  }
}
```

## Requirements
Node: >= 6.0.0
