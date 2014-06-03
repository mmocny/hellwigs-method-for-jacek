var assert = require('assert');

module.exports = exports = function hellwigsMethod(correlation, variables, correlation_y) {
  var combinations = require('./combinations');
  var wyniki = [];

  for (var a = 1; a <= variables.length; ++a) {
    var comb_var_a = combinations(variables, a);

    for (var b = 1; b <= comb_var_a.length; ++b) {
      if (a == 1) {
        wyniki.push(Math.pow(correlation_y[comb_var_a[b-1][0]-1],2));
      } else {
        var poj_wspolna = 0;
        var d = 0;
        while (d < comb_var_a[b-1].length) {
          var mianownik = 0;
          for (var i = 0; i < comb_var_a[b-1].length; i++) {
            mianownik += Math.abs(correlation[comb_var_a[b-1][d]-1][comb_var_a[b-1][i]-1]);
          }
          var poj_ind = Math.pow(correlation_y[comb_var_a[b-1][d]-1],2) / mianownik;
          poj_wspolna += poj_ind;
          d++;
          if (d == comb_var_a[b-1].length) {
            wyniki.push(poj_wspolna);
          }
        }
      }
    }
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


  corr = [
      [1,1.2,1.3,1.4,1,1.2,1.3,1.4,1,1.2],
      [1.2,1,2.3,2.4,1,1.2,1.3,1.4,1,1.2],
      [1.3,2.3,1,3.4,1,1.2,1.3,1.4,1,1.2],
      [1.3,2.3,1,4.4,1,1.2,1.3,1.4,1,1.2],
      [1.3,2.3,1,5.4,1,1.2,1.3,1.4,1,1.2],
      [1.3,2.3,1,6.4,1,1.2,1.3,1.4,1,1.2],
      [1.3,2.3,1,7.4,1,1.2,1.3,1.4,1,1.2],
      [1.3,2.3,1,8.4,1,1.2,1.3,1.4,1,1.2],
      [1.3,2.3,1,9.4,1,1.2,1.3,1.4,1,1.2],
      [1.4,2.4,3.4,1,1,1.2,1.3,1.4,1,1.2]
    ];
  v = [1,2,3,4,5,6,7,8,9,10];
  corr_y = [10,12,14,15,16,17,18,19,20,21];
  ans = hellwig(corr, v, corr_y);

  console.log(ans);
}
