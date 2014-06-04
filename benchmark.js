var ProgressBar = require('progress');

var genDummyInput = require('./generate-dummy-input');
var hellwig = require('./hellwigs-method.js');
var predictWork = require('./predict-work');

for (var n = 10; n <= 27; n++) {
  var start = new Date();
  var progressBar = new ProgressBar(':bar', {
    total: n /* predictWork(n) */,
    width: 40,
  });

  hellwig.apply(null, genDummyInput(n).concat(function() {
    progressBar.tick();
    if (progressBar.complete) {
      console.log('hellwigs for n =', n, 'took', new Date() - start, 'ms');
    }
  }));
}
