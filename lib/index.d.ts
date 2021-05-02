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
declare const getIfHasJSON: (str: string) => string | undefined;
export = getIfHasJSON;
//# sourceMappingURL=index.d.ts.map