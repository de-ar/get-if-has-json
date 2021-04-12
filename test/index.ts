import tap from 'tap'
import getIfHasJSON from '../lib/index'

const obj = { foo: 'foo', bar: 'bar' }

// empty string
tap.equal(getIfHasJSON(''), undefined)
// just opening brackets
tap.equal(getIfHasJSON('{{{{'), undefined)
// string does not contain valid JSON Object
tap.equal(getIfHasJSON('foo' + 'bar'), undefined)
// invalid JSON object
tap.equal(
  getIfHasJSON('foo' + '{"foo":"bar}' + 'bar'),
  JSON.stringify(undefined),
)

// valid cases
tap.equal(getIfHasJSON('foo' + JSON.stringify({}) + 'bar'), JSON.stringify({}))
tap.equal(
  getIfHasJSON('foo' + JSON.stringify(obj) + 'bar'),
  JSON.stringify(obj),
)
tap.equal(
  getIfHasJSON('{{{{{{' + JSON.stringify(obj) + '}}}}}}'),
  JSON.stringify(obj),
)
