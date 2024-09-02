const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let answer = [];
  const arr = [...input[1].split(' ').map(Number)];
  let prefixSum = Array(arr.length).fill(0);
  for (let i = 0; i < prefixSum.length; i++) {
    if (i === 0) {
      prefixSum[0] += arr[0];
    } else prefixSum[i] += prefixSum[i - 1] + arr[i];
  }
  const plusArr = input.splice(4, input.length - 1);
  console.log(plusArr);

  for (x of plusArr) {
    let [start, end] = x.split(' ').map(Number);
    let sum;
    if (start === 1) {
      sum = prefixSum[end - 1];
    } else {
      sum = prefixSum[end - 1] - prefixSum[start - 2];
    }
    answer.push(sum);
  }
  return answer.join('\n');
}

console.log(solution(input));
