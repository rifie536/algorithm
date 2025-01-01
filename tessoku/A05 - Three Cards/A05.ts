const mainA05 = (input: string): void => {
    const [N, K]: number[] = input.trim().split(' ').map(Number);
    let count: number = 0;
    for (let i: number = 1; i <= N; i++) {
        for (let j: number = 1; j <= N; j++) {
            let z: number = K - i - j;
            if (z >= 1 && z <= N) {
                count += 1;
            }
        }
    }

    console.log(count);
}

mainA05(require('fs').readFileSync('/dev/stdin', 'utf8'));