const main = (input) => {
    const [A, B] = input.trim().split(' ').map(Number);
    let result = 'No';
    for (let i = A; i <= B; i++) {
        if (100 % i == 0) {
            result = 'Yes';
            break;
        }
    }
    console.log(result);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));