const main = (input) => {
    const N = input.trim().split('').map(Number);
    let result = 0;
    for (let i = 0; i < N.length; i++) {
        const power = 2 ** (N.length - (i + 1));
        result += (power * N[i]);
    }

    console.log(result);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));