const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let T = parseInt(input[0], 10);
let idx = 1;

function findCycles(N, permutation) {
  const visited = Array(N + 1).fill(false);
  let cycleCount = 0;

  function dfs(node) {
    visited[node] = true;
    const nextNode = permutation[node - 1];
    if (!visited[nextNode]) {
      dfs(nextNode);
    }
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      dfs(i);
      cycleCount++;
    }
  }

  return cycleCount;
}

for (let t = 0; t < T; t++) {
  const N = parseInt(input[idx], 10);
  const permutation = input[idx + 1].split(' ').map(Number);
  idx += 2;

  console.log(findCycles(N, permutation));
}
