const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

function solution() {
    const N = parseInt(input);

    const romanValues = [1, 5, 10, 50];
    const uniqueValues = new Set();

    function backtrack(count, currentSum, start) {
        if (count === N) {
            uniqueValues.add(currentSum);
            return;
        }

        for (let i = start; i < romanValues.length; i++) {
            backtrack(count + 1, currentSum + romanValues[i], i);
        }
    }

    backtrack(0, 0, 0);
    console.log(uniqueValues.size);
}

solution();