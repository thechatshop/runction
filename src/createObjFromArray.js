const { reduce, assoc } = require('ramda');

/**
 * Creates an object from an array of objects with {key:'key', value:'value'} pairs
 *
 *
 * @sig [{a}] → {k: v}
 *
 * Usage:
 * const input = [{ key: 'Thanos', value: 'di' }, { key: 'Marios', value: 'ant' }]
 *
 * createObjFromArray(input)
 * //=> { Thanos: 'di', Marios: 'ant' }
 */
const createObjFromArray = reduce(
	(prev, { key, value }) => assoc(key, value, prev),
	{},
);

module.exports = createObjFromArray;
