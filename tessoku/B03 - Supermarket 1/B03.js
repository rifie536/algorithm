const main = (input) => {
    const lines = input.trim().split('\n');
    const N = Number(lines[0]);
    const prices = lines[1].split(' ').map(Number);
    let result = 'No';

    for (let i = 0; i < N - 2; i++) {
        for (let j = i + 1; j < N - 1; j++) {
            for (let k = j + 1; k < N; k++) {
                if (prices[i] + prices[j] + prices[k] === 1000) {
                    result = 'Yes';
                    break;
                }
            }
        }
    }

    console.log(result);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));