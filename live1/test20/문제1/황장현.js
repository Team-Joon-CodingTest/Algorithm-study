const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  let [N, K] = input[0];
  const values = input.slice(1).map((v) => v[0]);
  console.log(values);

  let result = 0;

  for (let i = values.length - 1; i >= 0; i--) {
    const coinValue = values[i];
    const calculate = Math.floor(K / coinValue);
    if (calculate >= 1) {
      result += calculate;
      K %= coinValue;
    }
  }
  return result;
}

console.log(solution(input));
