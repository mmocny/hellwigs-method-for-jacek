/*

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
  global $result;
  $result=array();
  $n = count($myArray);
  inner(0, $choose, $myArray, $n);
  //echo $result[0][0]."  ".$result[0][1];
  return $result;
}

function hellwig($correlation, $variables,$correlation_y)
  {
  $wyniki = array();
  $x=0;
  $a=1;
  while ($a<=count($variables))  //przelatujemy przez liczbę zmiennych w danej kombinacji
    {
      $b=1;
      while ($b<=count(combinations($variables,$a))) //przelatujemy przez liczbę kombinacji w ramach $a liczby zmiennych
        {
        if($a==1) array_push($wyniki,pow($correlation_y[combinations($variables,$a)[$b-1][0]-1],2)); //jezeli mamy tylko jedna zmienna w kombinacji to wsadz od razu do wynikow
        else //jak mamy wiecej zmiennych
          {
          $poj_wspolna=0;
          $d=0;
          while($d<count(combinations($variables,$a)[$b-1]))
            {
            $mianownik=0;
            for($i=0;$i<count(combinations($variables,$a)[$b-1]);$i++)
              {
              $mianownik += abs(floatval($correlation[combinations($variables,$a)[$b-1][$d]-1][combinations($variables,$a)[$b-1][$i]-1])); 
              }
            $poj_ind = pow($correlation_y[combinations($variables,$a)[$b-1][$d]-1],2)/$mianownik;
            $poj_wspolna += $poj_ind;
            $d++;
            if($d==count(combinations($variables,$a)[$b-1])) array_push($wyniki,$poj_wspolna);
            }
          }
        $b++;
      }
    $a++;
    }
  print_r($wyniki);
  return $x;
  }

*/

module.exports = function hellwigsMethod(correlation, variables, correlation_y) {
  return [];
};
