# @pokemon/list-pokemon

## Package info

### Package installation

Installation using NPM

```bash
npm install @pokemon/list-pokemon
```

### Entry points & exports

- (Default entry point)
  - ListPokemon (Class)
- list-pokemon.js
  - list-pokemon (Custom Element)


## ListPokemon (Class) list-pokemon (Custom Element) 

### Extends from

LitElement (lit-element package)

### Usage

Import and extend the class:

```js
import { ListPokemon } from '@pokemon/list-pokemon';

class ExampleElement extends ListPokemon {
  ...
}
```

Use the custom element (defined globally):

```js
import '@pokemon/list-pokemon/list-pokemon.js';
```

```html
<list-pokemon ...>
  ...
</list-pokemon>
```

### Description

![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
  <list-pokemon></list-pokemon>
```

### Properties

- **name**: string = "Cells" (attribute: name)
    Description for property
