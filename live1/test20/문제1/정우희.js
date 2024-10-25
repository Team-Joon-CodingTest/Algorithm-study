const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

function solution(input) {
  const [N, K] = input[0].split(' ').map(Number);
  const coins = input.slice(1, N + 1).map(Number);

  let remainingAmount = K;
  let coinCount = 0;

  for (let i = N - 1; i >= 0; i--) {
    const coinValue = coins[i];
    if (remainingAmount >= coinValue) {
      const count = Math.floor(remainingAmount / coinValue);
      remainingAmount -= coinValue * count;
      coinCount += count;
    }

    if (remainingAmount === 0) {
      break;
    }
  }

  console.log(coinCount);
}

solution(input);
