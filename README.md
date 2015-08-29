# poxtxml-imgalt
[![npm version][npm-image]][npm-url]

> [PostXML] plugin enabling configuration maps.

## Installation
`npm i postxml- --save-dev`

## Usage
```js
var fs = require('fs'),
   postxml = require('postxml'),
   plugin = require('poxtxml-imgalt');

var html = fs.readFileSync('input.html', 'utf8');

var output = postxml(
      html,
      [
         plugin()
      ]
   );
```

## Example

### Input
```html

```

### Output
```html

```

## Licence
MIT

[PostXML]: https://github.com/postxml/postxml

[npm-url]: https://www.npmjs.org/package/poxtxml-imgalt
[npm-image]: http://img.shields.io/npm/v/poxtxml-imgalt.svg?style=flat-square
