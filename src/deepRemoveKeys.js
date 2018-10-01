const {
	T,
	complement,
	cond,
	identity,
	ifElse,
	is,
	isNil,
	map,
	omit,
	pipe,
} = require('ramda');

const isNotNil = complement(isNil);
module.exports = (keys, data) => {
	const traverse = cond([
		[is(Array), arr => map(traverse)(arr)],
		[is(Object), obj => map(traverse)(omit(keys, obj))],
		[T, identity],
	]);

	return ifElse(
		isNotNil,
		pipe(
			cond([[is(Array), map(omit(keys))], [T, omit(keys)]]),
			map(traverse),
		),
		identity,
	)(data);
};
