const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [n, m] = input[0];
  const money = input[1];

  let maxMoney = 0;
  maxMoney = money.slice(0, m).reduce((a, b) => a + b);
  let currentSum = maxMoney;

  if (m === 0) return 0;
  if (m === n) return money.reduce((a, b) => a + b, 0);

  for (let i = 1; i < n - m; i++) {
    currentSum = currentSum - money[i - 1] + money[i + m - 1];
    maxMoney = Math.max(currentSum, maxMoney);
  }
  return maxMoney;
}

console.log(solution(input));
