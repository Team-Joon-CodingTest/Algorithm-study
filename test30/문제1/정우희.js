const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const friends = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [A, B] = input[i].split(' ').map(Number);
  friends[A].push(B);
  friends[B].push(A);
}

function bfs(start) {
  const visited = Array(N + 1).fill(false);
  const queue = [[start, 0]];
  visited[start] = true;

  let totalDistance = 0;

  while (queue.length > 0) {
    const [current, distance] = queue.shift();
    totalDistance += distance;

    for (const next of friends[current]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, distance + 1]);
      }
    }
  }

  return totalDistance;
}

let minBacon = Infinity;
let minUser = 0;

for (let i = 1; i <= N; i++) {
  const bacon = bfs(i);
  if (bacon < minBacon) {
    minBacon = bacon;
    minUser = i;
  }
}

console.log(minUser);
