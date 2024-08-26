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
    const priorities = input.shift();
    let outIndex = 0;

    const queue = priorities.map((priority, index) => ({ index, priority }));

    while (queue.length > 0) {
      let currentFile = queue.shift();

      let maxPriority = Math.max(...queue.map((file) => file.priority));

      if (currentFile.priority < maxPriority) {
        queue.push(currentFile);
      } else {
        outIndex++;
        if (currentFile.index === M) {
          results.push(outIndex);
          break;
        }
      }
    }
  }

  return results.join('\n');
}

console.log(solution(input));
