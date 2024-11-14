const main = (input) => {
    const N = input.trim();
    const calcAreaOfSquare = (num) => {
        return num ** 2;
    }
    console.log(calcAreaOfSquare(N));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));