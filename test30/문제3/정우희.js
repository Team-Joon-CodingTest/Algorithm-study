const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numComputers = Number(input[0]);
const numEdges = Number(input[1]);
const graph = Array.from({ length: numComputers + 1 }, () => []);
const visited = Array(numComputers + 1).fill(false);

for (let i = 2; i < 2 + numEdges; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

function dfs(v) {
  visited[v] = true;
  let count = 1;

  for (const neighbor of graph[v]) {
    if (!visited[neighbor]) {
      count += dfs(neighbor);
    }
  }
  return count;
}

const infectedComputers = dfs(1) - 1;

console.log(infectedComputers);
