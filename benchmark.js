var genDummyInput = require('./generate-dummy-input');
var hellwig = require('./hellwigs-method.js');

function benchmark(label, f) {
  var start = new Date();
  f();
  console.log(label, 'took', new Date() - start);
}

for (var n = 10; n <= 26; n++) {
  benchmark('hellwigs for n = ' + n, function() {
    hellwig.apply(null, genDummyInput(n));
  });
}
