
# deep-access

Access nested object properties via strings, with existential operator (`?`) support.

[![build status](https://secure.travis-ci.org/juliangruber/deep-access.png)](http://travis-ci.org/juliangruber/deep-access)

[![testling badge](https://ci.testling.com/juliangruber/deep-access.png)](https://ci.testling.com/juliangruber/deep-access)

## Example

```js
var deep = require('deep-access');

var obj = {
  foo: 'bar',
  bar: {
    baz: {
      beep: 'boop'
    }
  }
};

console.log(deep(obj, 'foo'));
// => "bar"

console.log(deep(obj, 'bar.baz.beep'));
// => "boop"

console.log(deep(obj, 'foo.beep.boop'));
// throws

console.log(deep(obj, 'foo.beep?.boop'));
// => undefined
```

## API

### deep(obj, prop)

Access `obj`'s property `prop`. The property string may contain key names, dots
and question marks. If a key ends with an question mark but doesn't
exist, the algorithm aborts and returns what it last got.

## Installation

With [npm](https://npmjs.org) do:

```bash
npm install deep-access
```

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
