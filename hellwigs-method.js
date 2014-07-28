module.exports = exports = function hellwigsMethod(correlation, variables, correlation_y, emit, onprogress) {
  var combinationsStream = require('./combinations-stream');
  emit = emit || console.log.bind(console);
  onprogress = onprogress || function(){};

  function hellwigsValueFor(combination) {
    var poj_wspolna = 0;
    for (var d = 0; d < combination.length; ++d) {
      var mianownik = 0;
      for (var i = 0; i < combination.length; ++i) {
        // TODO: are all these `-1`s just because the data set is in the wrong range?  should they all be 0-1 range instead of 1-2?
        mianownik += Math.abs(correlation[combination[d]-1][combination[i]-1]);
      }
      poj_wspolna += Math.pow(correlation_y[combination[d]-1],2) / mianownik;
    }
    return poj_wspolna;
  }

  // Iterate all possible combinations of `variables`, for each combination set size k
  for (var k = 1; k <= variables.length; ++k) {
    combinationsStream(variables, k, function(combination) {
      emit(hellwigsValueFor(combination), combination.slice());
    });
    onprogress();
  }
};

exports.tests = function testHellwigs() {
  var assert = require('assert');
  var hellwig = exports;

  var corr = [
      [1,1.2,1.3],
      [1.2,1,2.3],
      [1.3,2.3,1],
    ];
  var v = [1,2,3];
  var corr_y = [10,12,14];

  var ans = [];
  hellwig(corr, v, corr_y, function(value) {
    ans.push(value);
  });

  assert.deepEqual(ans, [100,144,196,110.9090909090909,128.69565217391306,103.03030303030303,103.18012422360249]);
}
