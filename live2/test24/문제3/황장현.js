const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const testCase = input[0][0];
  let index = 1;
  const results = [];

  for (let i = 0; i < testCase; i++) {
    const count = input[index][0];
    const permutation = input[index + 1];
    const visited = Array(count + 1).fill(false);

    let cycleCount = 0;

    function findCycle(n) {
      if (visited[n]) return;
      visited[n] = true;
      findCycle(permutation[n - 1]);
    }

    for (let j = 1; j <= count; j++) {
      if (!visited[j]) {
        cycleCount++;
        findCycle(j);
      }
    }

    results.push(cycleCount);
    index += 2;
  }

  return results.join('\n');
}

console.log(solution(input));
