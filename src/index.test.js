const Runction = require('.');

const renamedObj = Runction.renameKeys({
	firstName: 'name',
	type: 'kind',
	foo: 'bar',
});

test('Runction renameKeys', () => {
	const input = { firstName: 'Elisia', age: 22, type: 'human' };

	expect(renamedObj(input)).toEqual({ name: 'Elisia', age: 22, kind: 'human' });
});

test('Runction renameKeys with null, object, array to throw', () => {
	const nullInput = null;
	const undefinedInput = undefined;
	const emptyArrayInput = [];
	const stringInput = '';
	const numberInput = 43;
	const functionInput = () => {};

	expect(() => renamedObj(nullInput)).toThrowError('Invalid object supplied.');
	expect(() => renamedObj(emptyArrayInput)).toThrowError(
		'Invalid object supplied.',
	);
	expect(() => renamedObj(stringInput)).toThrowError(
		'Invalid object supplied.',
	);
	expect(() => renamedObj(numberInput)).toThrowError(
		'Invalid object supplied.',
	);
	expect(() => renamedObj(undefinedInput)).toThrowError(
		'Invalid object supplied.',
	);
	expect(() => renamedObj(functionInput)).toThrowError(
		'Invalid object supplied.',
	);
});

test('Runction createObjFromArray', () => {
	const input = [
		{ key: 'Thanos', value: 'di' },
		{ key: 'Marios', value: 'ant' },
	];

	const obj = Runction.createObjFromArray(input);

	expect(obj).toEqual({ Thanos: 'di', Marios: 'ant' });
});
