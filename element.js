export default class El {
	constructor(tag = 'div', options = null) {
		this.el = document.createElement(tag, options)
	}
	/**
	 * Sets the id property of the element
	 *
	 * @param {string} id The id to assign to the element
	 * @returns {this}
	 * @memberof El
	 */
	id(id) {
		if (!id) return this

		this.el.id = id.toString()

		return this
	}

	/**
	 * Sets the CSS classes of the element
	 *
	 * @param {...string} classes One or more class names
	 * @returns {this}
	 * @memberof El
	 */
	classes(...classes) {
		this.el.classList.add(...classes)

		return this
	}

	/**
	 * Sets the keys and values of the given object as attributes of the element
	 *
	 * @param {Object} attributes An object describing attributes as key value pairs.
	 * @returns {this}
	 * @memberof El
	 */
	attributes(attributes) {
		for (let attr in attributes) {
			const value = attributes[attr]

			switch (typeof value) {
				case 'string':
					this.el.setAttribute(attr, value)
					break

				case 'number':
				case 'object':
					this.el.setAttribute(attr, value.toString())
					break

				case 'boolean':
					if (value) this.el.setAttribute(attr, '')
					break
			}
		}

		return this
	}

	/**
	 * Sets the keys and values of the given object as style definitions of the element
	 *
	 * @param {Object} styles An object describing style definitions as key value pairs.
	 * @returns {this}
	 * @memberof El
	 */
	styles(styles) {
		Object.assign(this.el.style, styles)

		return this
	}

	/**
	 * Binds the keys and values of the given object as event handlers on the element
	 *
	 * @param {Object} events An object describing event handlers as key value pairs.
	 * @returns {this}
	 * @memberof El
	 */
	events(events) {
		for (let event in events) {
			this.el.addEventListener(event, events[event])
		}

		return this
	}

	/**
	 * Sets the content of the element
	 *
	 * @param {...*} content A list of items and/or elements to set as child nodes of the element.
	 * @returns {this}
	 * @memberof El
	 */
	content(...content) {
		content.forEach((item) => {
			switch (typeof item) {
				case 'object':
					if (item instanceof Node) this.el.appendChild(item)
					else if (Array.isArray(item)) this.content(item)
					break

				case 'string':
					this.el.appendChild(document.createTextNode(item))
					break
			}
		})

		return this
	}
}
