const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [n, m] = input[0].split(' ').map(Number);
  const arr = input[1].split(' ').map(Number);
  const inputs = input.slice(2).map((el) => el.split(' ').map(Number));

  let prefixSum = [];
  prefixSum[0] = arr[0];
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }

  for (let j = 0; j < m; j++) {
    let [l, r] = inputs[j];
    if (l === r) {
      console.log(arr[l - 1]);
    } else if (l === 1) {
      console.log(prefixSum[r - 1]);
    } else {
      console.log(prefixSum[r - 1] - prefixSum[l - 2]);
    }
  }
}

solution(input);
