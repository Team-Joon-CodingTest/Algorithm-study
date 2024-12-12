const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  let result = [];
  let idx = 0;

  let t = input[idx][0];
  idx++;

  for (let i = 0; i < t; i++) {
    const [n, m] = input[idx];
    idx++;
    const queue = input[idx];
    idx++;

    let count = 0;
    let targetIndex = m;
    let printQueue = queue.map((priority, index) => [priority, index]);

    while (true) {
      const current = printQueue.shift();
      const [currentPriority, currentIndex] = current;

      if (printQueue.some(([priority]) => priority > currentPriority)) {
        printQueue.push(current);
      } else {
        count++;
        if (currentIndex === targetIndex) {
          result.push(count);
          break;
        }
      }
    }
  }

  return result.join('\n');
}

console.log(solution(input));
