const {
	curry,
	reduce,
	assoc,
	keys,
	ifElse,
	not,
	allPass,
	is,
	complement,
	isEmpty,
} = require('ramda');
/**
 * Creates a new object with the own properties of the provided object, but the
 * keys renamed according to the keysMap object as `{oldKey: newKey}`.
 * When some key is not found in the keysMap, then it's passed as-is.
 *
 * Keep in mind that in the case of keys conflict is behaviour undefined and
 * the result may vary between various JS engines!
 *
 * @sig {a: b} -> {a: *} -> {b: *}
 *
 * Usage:
 * const input = { firstName: 'Elisia', age: 22, type: 'human' }
 *
 * renameKeys({ firstName: 'name', type: 'kind', foo: 'bar' })(input)
 * //=> { name: 'Elisia', age: 22, kind: 'human' }
 */

const isNotFunction = x =>
	not(Object.prototype.toString.call(x) === '[object Function]');
const isObject = is(Object);
const isNotEmpty = complement(isEmpty);
const pass = allPass([isObject, isNotFunction, isNotEmpty]);

const renameKeys = curry(
	ifElse(
		(keysMap, obj) => pass(obj),
		(keysMap, obj) =>
			reduce(
				(acc, key) => assoc(keysMap[key] || key, obj[key], acc),
				{},
				keys(obj),
			),
		() => {
			throw new Error('Invalid object supplied.');
		},
	),
);

module.exports = renameKeys;
