const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const ingredient = [];
const visited = Array(N).fill(false);
let answer = Infinity;

for (let i = 1; i <= N; i++) {
  const temp = input[i].split(' ').map(Number);

  ingredient.push(temp);
}

dfs(1, 0, 0, 0);
console.log(answer);

// S: *, B: +
function dfs(S, B, start, cnt) {
  if (cnt >= 1) answer = Math.min(answer, Math.abs(S - B)); // 요리 재료는 무조건 1개 이상

  // 조합 알고리즘
  for (let i = start; i < N; i++) {
    if (visited[i]) continue;

    const [s, b] = ingredient[i];

    visited[i] = true;
    dfs(S * s, B + b, i + 1, cnt + 1);
    visited[i] = false;
  }
}
