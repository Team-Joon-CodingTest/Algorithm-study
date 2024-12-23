const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const n = Number(input[1]);
  const inputs = input.slice(2);

  let left = input[0].split('');
  let right = [];

  for (let i = 0; i < n; i++) {
    if (inputs[i] === 'L') {
      if (left.length !== 0) {
        right.push(left.pop());
      }
      // console.log('L : 커서 왼쪽이동', left, right);
    } else if (inputs[i] === 'D') {
      if (right.length !== 0) {
        left.push(right.pop());
      }
      // console.log('D : 커서 오른쪽이동', left, right);
    } else if (inputs[i] === 'B') {
      if (left.length !== 0) {
        left.pop();
      }
      // console.log('B : 왼쪽 삭제', left, right);
    } else {
      left.push(inputs[i].split(' ')[1]);
      // console.log('P : 왼쪽 추가', left, right);
    }
  }
  // console.log(left, right);

  return left.join('').trim() + right.reverse().join('').trim();
}

console.log(solution(input));
