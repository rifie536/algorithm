const main = (input) => {
    const lines = input.trim().split('\n');
    const [N, Q] = lines[0].split(' ').map(Number);
    const guests = lines[1].split(' ').map(Number);
    const ranges = lines.slice(2).map(line => line.split(' ').map(Number));

    const cumSum = [0];
    for (let i = 0; i < N; i++) {
        cumSum[i + 1] = cumSum[i] + guests[i];
    }

    for (let i = 0; i < Q; i++) {
        const [left, right] = ranges[i];
        console.log(cumSum[right] - cumSum[left - 1]);
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));