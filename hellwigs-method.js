var assert = require('assert');

module.exports = exports = function hellwigsMethod(correlation, variables, correlation_y) {
  var combinationsStream = require('./combinations-stream');
  var ret = [];

  for (var size = 1; size <= variables.length; ++size) {
    combinationsStream(variables, size, function(combination) {
      if (combination.length == 1) {
        ret.push(Math.pow(correlation_y[combination[0]-1], 2));
      } else {
        var poj_wspolna = 0;
        for (var d = 0; d < size; ++d) {
          var mianownik = 0;
          for (var i = 0; i < size; i++) {
            mianownik += Math.abs(correlation[combination[d]-1][combination[i]-1]);
          }
          poj_wspolna += Math.pow(correlation_y[combination[d]-1],2) / mianownik;
        }
        ret.push(poj_wspolna);
      }
    });
  }

  return ret;
};

exports.tests = function testHellwigs() {
  var hellwig = exports;

  var corr = [
      [1,1.2,1.3],
      [1.2,1,2.3],
      [1.3,2.3,1],
    ];
  var v = [1,2,3];
  var corr_y = [10,12,14];
  var ans = hellwig(corr, v, corr_y);

  assert.deepEqual(ans, [100,144,196,110.9090909090909,128.69565217391306,103.03030303030303,103.18012422360249]);
}
