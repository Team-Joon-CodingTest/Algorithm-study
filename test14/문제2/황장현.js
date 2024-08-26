const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let i = 0;
  let result = [];
  const pairs = { '(': ')', '[': ']' };
  while (1) {
    console.log(i, result);

    if (input[i] === '.') {
      break;
    }
    let store = [];
    for (let j = 0; j < input[i].length; j++) {
      let checkChar = input[i][j];
      if (checkChar === '(' || checkChar === '[') {
        store.push(checkChar);
      }
      if (checkChar === ')' || checkChar === ']') {
        const lastGH = store.pop();
        if (pairs[lastGH] !== checkChar) result.push('no');
      }
    }
    i++;
    result.push('yes');
  }
  return result.join('\n');
}

console.log(solution(input));
