<?php
$input = trim(fgets(STDIN));
$N = intval($input);

$input = trim(fgets(STDIN));
$prices = array_map('intval', explode(' ', $input));

$result = 'No';

for ($i = 0; $i < $N - 2; $i++) {
    for ($j = $i + 1; $j < $N - 1; $j++) {
        for ($k = $j + 1; $k < $N; $k++) {
            if ($prices[$i] + $prices[$j] + $prices[$k] === 1000) {
                $result = 'Yes';
                break 2;
            }
        }
    }
}

echo $result . "\n";