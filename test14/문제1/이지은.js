const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let answer;
  let s = input[0].split('');
  let Left = s;
  let Right = [];

  for (x of input.slice(-input[1])) {
    if (x === 'L') {
      if (Left.length !== 0) {
        Right.push(Left.pop());
      } else continue;
    } else if (x === 'D') {
      if (Right.length !== 0) {
        Left.push(Right.pop());
      } else continue;
    } else if (x === 'B') {
      Left.pop();
    } else {
      Left.push(x.split(' ').pop());
    }
  }

  return (answer = Left.join('') + Right.reverse().join(''));
}

console.log(solution(input));
