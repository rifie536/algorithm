<?php
$input = trim(fgets(STDIN));
$N = array_map('intval', str_split($input));
$result = 0;

for ($i = 0; $i < count($N); $i++) {
    $power = pow(2, count($N) - ($i + 1));
    $result += ($power * $N[$i]);
}

echo $result . "\n";