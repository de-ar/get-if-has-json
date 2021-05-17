const json = require('../lib')

describe('#json', () => {
  let param = ''
  let obj = {}

  // empty string
  test(`returns undefined with parameter: '${param}'`, () =>
    expect(json(param)).toBeUndefined())

  // crap
  param = '{{{'
  test(`returns undefined with parameter: '${param}'`, () =>
    expect(json(param)).toBeUndefined())

  // crap
  param = '!@#$%^&*()_+'
  test(`returns undefined with parameter: '${param}'`, () =>
    expect(json(param)).toBeUndefined())

  // crap
  param = '}}}'
  test(`returns undefined with parameter: '${param}'`, () =>
    expect(json(param)).toBeUndefined())

  // invalid JSON Object
  param = '{[]}'
  test(`returns undefined with parameter: '${param}'`, () =>
    expect(json(param)).toBeUndefined())

  // invalid JSON Object
  param = '{"foo":bar}'
  test(`returns undefined with parameter: '${param}'`, () =>
    expect(json(param)).toBeUndefined())

  // invalid JSON Object
  param = '{foo:"bar"}'
  test(`returns undefined with parameter: '${param}'`, () =>
    expect(json(param)).toBeUndefined())

  // invalid JSON Object
  param = '{foo:"bar}'
  test(`returns undefined with parameter: '${param}'`, () =>
    expect(json(param)).toBeUndefined())

  // empty JSON Object
  test(`parsed JSON object with parameter: '${JSON.stringify(obj)}'`, () =>
    expect(json(JSON.stringify(obj))).toStrictEqual(obj))

  // empty JSON Object with crap on both sides
  test(`parsed JSON object with parameter: '${
    'foo' + JSON.stringify(obj) + 'bar'
  }'`, () =>
    expect(json('foo' + JSON.stringify(obj) + 'bar')).toStrictEqual(obj))

  // valid JSON Object with crap on both sides
  obj = { john: 'doe', foo: true }
  test(`parsed JSON object with parameter: '${
    'salkdj fslkf slkdfsd ' + JSON.stringify(obj) + '^&%$&^(*&^*&^'
  }'`, () =>
    expect(
      json('salkdj fslkf slkdfsd ' + JSON.stringify(obj) + '^&%$&^(*&^*&^'),
    ).toStrictEqual(obj))
})
