<?php
function add($num1, $num2) {
    return $num1 + $num2;
}

$input = trim(fgets(STDIN));
list($A, $B) = array_map('intval', explode(' ', $input));
echo add($A, $B) . "\n";