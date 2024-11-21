const mainB04 = (input: string): void => {
    const N: number[] = input.trim().split('').map(Number);
    let result: number = 0;
    for (let i: number = 0; i < N.length; i++) {
        const power: number = 2 ** (N.length - (i + 1));
        result += (power * N[i]);
    }

    console.log(result);
}

mainB04(require('fs').readFileSync('/dev/stdin', 'utf8'));