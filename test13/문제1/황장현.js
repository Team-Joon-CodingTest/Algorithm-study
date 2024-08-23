const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const testCaseCount = input.shift()[0];

  const results = [];

  for (let i = 0; i < testCaseCount; i++) {
    const [N, M] = input.shift();

    console.log(N, M);

    const priorities = input.shift();
    console.log('priorities: ', priorities);
  }

  return results;
}

console.log(solution(input));
