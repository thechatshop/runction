const {
	expected,
	input,
	arrayInput,
	expectedArray,
	multiKeyArrayInput,
} = require('./fixtures');
const { deepRemoveKeys } = require('.');

describe('deepRemoveKeys', () => {
	it('Handles object input 🎉', () => {
		expect(deepRemoveKeys(['__typename'], input)).toEqual(expected);
	});

	it('Handles array of objects input 🎉', () => {
		expect(deepRemoveKeys(['__typename'], arrayInput)).toEqual(expectedArray);
	});

	it('Handles multiple keys 🎉', () => {
		expect(deepRemoveKeys(['__typename', 'label'], multiKeyArrayInput)).toEqual(
			expectedArray,
		);
	});
	it('Handles nil values 🎉', () => {
		expect(deepRemoveKeys(['__typename', 'label'], null)).toEqual(null);
		expect(deepRemoveKeys(['__typename', 'label'], undefined)).toEqual(
			undefined,
		);
	});
});
