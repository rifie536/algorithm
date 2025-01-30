<?php
$D = intval(trim(fgets(STDIN)));
$N = intval(trim(fgets(STDIN)));

$imos = array_fill(0, $D + 1, 0);

for ($i = 0; $i < $N; $i++) {
   $line = explode(' ', trim(fgets(STDIN)));
   $L = intval($line[0]);
   $R = intval($line[1]);

   $imos[$L - 1]++;
   $imos[$R]--;
}

for ($day = 0; $day < $D; $day++) {
   if ($day > 0) {
       $imos[$day] += $imos[$day - 1];
   }
   echo $imos[$day] . "\n";
}
?>