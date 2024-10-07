const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const computerNum = input[0][0];
  const computerPairNum = input[1][0];
  const edges = input.slice(2);

  const graph = Array.from({ length: computerNum + 1 }, () => []);

  for (const [computer, nearComputer] of edges) {
    graph[computer].push(nearComputer);
    graph[nearComputer].push(computer);
  }

  const visited = Array(computerNum + 1).fill(false);
  const queue = [1];
  visited[1] = true;
  let virusComputer = 0;

  while (queue.length > 0) {
    const currentComputer = queue.shift();

    for (const nextComputer of graph[currentComputer]) {
      if (!visited[nextComputer]) {
        visited[nextComputer] = true;
        queue.push(nextComputer);
        virusComputer++;
      }
    }
  }

  return virusComputer;
}

console.log(solution(input));
