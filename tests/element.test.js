import El from '../lib/element'

const testTags = ['div', 'span', 'img', 'a', 'button', 'input']

const testStrings = [
	{
		test: 'test',
		result: 'test',
	},
	{
		test: 'test-hyphen',
		result: 'test-hyphen',
	},
	{
		test: '',
		result: '',
	},
	{
		test: null,
		result: '',
	},
	{
		test: 123,
		result: '123',
	},
	{
		test: { object: true },
		result: '',
	},
	{
		test: () => 'function call',
		result: 'function call',
	},
	{
		test: () => true,
		result: '',
	},
]

test('El : Creates element', () => {
	testTags.forEach((tag) => {
		const element = document.createElement(tag)
		expect(new El(tag).node).toMatchObject(element)
	})
})

test('El : Sets Id', () => {
	testTags.forEach((tag) => {
		testStrings.forEach((testString) => {
			expect(new El(tag).id(testString.test).node.id).toEqual(testString.result)
		})
	})
})

test('El : Sets Classes', () => {
	testTags.forEach((tag) => {
		testStrings.forEach((testString) => {
			// expect(new El(tag).id(testString.test).node.id).toEqual(
			// 	testString.result
			// )
		})
	})
})
