/*

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

module.exports = exports = function hellwigsMethod(correlation, variables, correlation_y) {
  var combinations = require('./combinations');
  var wyniki = [],
      x = 0;

  for (var a = 1; a <= variables.length; ++a) {
    var comb_var_a = combinations(variables, a);

    for (var b = 1; b <= comb_var_a.length; ++b) {
      if (a == 1) {
        console.log(comb_var_a[b-1]);
        wyniki.push(Math.pow(correlation_y[comb_var_a[b-1][0]-1],2)); // jezeli mamy tylko jedna zmienna w kombinacji to wsadz od razu do wynikow
      } else {
        /*
          $poj_wspolna=0;
          $d=0;
          while($d<count(comb_var_a[$b-1]))
            {
            $mianownik=0;
            for($i=0;$i<count(comb_var_a[$b-1]);$i++)
              {
              $mianownik += abs(floatval($correlation[comb_var_a[$b-1][$d]-1][comb_var_a[$b-1][$i]-1])); 
              }
            $poj_ind = pow($correlation_y[comb_var_a[$b-1][$d]-1],2)/$mianownik;
            $poj_wspolna += $poj_ind;
            $d++;
            if($d==count(comb_var_a[$b-1])) array_push($wyniki,$poj_wspolna);
            }
            */

      }
    }
  }

  console.log(wyniki);
  return x;
};
