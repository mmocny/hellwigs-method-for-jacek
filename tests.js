#!/usr/bin/env node

var assert = require('assert');
var combinations = require('./combinations');
var hellwig = require('./hellwigs-method');

function runTests() {
  combinations.tests();
  hellwig.tests();
}


if (require.main === module) {
  runTests();
}
