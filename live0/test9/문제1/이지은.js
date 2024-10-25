const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function solution(s) {
  const zero = s.length % 3;
  if (zero === 1) {
    s = '00' + s;
  } else if (zero === 2) {
    s = '0' + s;
  }

  let answer = '';
  for (let i = 0; i < s.length; i += 3) {
    const three = s.substring(i, i + 3);
    const num = parseInt(three, 2).toString(8);
    answer += num;
  }
  return answer;
}

console.log(solution(input));
