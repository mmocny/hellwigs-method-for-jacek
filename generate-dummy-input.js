// http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = exports = function generateDummyInput(n) {
  var v = [];
  for (var i = 0; i < n; i++) {
    v.push(i+1);
  }

  var corr = v.map(function() {
    return v.map(function() {
      return getRandomArbitrary(1.0,2.0);
    });
  });

  var corr_y = v.map(function(a) { return 10 + a; });
  return [corr, v, corr_y];
}

exports.tests = function generateDummyInputTests() {
  var assert = require('assert');
  var generateDummyInput = exports;

  [1,2,3,4,5,6,7,8,9,10,20,100].forEach(function(n) {
    var d = generateDummyInput(n);
    var corr = d[0];
    var v = d[1];
    var corr_y = d[2];

    assert.equal(corr.length, n);
    assert.equal(corr[0].length, n);
    assert.equal(v.length, n);
    assert.equal(corr_y.length, n);
  });
}
