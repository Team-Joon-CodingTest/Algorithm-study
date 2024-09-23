const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const testCases = parseInt(input[0], 10);
  let results = [];

  let index = 1;
  for (let t = 0; t < testCases; t++) {
    const [N, M] = input[index].split(' ').map(Number);
    const priorities = input[index + 1].split(' ').map(Number);

    let queue = priorities.map((priority, idx) => [priority, idx]);
    let printOrder = 0;

    while (queue.length > 0) {
      const current = queue.shift();
      const hasHigherPriority = queue.some((doc) => doc[0] > current[0]);

      if (hasHigherPriority) {
        queue.push(current);
      } else {
        printOrder++;
        if (current[1] === M) {
          results.push(printOrder);
          break;
        }
      }
    }

    index += 2;
  }

  console.log(results.join('\n'));
}

solution(input);
