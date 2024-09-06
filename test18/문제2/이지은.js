const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map(Number));

function solution() {
  const difficulty = input[1];
  const question = input.slice(3);
  const result = [];

  const failCount = new Array(difficulty.length).fill(0);

  for (let i = 1; i < difficulty.length; i++) {
    failCount[i] = failCount[i - 1];
    if (difficulty[i - 1] > difficulty[i]) {
      failCount[i]++;
    }
  }
  question.forEach(([start, end]) => {
    result.push(failCount[end - 1] - failCount[start - 1]);
  });

  console.log(result.join('\n'));
}
