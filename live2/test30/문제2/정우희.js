const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, V] = input[0].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [from, to] = input[i].split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

const dfsResult = [];
const dfsVisited = Array(N + 1).fill(false);

function dfs(v) {
  dfsVisited[v] = true;
  dfsResult.push(v);

  for (let next of graph[v]) {
    if (!dfsVisited[next]) {
      dfs(next);
    }
  }
}

const bfsResult = [];
const bfsVisited = Array(N + 1).fill(false);

function bfs(start) {
  const queue = [start];
  bfsVisited[start] = true;

  while (queue.length > 0) {
    const v = queue.shift();
    bfsResult.push(v);

    for (let next of graph[v]) {
      if (!bfsVisited[next]) {
        bfsVisited[next] = true;
        queue.push(next);
      }
    }
  }
}

dfs(V);
bfs(V);

console.log(dfsResult.join(' '));
console.log(bfsResult.join(' '));
