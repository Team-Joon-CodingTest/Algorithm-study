function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const targets = input[1].split(' ').map(Number);
  let queue = Array.from({ length: N }, (_, i) => i + 1);
  let operations = 0;

  for (let target of targets) {
    const targetIndex = queue.indexOf(target);

    const leftDistance = targetIndex;
    const rightDistance = queue.length - targetIndex;

    operations += Math.min(leftDistance, rightDistance);

    queue = [...queue.slice(targetIndex + 1), ...queue.slice(0, targetIndex)];
  }

  console.log(operations);
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
solution(input);
