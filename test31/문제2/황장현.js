const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

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
  const N = input[0][0];
  const sanguen = input[1];
  const M = input[2][0];
  const cards = input[3];

  sanguen.sort((a, b) => a - b);

  const results = cards.map((num) => (binarySearch(sanguen, num) ? 1 : 0));
  return results.join(' ');
}

console.log(solution(input));
