const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);

  const positions = input[1].split(' ').map(Number);

  let deque = Array.from({ length: N }, (_, i) => i + 1);

  let totalOperations = 0;

  positions.forEach((position) => {
    let index = deque.indexOf(position);

    let leftOperations = index;
    let rightOperations = deque.length - index;

    totalOperations += Math.min(leftOperations, rightOperations);

    if (leftOperations <= rightOperations) {
      deque = deque.slice(index).concat(deque.slice(0, index));
    } else {
      deque = deque
        .slice(-rightOperations)
        .concat(deque.slice(0, -rightOperations));
    }
    deque.shift();
  });

  return totalOperations;
}

console.log(solution(input));
