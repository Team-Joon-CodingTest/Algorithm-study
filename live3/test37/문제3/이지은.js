const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N] = input[0];
  const arr = input[1];

  function permutation(arr, n) {
    if (n === 1) {
      return arr.map((el) => [el]);
    }
    let result = [];

    arr.forEach((fixed, idx, originArr) => {
      let rest = [...originArr.slice(0, idx), ...originArr.slice(idx + 1)];
      let permutationArr = permutation(rest, n - 1);

      const attached = permutationArr.map((v) => [fixed, ...v]);
      result.push(...attached);
    });

    return result;
  }
  const allPermutations = permutation(arr, N);

  let max = 0;
  allPermutations.forEach((perms) => {
    let sum = 0;
    for (let i = 0; i < N - 1; i++) {
      sum += Math.abs(perms[i] - perms[i + 1]);
    }
    max = Math.max(sum, max);
  });
  return max;
}

console.log(solution(input));
