const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

const result = [];
const visited = Array(N + 1).fill(false);
const currentPermutation = [];

function dfs(depth) {
  if (depth === N) {
    console.log(currentPermutation.join(' '));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      currentPermutation.push(i);
      dfs(depth + 1);
      currentPermutation.pop();
      visited[i] = false;
    }
  }
}

dfs(0);
