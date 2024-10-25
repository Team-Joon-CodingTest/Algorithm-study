const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

function solution(input) {
  let index = 0;
  const T = parseInt(input[index++]);

  for (let t = 0; t < T; t++) {
    const [N, M] = input[index++].split(' ').map(Number);
    const A = input[index++].split(' ').map(Number);
    const B = input[index++].split(' ').map(Number);

    B.sort((a, b) => a - b);

    let count = 0;

    for (let i = 0; i < N; i++) {
      count += binarySearch(B, A[i]);
    }

    console.log(count);
  }
}

solution(input);
