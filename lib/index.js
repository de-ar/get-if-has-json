"use strict";
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
var json = function (str) {
    var start = -Infinity, end = Infinity;
    start = str.indexOf('{', start + 1);
    while (start !== -1) {
        end = str.lastIndexOf('}');
        while (end > start) {
            try {
                return JSON.parse(str.substring(start, end + 1));
            }
            catch (e) { }
            end = str.substr(0, end).lastIndexOf('}');
        }
        start = str.indexOf('{', start + 1);
    }
};
module.exports = json;
