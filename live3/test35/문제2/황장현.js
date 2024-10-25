const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, M] = input[0];
  const numArray = input[1];

  let sum = numArray[0];
  let left = 0;
  let right = 1;
  let count = 0;

  while (true) {
    if (sum < M) {
      if (right < N) {
        sum += numArray[right];
        right += 1;
      } else {
        break;
      }
    } else if (sum === M) {
      count += 1;
      sum -= numArray[left];
      left += 1;
    } else {
      sum -= numArray[left];
      left += 1;
    }
  }

  return count;
}

console.log(solution(input));
