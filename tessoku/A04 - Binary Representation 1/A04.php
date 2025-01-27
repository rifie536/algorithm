<?php
$N = intval(trim(fgets(STDIN)));

$result = [];

for ($i = 9; $i >= 0; $i--) {
    $power = pow(2, $i);
    $remainder = intval($N / $power) % 2;
    $result[] = $remainder;
}

echo implode('', $result);
?>