# wordwrap

RegExp-based super-tiny wordwrap script.

```javascript
var wordrwap = require('wordwrap');

wordwrap(
  '   Lorem ipsum dolor sit amet.\n' +
  '                                ' +
  '   Duis aute irure dolor in reprehenderit in voluptate.',
  20);

// → [
//   '   Lorem ipsum dolor',
//   'sit amet.',
//   '',
//   'Duis aute irure',
//   'dolor in',
//   'reprehenderit in',
//   'voluptate.'
// ]
```

## License

The code is available under [MIT licence](LICENSE.txt).
