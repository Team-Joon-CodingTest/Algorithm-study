const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const N = input[0][0];
  const A = input[1];
  const result = [];
  let maxSum = 0;

  function backtrack(path, remaining) {
    if (remaining.length === 0) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
      backtrack(path.concat(remaining[i]), newRemaining);
    }
  }

  backtrack([], A);

  result.forEach((permutation) => {
    let currentSum = 0;
    for (let i = 0; i < permutation.length - 1; i++) {
      currentSum += Math.abs(permutation[i] - permutation[i + 1]);
    }
    maxSum = Math.max(maxSum, currentSum);
  });

  return maxSum;
}

console.log(solution(input));
