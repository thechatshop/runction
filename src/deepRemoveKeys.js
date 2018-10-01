const { pipe, T, omit, map, is, cond, identity } = require('ramda');

module.exports = (keys, data) => {
	const traverse = cond([
		[is(Array), arr => map(traverse)(arr)],
		[is(Object), obj => map(traverse)(omit(keys, obj))],
		[T, identity],
	]);

	return pipe(
		cond([[is(Array), map(omit(keys))], [T, omit(keys)]]),
		map(traverse),
	)(data);
};
