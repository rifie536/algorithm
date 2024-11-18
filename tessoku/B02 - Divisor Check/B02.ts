const mainB02 = (input: string): void => {
    const [A, B]: number[] = input.trim().split(' ').map(Number);
    let result: string = 'No';

    for (let i: number = A; i <= B; i++) {
        if (100 % i === 0) {
            result = 'Yes';
            break;
        }
    }

    console.log(result);
}

mainB02(require('fs').readFileSync('/dev/stdin', 'utf8'));