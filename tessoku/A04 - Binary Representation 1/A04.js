const main = (input) => {
    const N = Number(input.trim());
    const result = [];
    for (let i = 9; i >= 0; i--) {
        const power = 2 ** i;
        const remainder = parseInt(N / power) % 2;
        result.push(remainder);
    }

    console.log(result.join(''));
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
