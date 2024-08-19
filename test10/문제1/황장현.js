const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

// 너무 어려워서 gpt의 도움을 받아 이해

function solution(input) {
  const [S, P] = input[0].map(Number);
  const dna = input[1][0];
  const minCounts = input[2].map(Number);

  let currentCounts = { A: 0, C: 0, G: 0, T: 0 };
  let validCount = 0;
  for (let i = 0; i < P; i++) {
    currentCounts[dna[i]]++;
  }

  function isValid() {
    return (
      currentCounts['A'] >= minCounts[0] &&
      currentCounts['C'] >= minCounts[1] &&
      currentCounts['G'] >= minCounts[2] &&
      currentCounts['T'] >= minCounts[3]
    );
  }

  if (isValid()) validCount++;

  for (let i = P; i < S; i++) {
    const startChar = dna[i - P];
    const endChar = dna[i];

    currentCounts[startChar]--;
    currentCounts[endChar]++;

    if (isValid()) validCount++;
  }

  return validCount;
}

console.log(solution(input));
