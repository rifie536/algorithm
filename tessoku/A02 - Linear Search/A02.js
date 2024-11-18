const main = (input) => {
    const lines = input.trim().split('\n');
    const [n, x] = lines[0].split(' ').map(Number);
    const numsA = lines[1].split(' ').map(Number);

    const includeNum = (nums, num) => {
        if (numsA.includes(num)) {
          console.log('Yes');
        } else {
          console.log('No');
        }
    }

    includeNum(numsA, x);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));