const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const arr = new Set(input.slice(1));
  const S = input[0].split(' ')[1];
  let answer = 0;

  if (S === 'Y') {
    return (answer = arr.size);
  } else if (S === 'F') {
    return (answer = Math.floor(arr.size / 2));
  } else return (answer = Math.floor(arr.size / 3));
}

console.log(solution(input));
