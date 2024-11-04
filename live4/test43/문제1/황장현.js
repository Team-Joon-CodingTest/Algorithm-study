const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [V, E] = input[0];
  const start = input[1][0];

  const nearNode = Array.from({ length: V + 1 }, () =>
    Array(V + 1).fill(Infinity)
  );

  for (let i = 2; i < E + 2; i++) {
    const [u, v, w] = input[i];
    nearNode[u][v] = w;
  }

  function damm(start) {
    const distance = Array(V + 1).fill(Infinity);
    distance[start] = 0;
    const willGoNode = [[start, 0]];

    while (willGoNode.length > 0) {
      willGoNode.sort((a, b) => a[1] - b[1]);

      const [currentNode, currentCost] = willGoNode.shift();

      if (currentCost > distance[currentNode]) continue;

      for (const [nextNode, nextCost] of nearNode[currentNode].entries()) {
        if (nextCost !== Infinity) {
          const newCost = currentCost + nextCost;

          if (newCost < distance[nextNode]) {
            distance[nextNode] = newCost;
            willGoNode.push([nextNode, newCost]);
          }
        }
      }
    }
    return distance;
  }

  return damm(start);
}

console.log(solution(input));
