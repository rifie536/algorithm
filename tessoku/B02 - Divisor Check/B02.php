<?php
$input = trim(fgets(STDIN));
list($A, $B) = array_map('intval', explode(' ', $input));

$result = 'No';
for ($i = $A; $i <= $B; $i++) {
    if (100 % $i == 0) {
        $result = 'Yes';
        break;
    }
}

echo $result . "\n";