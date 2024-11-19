const mainA03 = (input: string): void => {
    const lines: string[] = input.trim().split('\n');
    const [N, K]: number[] = lines[0].split(' ').map(Number);
    const numsP: number[] = lines[1].split(' ').map(Number);
    const numsQ: number[] = lines[2].split(' ').map(Number);

    let result: string = 'No';

    for (const numP of numsP) {
        for (const numQ of numsQ) {
            if (numP + numQ === K) {
                result = 'Yes';
            }
        }
    }

    console.log(result);
 }

 mainA03(require('fs').readFileSync('/dev/stdin', 'utf8'));