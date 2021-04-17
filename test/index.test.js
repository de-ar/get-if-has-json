const getIfHasJSON = require('../lib/index.js')

let param = ''
let obj = {}

// empty string
test(`returns undefined with parameter: '${param}'`, () =>
  expect(getIfHasJSON(param)).toBeUndefined())

// crap
param = '{{{'
test(`returns undefined with parameter: '${param}'`, () =>
  expect(getIfHasJSON(param)).toBeUndefined())

// crap
param = '!@#$%^&*()_+'
test(`returns undefined with parameter: '${param}'`, () =>
  expect(getIfHasJSON(param)).toBeUndefined())

// crap
param = '}}}'
test(`returns undefined with parameter: '${param}'`, () =>
  expect(getIfHasJSON(param)).toBeUndefined())

// invalid JSON Object
param = '{[]}'
test(`returns undefined with parameter: '${param}'`, () =>
  expect(getIfHasJSON(param)).toBeUndefined())

// invalid JSON Object
param = '{"foo":bar}'
test(`returns undefined with parameter: '${param}'`, () =>
  expect(getIfHasJSON(param)).toBeUndefined())

// invalid JSON Object
param = '{foo:"bar"}'
test(`returns undefined with parameter: '${param}'`, () =>
  expect(getIfHasJSON(param)).toBeUndefined())

// invalid JSON Object
param = '{foo:"bar}'
test(`returns undefined with parameter: '${param}'`, () =>
  expect(getIfHasJSON(param)).toBeUndefined())

// empty JSON Object
test(`returns parsable JSON string with parameter: '${JSON.stringify(
  obj,
)}'`, () => expect(getIfHasJSON(JSON.stringify(obj))).toBe(JSON.stringify(obj)))

// empty JSON Object with crap on both sides
test(`returns parsable JSON string with parameter: '${
  'foo' + JSON.stringify(obj) + 'bar'
}'`, () =>
  expect(getIfHasJSON('foo' + JSON.stringify(obj) + 'bar')).toBe(
    JSON.stringify(obj),
  ))

// valid JSON Object with crap on both sides
obj = { john: 'doe', foo: true }
test(`returns parsable JSON string with parameter: '${
  'salkdj fslkf slkdfsd ' + JSON.stringify(obj) + '^&%$&^(*&^*&^'
}'`, () =>
  expect(
    getIfHasJSON(
      'salkdj fslkf slkdfsd ' + JSON.stringify(obj) + '^&%$&^(*&^*&^',
    ),
  ).toBe(JSON.stringify(obj)))
