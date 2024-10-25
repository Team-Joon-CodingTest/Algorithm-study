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
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

function solution(input) {
  const T = parseInt(input[0], 10);
  const results = [];

  for (let i = 1; i < input.length; i += 2) {
    const N = parseInt(input[i], 10);
    const dots = input[i + 1]
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b);
    let count = 0;

    for (let a = 0; a < N; a++) {
      for (let c = a + 2; c < N; c++) {
        const midpoint = (dots[a] + dots[c]) / 2;
        if (Number.isInteger(midpoint) && binarySearch(dots, midpoint)) {
          count++;
        }
      }
    }

    results.push(count);
  }

  return results.join('\n');
}

console.log(solution(input));
