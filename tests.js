#!/usr/bin/env node

var hellwig = require('./hellwigs-method');

function quickTest() {
  var corr = [
      [1,1.2,1.3],
      [1.2,1,2.3],
      [1.3,2.3,1],
    ];
  var v = [1,2,3];
  var corr_y = [10,12,14];

  var ans = hellwig(corr, v, corr_y);

  // Expexted: Array ( [0] => 100 [1] => 144 [2] => 196 [3] => 110.90909090909 [4] => 128.69565217391 [5] => 103.0303030303 [6] => 103.1801242236 )
  console.log(ans);
  console.log([100,144,196,110.909090,128.69,103.03,103.18]);
}

module.exports = exports = function runTests() {
  quickTest();
}


if (require.main === module) {
  exports();
}
