const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

function solution(input) {
  const M = input[0];
  let S = new Set();
  const result = [];

  for (let i = 1; i < input.length; i++) {
    const [calc, x] = input[i];
    if (calc === 'add') {
      S.add(x);
    }

    if (calc === 'remove') {
      S.delete(x);
    }

    if (calc === 'check') {
      S.has(x) ? result.push(1) : result.push(0);
    }

    if (calc === 'toggle') {
      S.has(x) ? S.delete(x) : S.add(x);
    }

    if (calc === 'all') {
      S = new Set(Array.from({ length: 20 }, (v, i) => i + 1));
    }

    if (calc === 'empty') {
      S.clear();
    }
  }
  return result.join('\n');
}

console.log(solution(input));
