const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const n = Number(input[0]);
  const prices = input[1].split(' ').map(Number);

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < n; i++) {
    const currentPrice = prices[i];

    maxProfit = Math.max(maxProfit, currentPrice - minPrice);
    minPrice = Math.min(minPrice, currentPrice);
  }

  console.log(maxProfit);
}

solution(input);
