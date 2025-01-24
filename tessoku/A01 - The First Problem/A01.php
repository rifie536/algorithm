<?php
function calcAreaOfSquare($num) {
    return $num * $num;
}

$N = trim(fgets(STDIN));
echo calcAreaOfSquare($N);
?>