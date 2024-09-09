const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const N = Number(input[0]);
  const arr = input[1].split(' ').map(Number);
  const Q = Number(input[2]);
  let prefixSum = Array(N).fill(0);
  let answer = [];
  const rangeArr = [];
  for (let i = 3; i < 3 + Q; i++) {
    rangeArr.push(input[i].split(' ').map(Number));
  }

  for (let j = 0; j < N - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      prefixSum[j + 1] = prefixSum[j] + 1;
    } else {
      prefixSum[j + 1] = prefixSum[j];
    }
  }

  for (let i = 0; i < Q; i++) {
    let [x, y] = rangeArr[i];
    if (x === 1) {
      answer.push(prefixSum[y - 1]);
    } else {
      answer.push(prefixSum[y - 1] - prefixSum[x - 1]);
    }
  }
  return answer.join('\n');
}

console.log(solution(input));
