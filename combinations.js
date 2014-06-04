/*
 * TODO: Replace this with a node library which is faster!
 * TODO: Benchmark!
 */
module.exports = exports = function combinations(arr, size) {
  var result = [], combination = [];

  function inner(start, size) {
    if (size == 0) {
      result.push(combination.slice(0)); // slice(0) takes a deep copy of the array
    } else {
      for (var i = start; i <= (arr.length - size); ++i) {
        combination.push(arr[i]);
        inner(i + 1, size - 1, arr);
        combination.pop();
      }
    }
  }
  inner(0, size);

  assert.ok(combination.length == 0);

  return result;
}

// TESTS!
exports.tests = function testCombinations() {
  var assert = require('assert');

  var combinations = exports;

  var input = [1,2,3];
  var outputForSize = [0,1,2,3,4].map(function(size) {
    return combinations(input, size);
  });

  assert.deepEqual(outputForSize[0], [[]]);
  assert.deepEqual(outputForSize[1], [[1],[2],[3]]);
  assert.deepEqual(outputForSize[2], [[1,2],[1,3],[2,3]]);
  assert.deepEqual(outputForSize[3], [[1,2,3]]);
  assert.deepEqual(outputForSize[4], []);

  input = [1,2,3,4];
  outputForSize = [0,1,2,3,4,5].map(function(size) {
    return combinations(input, size);
  });

  assert.deepEqual(outputForSize[0], [[]]);
  assert.deepEqual(outputForSize[1], [[1],[2],[3],[4]]);
  assert.deepEqual(outputForSize[2], [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]);
  assert.deepEqual(outputForSize[3], [[1,2,3],[1,2,4],[1,3,4],[2,3,4]]);
  assert.deepEqual(outputForSize[4], [[1,2,3,4]]);
  assert.deepEqual(outputForSize[5], []);
}
