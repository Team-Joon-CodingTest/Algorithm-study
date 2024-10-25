const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  arr = input.slice(1);
  let answer = [];

  for (let x of arr) {
    let word = {};
    let isFake = false;

    for (let i = 0; i < x.length; i++) {
      if (!word[x[i]]) {
        word[x[i]] = 1;
      } else {
        word[x[i]]++;

        if (word[x[i]] % 3 === 0) {
          if (i + 1 >= x.length || x[i] !== x[i + 1]) {
            answer.push('FAKE');
            isFake = true;
            break;
          }
          i++;
        }
      }
    }
    if (!isFake) {
      answer.push('OK');
    }
  }

  return answer.join('\n');
}

console.log(solution(input));
