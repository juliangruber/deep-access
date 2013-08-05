var test = require('tape');
var deep = require('./');

test('deep access', function (t) {
  var obj = {
    foo: 'bar',
    bar: {
      baz: {
        beep: 'boop'
      }
    }
  };

  t.equal(deep(obj, 'foo'), 'bar');
  t.equal(deep(obj, 'bar.baz.beep'), 'boop');
  t.end();
});

