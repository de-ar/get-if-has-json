# get-if-has-json

![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/de-ar/get-if-has-json/Build/main)
[![Latest Stable Version](https://img.shields.io/npm/v/get-if-has-json.svg)](https://www.npmjs.com/package/get-if-has-json)
[![NPM Downloads](https://img.shields.io/npm/dt/get-if-has-json.svg)](https://www.npmjs.com/package/get-if-has-json)
[![Dependency Status](https://img.shields.io/david/de-ar/get-if-has-json.svg)](https://david-dm.org/de-ar/get-if-has-json)
[![devDependency Status](https://img.shields.io/david/dev/de-ar/get-if-has-json.svg)](https://david-dm.org/de-ar/get-if-has-json#info=devDependencies)

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

- `{String}` A valid parsable JSON String
