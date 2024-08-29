const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let answer = [];
  for (x of input) {
    if (x === '.') continue;
    let open = [];
    let balanced = true;

    for (s of x) {
      if (s === '(' || s === '[') {
        open.push(s);
      } else if (s === ')' || s === ']') {
        if (
          open.length === 0 ||
          (s === ')' && open.pop() !== '(') ||
          (s === ']' && open.pop() !== '[')
        ) {
          balanced = false;
          break;
        }
      }
    }

    if (balanced && open.length === 0) {
      answer.push('yes');
    } else {
      answer.push('no');
    }
  }

  return answer.join('\n');
}

console.log(solution(input));
