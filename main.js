#!/usr/bin/env node

if (require.main !== module) {
  console.log('Not meant to be required()');
}

var hellwigs = require('./hellwigs-method');
hellwigs([[1,1.2,1.3],[1.2,1,2.3],[1.3,2.3,1],], [1,2,3], [10,12,14], function(value, combination) { console.log(value, combination); })
