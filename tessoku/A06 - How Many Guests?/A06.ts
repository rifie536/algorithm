const mainA06 = (input: string): void => {
    const lines: string[] = input.trim().split('\n');
    const [N, Q]: number[] = lines[0].split(' ').map(Number);
    const guests: number[] = lines[1].split(' ').map(Number);
    const ranges: number[][] = lines.slice(2).map(line => line.split(' ').map(Number));

    const cumSum: number[] = [0];
    for (let i = 0; i < N; i++) {
        cumSum[i + 1] = cumSum[i] + guests[i];
    }

    for (let i = 0; i < Q; i++) {
        const [left, right]: number[] = ranges[i];
        console.log(cumSum[right] - cumSum[left - 1]);
    }
}

mainA06(require('fs').readFileSync('/dev/stdin', 'utf8'));