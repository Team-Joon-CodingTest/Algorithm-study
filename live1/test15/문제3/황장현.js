const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, M] = input.shift();
  const index = input.shift();
  let result = 0;
  const queue = Array.from({ length: N }, (_, i) => i + 1);

  for (let i = 0; i < M; i++) {
    const jiminNum = index[i];
    const targetIndex = queue.indexOf(jiminNum);
    const leftMove = targetIndex;
    const rightMove = queue.length - targetIndex;

    if (leftMove <= rightMove) {
      for (let j = 0; j < leftMove; j++) {
        queue.push(queue.shift());
        result++;
      }
    } else {
      for (let j = 0; j < rightMove; j++) {
        queue.unshift(queue.pop());
        result++;
      }
    }

    queue.shift();
  }

  return result;
}

console.log(solution(input));
