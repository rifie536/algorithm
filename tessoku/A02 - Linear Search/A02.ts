const mainA02 = (input: string): void => {
    const lines: string[] = input.trim().split('\n');
    const [n, x]: number[] = lines[0].split(' ').map(Number);
    const numsA: number[] = lines[1].split(' ').map(Number);

    const includeNum = (arr: number[], target: number): boolean => {
        return arr.includes(target);
    }

    console.log(includeNum(numsA, x) ? 'Yes' : 'No');
}

mainA02(require('fs').readFileSync('/dev/stdin', 'utf8'));