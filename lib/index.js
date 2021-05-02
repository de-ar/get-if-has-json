"use strict";
/**
 * Extract JSON from a string that contains a bunch of crap before or after a valid JSON Object.
 *
 * @since 0.2.0
 * @category Function
 * @param {string} str String that contains a JSON object.
 * @returns {string} A valid parsable JSON String.
 * @example
 *
 * const obj = { john: 'doe', foo: true }
 * getIfHasJSON('salkdj fslkf slkdfsd ' + JSON.stringify(obj) + '^&%$&^(*&^*&^')
 * // => Output: "{"john":"doe","foo":true}"
 */
var getIfHasJSON = function (str) {
    var start = -Infinity, end = Infinity;
    start = str.indexOf('{', start + 1);
    while (start !== -1) {
        end = str.lastIndexOf('}');
        while (end > start) {
            try {
                return JSON.stringify(JSON.parse(str.substring(start, end + 1)));
            }
            catch (e) { }
            end = str.substr(0, end).lastIndexOf('}');
        }
        start = str.indexOf('{', start + 1);
    }
};
module.exports = getIfHasJSON;
//# sourceMappingURL=index.js.map