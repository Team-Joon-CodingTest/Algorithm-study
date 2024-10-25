const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [M] = input[2];
  const [N] = input[0];
  const Narr = input[1].sort((a, b) => a - b);
  const Marr = input[3];

  function binarySearch(arr, target) {
    let start = 0,
      end = N - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) {
        return true;
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return false;
  }
  let answer = Marr.map((target) => (binarySearch(Narr, target) ? 1 : 0));

  return answer.join(' ');
}

console.log(solution(input));
