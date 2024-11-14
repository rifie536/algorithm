const main = (input) => {
    const [A, B] = input.trim().split(' ').map(Number);
    const add = (num1, num2) => {
      return num1 + num2;
    }
    console.log(add(A, B));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));