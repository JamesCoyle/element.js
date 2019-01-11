import El from '../element'

test('El : Creates element', () => {
	;['div', 'span', 'img', 'a', 'button', 'input'].forEach((tag) => {
		const element = document.createElement(tag)
		expect(new El(tag).done()).toMatchObject(element)
	})
})
