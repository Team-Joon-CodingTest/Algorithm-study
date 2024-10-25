const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [S, P] = input[0].split(' ').map(Number);
  const DNA = input[1];
  const requiredCount = input[2].split(' ').map(Number);

  let currentCount = [0, 0, 0, 0];
  let validPasswordCount = 0;

  for (let i = 0; i < P; i++) {
    if (DNA[i] === 'A') currentCount[0]++;
    if (DNA[i] === 'C') currentCount[1]++;
    if (DNA[i] === 'G') currentCount[2]++;
    if (DNA[i] === 'T') currentCount[3]++;
  }

  function isValid() {
    return (
      currentCount[0] >= requiredCount[0] &&
      currentCount[1] >= requiredCount[1] &&
      currentCount[2] >= requiredCount[2] &&
      currentCount[3] >= requiredCount[3]
    );
  }

  if (isValid()) validPasswordCount++;

  for (let i = P; i < S; i++) {
    const prevChar = DNA[i - P];
    if (prevChar === 'A') currentCount[0]--;
    if (prevChar === 'C') currentCount[1]--;
    if (prevChar === 'G') currentCount[2]--;
    if (prevChar === 'T') currentCount[3]--;

    const newChar = DNA[i];
    if (newChar === 'A') currentCount[0]++;
    if (newChar === 'C') currentCount[1]++;
    if (newChar === 'G') currentCount[2]++;
    if (newChar === 'T') currentCount[3]++;

    if (isValid()) validPasswordCount++;
  }

  return validPasswordCount;
}

console.log(solution(input));
