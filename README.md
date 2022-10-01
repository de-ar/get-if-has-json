# get-if-has-json

[![Tests](https://github.com/de-ar/get-if-has-json/actions/workflows/test.yml/badge.svg)](https://github.com/de-ar/get-if-has-json/actions/workflows/test.yml)
[![Coverage Status](https://coveralls.io/repos/github/de-ar/get-if-has-json/badge.svg?branch=main)](https://coveralls.io/github/de-ar/get-if-has-json?branch=main)
[![Latest Stable Version](https://img.shields.io/npm/v/get-if-has-json.svg)](https://www.npmjs.com/package/get-if-has-json)
[![NPM Downloads](https://img.shields.io/npm/dt/get-if-has-json.svg)](https://www.npmjs.com/package/get-if-has-json)

Extract JSON from a string that contains a bunch of crap before or after a valid JSON Object.

## Install

```
npm i get-if-has-json
```

## Usage

```js
const json = require('get-if-has-json')

json('foo {  } bar')
// Output: {}
```

## API

### Parameters

- `str` `{String}` String that contains a JSON object.

### Returns

- `{Object}` Parsed JSON.
