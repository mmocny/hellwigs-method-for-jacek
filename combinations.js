/*
$var = array(1,2,3);
$result = array(); 
$combination = array();
$corr_y = array(10,12,14);
 
function inner ($start, $choose_, $arr, $n) {
    global $result, $combination;
    if ($choose_ == 0) array_push($result,$combination);
    else for ($i = $start; $i <= $n - $choose_; ++$i) {
           array_push($combination, $arr[$i]);
           inner($i + 1, $choose_ - 1, $arr, $n);
           array_pop($combination);
     }
  }
 
function combinations(array $myArray, $choose) {
  global $result, $combination;
  $result=array();
  $n = count($myArray);
  inner(0, $choose, $myArray, $n);
  //echo $result[0][0]."  ".$result[0][1];
  return $result;
}
 */

var assert = require('assert');

module.exports = exports = function combinations(arr, choose) {
  var result = [], combination = [];

  function inner(start, choose) {
    if (choose == 0) {
      result.push(combination);
    } else {
      for (var i = start; i <= (arr.length - choose); ++i) {
        combination.push(arr[i]);
        inner(i + 1, choose - 1, arr);
        combination.pop();
      }
    }
  }
  inner(0, choose);

  assert.ok(combination.length == 0);

  return result;
}
