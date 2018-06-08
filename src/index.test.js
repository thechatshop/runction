const Runction = require('.');

test('Runction renameKeys', () => {
	const input = { firstName: 'Elisia', age: 22, type: 'human' };
	const renamedObj = Runction.renameKeys({
		firstName: 'name',
		type: 'kind',
		foo: 'bar',
	})(input);

	expect(renamedObj).toEqual({ name: 'Elisia', age: 22, kind: 'human' });
});

test('Runction createObjFromArray', () => {
	const input = [
		{ key: 'Thanos', value: 'di' },
		{ key: 'Marios', value: 'ant' },
	];

	const obj = Runction.createObjFromArray(input);

	expect(obj).toEqual({ Thanos: 'di', Marios: 'ant' });
});
