#!/usr/bin/env node

function runTests() {
  require('./predict-work').tests();
  require('./generate-dummy-input').tests();
  require('./combinations').tests();
  require('./combinations-stream').tests();
  require('./hellwigs-method').tests();
}

if (require.main === module) {
  runTests();
}
