# Element-JS

Easy DOM object creation.

## Usage

```js
let textInput = new El('input')
    .attributes({
        type: 'text',
        name: 'exampleInput',
    })
    .styles({
        borderRadius: '4px',
        border: '1px solid green',
    })
    .events({
        input: (e) => console.log(e.target.value),
        focus: (e) => console.log("Element focused"),
    })

document.body.appendChild(textInput.node)
```

## Methods

### Id

Sets the id of the element.

#### Syntax

```js
el.id(id)
```

#### Examples

```js
el.id('submitButton')
el.id(() => 'submitButton' + index))
```

#### Arguments

| Argument | Type           | Description                                                                                                                                                |
| -------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id       | String, Number | The value to set as the `id` attribute.                                                                                                                    |
| id       | Function       | A funcition which will be called and passed back to `id()`. Warning: This could lead to infinite recursion if the function continuously returns functions. |

---

### Classes

Sets classes on the element.

#### Syntax

```js
el.classes(...classes)
```

#### Examples

```js
el.classes('button')
el.classes('large', 'red', 'button')
```

#### Arguments

| Argument   | Type   | Description                             |
| ---------- | ------ | --------------------------------------- |
| ...classes | String | A list of classes to add to the element |

---

### Attributes

Sets attributes on the element.

#### Syntax

```js
el.attributes(attributes)
```

#### Examples

```js
el.attributes({
    name: 'username',
    placeholder: 'Username',
    minlength: 5,
})
```

#### Arguments

| Argument   | Type   | Description                                           |
| ---------- | ------ | ----------------------------------------------------- |
| attributes | Object | A key value pair list of attributes and their values. |

---

### Styles

Sets inline styles on the element.

#### Syntax

```js
el.styles(styles)
```

#### Examples

```js
el.styles({
    width: '150px',
    background: '#CCC',
    borderRadius: '5px',
})
```

#### Arguments

| Argument | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| styles   | Object | A key value pair list of styles and their values. |

---

### Events

Sets event handlers on the element.

#### Syntax

```js
el.events(events)
```

#### Examples

```js
el.events({
    click: () => console.log('Clicked'),
    focus: () => console.log('Focused'),
    input: (e) => console.log(e.target.value),
})
```

#### Arguments

| Argument | Type   | Description                                         |
| -------- | ------ | --------------------------------------------------- |
| events   | Object | A key value pair list of events and their handlers. |

---

### Content

Sets the content of the element.

#### Syntax

```js
el.content(...content)
```

#### Examples

```js
el.content('Hello world!')
el.content(anotherElement)
el.content(el1, el2, el3)
el.content(el1, "A string!", el2)
```

#### Arguments

| Argument | Type    | Description                                          |
| -------- | ------- | ---------------------------------------------------- |
| content  | String  | A string to append to the inner text of the element. |
| content  | Element | An element to append as a child of the element.      |
