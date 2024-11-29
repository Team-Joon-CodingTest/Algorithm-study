const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const n = input[0];
  const password = input.slice(1);
  let answer = [];

  for (let j = 0; j < n; j++) {
    let map = new Map();

    s = password[j];

    let isValid = true;

    for (let i = 0; i < s.length; i++) {
      map.set(s[i], (map.get(s[i]) || 0) + 1);

      if (map.get(s[i]) === 3) {
        if (i + 1 >= s.length || s[i + 1] !== s[i]) {
          answer.push('FAKE');
          isValid = false;
          break;
        }
        map.set(s[i], 0);
        i++;
      }
    }
    if (isValid) {
      answer.push('OK');
    }
  }
  return answer.join('\n');
}

console.log(solution(input));
