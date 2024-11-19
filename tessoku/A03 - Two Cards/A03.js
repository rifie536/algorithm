const main = (input) => {
    const lines = input.trim().split('\n');
    const [N, K] = lines[0].split(' ').map(Number);
    const numsP = lines[1].split(' ').map(Number);
    const numsQ = lines[2].split(' ').map(Number);
    let result = 'No';
    for (const numP of numsP) {
        for (const numQ of numsQ) {
            if (numP + numQ === K) {
                result = 'Yes';
            }
        }
    }
    console.log(result);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));