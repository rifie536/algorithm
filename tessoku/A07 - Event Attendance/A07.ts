const mainA07 = (input: string): void => {
    const lines: string[] = input.trim().split('\n');
    const D: number = parseInt(lines[0]);
    const N: number = parseInt(lines[1]);
    
    const imos: number[] = new Array(D + 1).fill(0);
    
    for (let i = 0; i < N; i++) {
        const [L, R]: number[] = lines[i + 2].split(' ').map(Number);
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

mainA07(require('fs').readFileSync('/dev/stdin', 'utf8'));