<?php
$input = explode(' ', trim(fgets(STDIN)));
$N = intval($input[0]);
$K = intval($input[1]);

$count = 0;

for ($i = 1; $i <= $N; $i++) {
    for ($j = 1; $j <= $N; $j++) {
        $z = $K - $i - $j;
        if ($z >= 1 && $z <= $N) {
            $count++;
        }
    }
}

echo $count;
?>