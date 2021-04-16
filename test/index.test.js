const getIfHasJSON = require('../lib/index.js')

let param = ''
let obj = {}

test(`returns undefined with parameter: '${param}'`, () =>
  expect(getIfHasJSON(param)).toBeUndefined())
param = '{{{'
test(`returns undefined with parameter: '${param}'`, () =>
  expect(getIfHasJSON(param)).toBeUndefined())
param = '!@#$%^&*()_+'
test(`returns undefined with parameter: '${param}'`, () =>
  expect(getIfHasJSON(param)).toBeUndefined())
param = '}}}'
test(`returns undefined with parameter: '${param}'`, () =>
  expect(getIfHasJSON(param)).toBeUndefined())
param = '{[]}'
test(`returns undefined with parameter: '${param}'`, () =>
  expect(getIfHasJSON(param)).toBeUndefined())
param = '{"foo":bar}'
test(`returns undefined with parameter: '${param}'`, () =>
  expect(getIfHasJSON(param)).toBeUndefined())
param = '{foo:"bar"}'
test(`returns undefined with parameter: '${param}'`, () =>
  expect(getIfHasJSON(param)).toBeUndefined())
param = '{foo:"bar}'
test(`returns undefined with parameter: '${param}'`, () =>
  expect(getIfHasJSON(param)).toBeUndefined())

test(`returns parsable JSON string with parameter: '${JSON.stringify(
  obj,
)}'`, () => expect(getIfHasJSON(JSON.stringify(obj))).toBe(JSON.stringify(obj)))
test(`returns parsable JSON string with parameter: '${
  'foo' + JSON.stringify(obj) + 'bar'
}'`, () => expect(getIfHasJSON(JSON.stringify(obj))).toBe(JSON.stringify(obj)))
obj = { john: 'doe', foo: true }
test(`returns parsable JSON string with parameter: '${
  'salkdj fslkf slkdfsd ' + JSON.stringify(obj) + '^&%$&^(*&^*&^'
}'`, () => expect(getIfHasJSON(JSON.stringify(obj))).toBe(JSON.stringify(obj)))
