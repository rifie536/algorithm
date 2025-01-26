<?php
$lines = explode(' ', trim(fgets(STDIN)));
$N = intval($lines[0]);
$K = intval($lines[1]);

$numsP = array_map('intval', explode(' ', trim(fgets(STDIN))));

$numsQ = array_map('intval', explode(' ', trim(fgets(STDIN))));

$result = "No";

foreach ($numsP as $numP) {
    foreach ($numsQ as $numQ) {
        if ($numP + $numQ === $K) {
            $result = "Yes";
            break 2;
        }
    }
}

echo $result;
?>