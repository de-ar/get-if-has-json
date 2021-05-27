/**
 * Extract JSON from a string that contains a bunch of crap before or after a valid JSON Object.
 *
 * @since 0.2.0
 * @category Function
 * @param {string} str String that contains a JSON object.
 * @returns {object} Parsed JSON.
 * @example
 *
 * const json = require('get-if-has-json')
 *
 * json('foo {  } bar')
 * // Output: {}
 */
declare const json: (str: string) => object | undefined;
export = json;
