const main = (input) => {
    const lines = input.trim().split('\n');
    const D = parseInt(lines[0]);
    const N = parseInt(lines[1]);

    const imos = new Array(D + 1).fill(0);

    for (let i = 0; i < N; i++) {
        const [L, R] = lines[i + 2].split(' ').map(Number);

        imos[L - 1]++;
        imos[R]--;
    }

    for (let day = 0; day < D; day++) {
        if (day > 0) {
            imos[day] += imos[day - 1];
        }
        console.log(imos[day]);
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));