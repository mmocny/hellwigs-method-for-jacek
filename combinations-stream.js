/*
 * TODO: Replace this with a node library which is faster!
 * TODO: Benchmark!
 */
module.exports = exports = function combinationsStream(arr, size, f) {
  combination = [];

  function inner(start, size) {
    if (size == 0) {
      f(combination);
    } else {
      for (var i = start; i <= (arr.length - size); ++i) {
        combination.push(arr[i]);
        inner(i + 1, size - 1);
        combination.pop();
      }
    }
  }
  inner(0, size);
}

// TESTS!
exports.tests = function testCombinations() {
  var assert = require('assert');

  var combinationsStream = exports;

  var input = [1,2,3];
  var outputForSize = [];

  [0,1,2,3,4].forEach(function(size) {
    outputForSize[size] = [];
    combinationsStream(input, size, function(combination) {
      outputForSize[size].push(combination.slice(0));
    });
  });

  assert.deepEqual(outputForSize[0], [[]]);
  assert.deepEqual(outputForSize[1], [[1],[2],[3]]);
  assert.deepEqual(outputForSize[2], [[1,2],[1,3],[2,3]]);
  assert.deepEqual(outputForSize[3], [[1,2,3]]);
  assert.deepEqual(outputForSize[4], []);

  input = [1,2,3,4];
  [0,1,2,3,4,5].forEach(function(size) {
    outputForSize[size] = [];
    combinationsStream(input, size, function(combination) {
      outputForSize[size].push(combination.slice(0));
    });
  });

  assert.deepEqual(outputForSize[0], [[]]);
  assert.deepEqual(outputForSize[1], [[1],[2],[3],[4]]);
  assert.deepEqual(outputForSize[2], [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]);
  assert.deepEqual(outputForSize[3], [[1,2,3],[1,2,4],[1,3,4],[2,3,4]]);
  assert.deepEqual(outputForSize[4], [[1,2,3,4]]);
  assert.deepEqual(outputForSize[5], []);
}
