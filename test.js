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

test('existential', function (t) {
  var obj = {
    foo: 'bar',
    bar: {
      baz: {
        beep: 'boop'
      }
    }
  };

  t.throws(function(){
    deep(obj, 'foo.bar.baz');
  });
  t.notOk(deep(obj, 'foo.bar?.baz'));
  t.equal(deep(obj, 'bar.baz?.beep'), 'boop');
  t.end();
});

