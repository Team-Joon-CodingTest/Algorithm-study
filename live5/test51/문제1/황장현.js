const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

function solution(input) {
  const testCase = Number(input[0][0]);
  const result = [];

  for (let i = 1; i <= testCase; i++) {
    const validateMessage = input[i][0];
    const storage = {};
    let flag = true;

    for (let j = 0; j < validateMessage.length; j++) {
      const alphabet = validateMessage[j];
      storage[alphabet] = (storage[alphabet] || 0) + 1;

      if (storage[alphabet] % 3 === 0) {
        if (validateMessage[j + 1] !== alphabet) {
          flag = false;
          break;
        }
        j++;
      }
    }

    if (flag) {
      result.push('OK');
    } else {
      result.push('FAKE');
    }
  }

  return result.join('\n');
}

console.log(solution(input));
