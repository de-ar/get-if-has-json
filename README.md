# get-if-has-json

[![Build](https://github.com/de-ar/get-if-has-json/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/de-ar/get-if-has-json/actions/workflows/build.yml)
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
const getIfHasJSON = require('get-if-has-json')

const obj = { john: 'doe', foo: true }

getIfHasJSON('foo' + JSON.stringify({}) + 'bar')
// Output: {}
getIfHasJSON('salkdj fslkf slkdfsd ' + JSON.stringify(obj) + '^&%$&^(*&^*&^')
// Output: {"john":"doe","foo":true}
```

## API

### Parameters

- `str` `{String}` String that contains a JSON object.

### Returns

- `{String}` A valid parsable JSON String.
