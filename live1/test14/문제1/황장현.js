const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let st1 = input[0].split('');
  let st2 = [];
  const n = parseInt(input[1]);

  for (let i = 2; i < 2 + n; i++) {
    const C = input[i].split(' ');

    if (C[0] === 'L' && st1.length) {
      st2.push(st1.pop());
    } else if (C[0] === 'D' && st2.length) {
      st1.push(st2.pop());
    } else if (C[0] === 'B' && st1.length) {
      st1.pop();
    } else if (C[0] === 'P') {
      st1.push(C[1]);
    }
  }

  return st1.concat(st2.reverse()).join('');
}

console.log(solution(input));

// gpt 도움
