const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function 재귀(field, start, end) {
  const length = end - start;
  if (length === 1) {
    return;
  }

  const size = length / 3;

  for (let i = start + size; i < start + size * 2; i++) {
    field[i] = ' ';
  }

  재귀(field, start, start + size);
  재귀(field, start + size * 2, end);
}

function solution(input) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    const N = input[i];
    if (N === 0) {
      result.push('-');
      continue;
    }
    if (N === 1) {
      result.push('- -');
      continue;
    }
    const M = 3 ** N;
    const field = Array(M).fill('-');
    재귀(field, 0, M);
    result.push(field.join(''));
  }
  return result.join('\n');
}

console.log(solution(input));
