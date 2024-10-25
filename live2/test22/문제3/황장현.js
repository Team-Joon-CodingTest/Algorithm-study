const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(input) {
  let [N, Kim, Lim] = input;

  if (Kim > Lim) {
    [Kim, Lim] = [Lim, Kim];
  }

  let result = 1;

  while (true) {
    if (Kim % 2 === 1 && Lim - Kim === 1) {
      break;
    }
    Kim = Math.ceil(Kim / 2);
    Lim = Math.ceil(Lim / 2);
    result++;
  }

  return result;
}

console.log(solution(input));
