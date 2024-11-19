const mainB03 = (input: string): void => {
    const lines: string[] = input.trim().split('\n');
    const N: number = Number(lines[0]);
    const prices: number[] = lines[1].split(' ').map(Number);
    let result: string = 'No';

    for (let i: number = 0; i < N - 2; i++) {
        for (let j: number = i + 1; j < N - 1; j++) {
            for (let k: number = j + 1; k < N; k++) {
                if (prices[i] + prices[j] + prices[k] === 1000) {
                    result = 'Yes';
                    break;
                }
            }
        }
    }

    console.log(result);
}

mainB03(require('fs').readFileSync('/dev/stdin', 'utf8'));