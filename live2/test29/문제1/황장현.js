const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, K] = input[0];
  const maxPosition = 100000;

  if (N >= K) {
    return N - K;
  }

  const visited = Array(maxPosition + 1).fill(false);
  const queue = [[N, 0]];
  visited[N] = true;

  while (queue.length > 0) {
    const [currentPosition, time] = queue.shift();

    if (currentPosition === K) {
      return time;
    }

    if (currentPosition * 2 <= maxPosition && !visited[currentPosition * 2]) {
      visited[currentPosition * 2] = true;
      queue.unshift([currentPosition * 2, time]);
    }

    if (currentPosition - 1 >= 0 && !visited[currentPosition - 1]) {
      visited[currentPosition - 1] = true;
      queue.push([currentPosition - 1, time + 1]);
    }

    if (currentPosition + 1 <= maxPosition && !visited[currentPosition + 1]) {
      visited[currentPosition + 1] = true;
      queue.push([currentPosition + 1, time + 1]);
    }
  }
}

console.log(solution(input));
