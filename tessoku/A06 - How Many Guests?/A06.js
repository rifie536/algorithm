const main = (input) => {
    const lines = input.trim().split('\n');
    const [N, Q] = lines[0].split(' ').map(Number);
    const guests = lines[1].split(' ').map(Number);
    const ranges = lines.slice(2).map(line => line.split(' '));
    for (let i = 0; i < Q; i++) {
        let total = 0;
        for (let day = ranges[i][0] - 1; day < ranges[i][1]; day++) {
            total += guests[day];
        }
        console.log(total);
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));