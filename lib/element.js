export default class El {
	constructor(tag = 'div', options = null) {
		this.node = document.createElement(tag, options)
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

		this.node.id = id.toString()

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
		this.node.classList.add(...classes)

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
					this.node.setAttribute(attr, value)
					break

				case 'number':
				case 'object':
					this.node.setAttribute(attr, value.toString())
					break

				case 'boolean':
					if (value) this.node.setAttribute(attr, '')
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
		Object.assign(this.node.style, styles)

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
			this.node.addEventListener(event, events[event])
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
			if (Array.isArray(item)) return this.content(...item)

			switch (typeof item) {
				case 'object':
					if (item instanceof Node) return this.node.appendChild(item)
					if (item instanceof El) return this.node.appendChild(item.node)

				case 'string':
				case 'number':
					return this.node.appendChild(document.createTextNode(item.toString()))
			}
		})

		return this
	}
}
