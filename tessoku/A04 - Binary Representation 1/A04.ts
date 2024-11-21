const mainA04 = (input: string): void => {
    const N: number = Number(input.trim());
    const result: number[] = [];

    for (let i: number = 9; i >= 0; i--) {
        const power: number = 2 ** i;
        const remainder: number = parseInt(String(N / power)) % 2;
        result.push(remainder);
    }

    console.log(result.join(''));
}

mainA04(require('fs').readFileSync('/dev/stdin', 'utf8'));