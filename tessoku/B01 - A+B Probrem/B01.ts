const mainB01 = (input: string): void => {
    const [A, B]: number[] = input.trim().split(' ').map(Number);
    const add = (num1: number, num2: number): number => {
        return num1 + num2;
    }
    console.log(add(A, B));
 }

mainB01(require('fs').readFileSync('/dev/stdin', 'utf8'));