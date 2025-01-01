const main = (input) => {
    const [N, K] = input.trim().split(' ').map(Number);
    let count = 0;
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            let z = K - i - j;
            if (z >= 1 && z <= N) {
                count += 1;
            }
        }
    }

    console.log(count);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));