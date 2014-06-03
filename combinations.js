module.exports = exports = function combinations(myArray, choose) {
  var result = [], combination = [];

  function inner(start, choose, arr) {
    if (choose == 0) {
      result = result.concat(combination);
    } else {
      for (var i = start; i <= (arr.length - choose); ++i) {
        combination.push(arr[i]);
        inner(i + 1, choose - 1, arr);
        combination.pop();
      }
    }
  }
  inner(0, choose, myArray);

  return result;
}
