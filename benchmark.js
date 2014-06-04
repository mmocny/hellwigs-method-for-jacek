var ProgressBar = require('progress');

var genDummyInput = require('./generate-dummy-input');
var hellwig = require('./hellwigs-method.js');

function min(arr) {
  return arr.reduce(function(p, v) {
    return ( p < v ? p : v );
  });
}

function max(arr) {
  return arr.reduce(function(p, v) {
    return ( p > v ? p : v );
  });
}

function benchmark(label, f) {
  var start = new Date();
  f();
  console.log(label, 'took', new Date() - start);
}


for (var n = 10; n <= 26; n++) {
  var progressBar = new ProgressBar(':bar', {
      total: n,
      width: 40,
    });
  benchmark('hellwigs for n = ' + n, function() {
    var result = hellwig.apply(null, genDummyInput(n).concat(function(value) {
    }, function() {
      progressBar.tick();
    }));
  });
}
