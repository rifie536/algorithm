const main = (input) => {
    const lines = input.trim().split('\n');
    const [H, W] = lines[0].split(' ').map(Number);

    const grid = Array.from({ length: H }, () => Array(W).fill(0));
    let lineIndex = 1;
    for (let i = 0; i < H; i++) {
        const row = lines[lineIndex++].split(' ').map(Number);
        for (let j = 0; j < W; j++) {
            grid[i][j] = row[j];
        }
    }

    const sum = Array.from({ length: H + 1 }, () => Array(W + 1).fill(0));
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            sum[i + 1][j + 1] = grid[i][j] + 
                                sum[i + 1][j] + 
                                sum[i][j + 1] - 
                                sum[i][j];
        }
    }

    const Q = parseInt(lines[lineIndex++]);
    for (let q = 0; q < Q; q++) {
        const [A, B, C, D] = lines[lineIndex++].split(' ').map(Number);
        const answer = sum[C][D] - sum[A - 1][D] - sum[C][B - 1] + sum[A - 1][B - 1];
        console.log(answer);
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));