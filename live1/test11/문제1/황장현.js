const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [n, m] = input[0];
  const wages = input[1];

  if (m === 0) return 0;

  let currentSum = wages.slice(0, m).reduce((a, b) => a + b, 0);
  let maxSum = currentSum;

  for (let i = m; i < n; i++) {
    currentSum = currentSum - wages[i - m] + wages[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}

console.log(solution(input));

/*
만약 취직을 한다면, 일을 시작 한 날부터 끝날 때까지 하루도 빠지면 안 된다 => 연속으로 일 must 
*/
