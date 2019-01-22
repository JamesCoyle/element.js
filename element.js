export default class El {
	constructor(tag = 'div', options = null) {
		this.el = document.createElement(tag, options)
	}

	id(id) {
		if (id === null) return this

		switch (typeof id) {
			case 'function':
				return this.id(id())

			case 'string':
			case 'number':
				this.el.id = id.toString()
				break
		}

		return this
	}

	classes(...classes) {
		this.el.classList.add(...classes)

		return this
	}

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

	styles(styles) {
		Object.assign(this.el.style, styles)

		return this
	}

	events(events) {
		for (let event in events) {
			this.el.addEventListener(event, events[event])
		}

		return this
	}

	content(...content) {
	    content.forEach((item)=> {
    		switch (typeof item) {
    		    case 'object':
    				if (item instanceof Node) this.el.appendChild(item)
    				else if (Array.isArray(item))
    					this.content(item)
    				break
    				
    			case 'string':
    				this.el.appendChild(document.createTextNode(item))
    				break
    
    		}
	    })

		return this
	}
}
