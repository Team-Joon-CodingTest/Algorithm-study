const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, M, V] = input[0];
  const edges = input.slice(1);

  const graph = Array.from({ length: N + 1 }, () => []);

  for (const [node, nearNode] of edges) {
    graph[node].push(nearNode);
    graph[nearNode].push(node);
  }

  graph.forEach((nearNodes) => nearNodes.sort((a, b) => a - b));

  const visitedOfDFS = Array(N + 1).fill(false);
  const resultOfDFS = [];

  function DFS(node) {
    visitedOfDFS[node] = true;
    resultOfDFS.push(node);
    for (const nextNode of graph[node]) {
      if (!visitedOfDFS[nextNode]) {
        DFS(nextNode);
      }
    }
  }

  const queue = [V];
  const visitedOfBFS = Array(N + 1).fill(false);
  visitedOfBFS[V] = true;
  const resultOfBFS = [];

  function BFS() {
    while (queue.length) {
      const currentNode = queue.shift();
      resultOfBFS.push(currentNode);

      for (const nextNode of graph[currentNode]) {
        if (!visitedOfBFS[nextNode]) {
          visitedOfBFS[nextNode] = true;
          queue.push(nextNode);
        }
      }
    }
  }

  DFS(V);
  BFS();

  return [resultOfDFS.join(' '), resultOfBFS.join(' ')];
}

const [dfsResult, bfsResult] = solution(input);
console.log(dfsResult);
console.log(bfsResult);
