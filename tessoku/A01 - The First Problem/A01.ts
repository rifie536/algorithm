const mainA01 = (input: string): void => {
    const N: number = parseInt(input.trim());
    const calcAreaOfSquare = (num: number): number => {
        return num ** 2;
    }
    console.log(calcAreaOfSquare(N));
}

mainA01(require('fs').readFileSync('/dev/stdin', 'utf8'));