<?php
function includeNum($nums, $num) {
    if (in_array($num, $nums)) {
        echo "Yes\n";
    } else {
        echo "No\n";
    }
}

$lines = explode(' ', trim(fgets(STDIN)));
$n = intval($lines[0]);
$x = intval($lines[1]);

$numsA = array_map('intval', explode(' ', trim(fgets(STDIN))));

includeNum($numsA, $x);
?>