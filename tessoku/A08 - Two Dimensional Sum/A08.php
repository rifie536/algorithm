<?php
$line1 = explode(' ', trim(fgets(STDIN)));
$H = intval($line1[0]);
$W = intval($line1[1]);

$grid = array_fill(0, $H, array_fill(0, $W, 0));
for ($i = 0; $i < $H; $i++) {
   $row = array_map('intval', explode(' ', trim(fgets(STDIN))));
   for ($j = 0; $j < $W; $j++) {
       $grid[$i][$j] = $row[$j];
   }
}

$sum = array_fill(0, $H + 1, array_fill(0, $W + 1, 0));

for ($i = 0; $i < $H; $i++) {
   for ($j = 0; $j < $W; $j++) {
       $sum[$i + 1][$j + 1] = $grid[$i][$j] + 
                              $sum[$i + 1][$j] + 
                              $sum[$i][$j + 1] - 
                              $sum[$i][$j];
   }
}

$Q = intval(trim(fgets(STDIN)));

for ($q = 0; $q < $Q; $q++) {
   $query = array_map('intval', explode(' ', trim(fgets(STDIN))));
   $A = $query[0];
   $B = $query[1];
   $C = $query[2];
   $D = $query[3];

   $answer = $sum[$C][$D] - $sum[$A - 1][$D] - $sum[$C][$B - 1] + $sum[$A - 1][$B - 1];
   echo $answer . "\n";
}
?>