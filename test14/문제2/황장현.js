const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const result = [];
  const pairs = { '(': ')', '[': ']' };

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '.') break;

    let store = [];
    let isBalanced = true;

    for (let j = 0; j < input[i].length; j++) {
      let checkChar = input[i][j];
      if (checkChar === '(' || checkChar === '[') {
        store.push(checkChar);
      } else if (checkChar === ')' || checkChar === ']') {
        let lastChar = store.pop();
        if (pairs[lastChar] !== checkChar) {
          isBalanced = false;
          break;
        }
      }
    }

    if (isBalanced && store.length === 0) {
      result.push('yes');
    } else {
      result.push('no');
    }
  }

  return result.join('\n');
}

console.log(solution(input));
