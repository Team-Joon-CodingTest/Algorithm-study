const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const edges = input.slice(1).map((line) => line.split(' ').map(Number));

function findParentsDFS(N, edges) {
  const graph = {};
  const parents = Array(N + 1).fill(0);

  edges.forEach(([a, b]) => {
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  });

  function dfs(node, parent) {
    parents[node] = parent;
    graph[node].forEach((next) => {
      if (next !== parent) {
        dfs(next, node);
      }
    });
  }

  dfs(1, 0);

  return parents.slice(2);
}

const parents = findParentsDFS(N, edges);
console.log(parents.join('\n'));
