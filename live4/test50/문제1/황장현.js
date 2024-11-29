const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

function solution(input) {
  const [S, P] = input[0].map(Number);
  const DNA = input[1][0];
  const [A, C, G, T] = input[2].map(Number);

  let count = 0;
  const currentCounts = { A: 0, C: 0, G: 0, T: 0 };

  for (let i = 0; i < P; i++) {
    currentCounts[DNA[i]]++;
  }

  const isValid = () =>
    currentCounts['A'] >= A &&
    currentCounts['C'] >= C &&
    currentCounts['G'] >= G &&
    currentCounts['T'] >= T;

  if (isValid()) count++;

  for (let i = P; i < S; i++) {
    const prevChar = DNA[i - P];
    const nextChar = DNA[i];

    currentCounts[prevChar]--;
    currentCounts[nextChar]++;

    if (isValid()) count++;
  }

  return count;
}

console.log(solution(input));
