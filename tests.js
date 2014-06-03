#!/usr/bin/env node

var assert = require('assert');
var genDummyInput = require('./generate-dummy-input');
var combinations = require('./combinations');
var hellwig = require('./hellwigs-method');

function runTests() {
  genDummyInput.tests();
  combinations.tests();
  hellwig.tests();
}


if (require.main === module) {
  runTests();
}
