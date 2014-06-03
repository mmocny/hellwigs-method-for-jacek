var assert = require('assert');

module.exports = exports = function hellwigsMethod(correlation, variables, correlation_y) {
  var combinationsStream = require('./combinations-stream');
  var wyniki = [];

  for (var a = 1; a <= variables.length; ++a) {
    combinationsStream(variables, a, function(combination) {
      if (combination.length == 1) {
        wyniki.push(Math.pow(correlation_y[combination[0]-1], 2));
      } else {
        var poj_wspolna = 0;
        var d = 0;
        while (d < combination.length) {
          var mianownik = 0;
          for (var i = 0; i < combination.length; i++) {
            mianownik += Math.abs(correlation[combination[d]-1][combination[i]-1]);
          }
          var poj_ind = Math.pow(correlation_y[combination[d]-1],2) / mianownik;
          poj_wspolna += poj_ind;
          d++;
          if (d == combination.length) {
            wyniki.push(poj_wspolna);
          }
        }
      }
    });
  }

  return wyniki;
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
