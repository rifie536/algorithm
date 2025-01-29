<?php
$line1 = explode(' ', trim(fgets(STDIN)));
$N = intval($line1[0]);
$Q = intval($line1[1]);

$guests = array_map('intval', explode(' ', trim(fgets(STDIN))));

$ranges = [];
for ($i = 0; $i < $Q; $i++) {
   $ranges[] = array_map('intval', explode(' ', trim(fgets(STDIN))));
}

$cumSum = [0];
for ($i = 0; $i < $N; $i++) {
   $cumSum[$i + 1] = $cumSum[$i] + $guests[$i];
}

for ($i = 0; $i < $Q; $i++) {
   $left = $ranges[$i][0];
   $right = $ranges[$i][1];
   echo ($cumSum[$right] - $cumSum[$left - 1]) . "\n";
}
?>