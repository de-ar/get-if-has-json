# get-if-has-json

![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/de-ar/get-if-has-json/Build/main)

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
