const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function solution(input) {
  const N = Number(input);
  const romanValues = [1, 5, 10, 50];
  const uniqueSums = new Set();

  function backtrack(count, sum, startIndex) {
    if (count === N) {
      uniqueSums.add(sum);
      return;
    }

    for (let i = startIndex; i < romanValues.length; i++) {
      backtrack(count + 1, sum + romanValues[i], i);
    }
  }

  backtrack(0, 0, 0);
  console.log(uniqueSums.size);
}

solution(input);
