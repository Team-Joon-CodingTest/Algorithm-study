const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function bfs(start, graph, N) {
  const distances = Array(N + 1).fill(-1); // 모든 거리를 -1로 초기화
  const queue = [start]; // BFS의 시작점
  distances[start] = 0; // 시작점의 거리는 0

  while (queue.length > 0) {
    const current = queue.shift(); // 큐에서 현재 노드를 꺼냄

    graph[current].forEach((next) => {
      if (distances[next] === -1) {
        // 아직 방문하지 않은 노드
        distances[next] = distances[current] + 1; // 이전 거리 + 1
        queue.push(next); // 큐에 추가하여 다음 탐색 대상
      }
    });
  }

  return distances.reduce((acc, cur) => acc + (cur === -1 ? 0 : cur), 0);
}

function solution(input) {
  const [N, M] = input[0];
  const arr = input.slice(1);

  const graph = Array.from({ length: N + 1 }, () => []);
  arr.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

  let minKevinBacon = Infinity;
  let person = 0;

  for (let i = 1; i <= N; i++) {
    const kevinBaconNumber = bfs(i, graph, N);
    if (kevinBaconNumber < minKevinBacon) {
      minKevinBacon = kevinBaconNumber;
      person = i;
    }
  }

  return person;
}

console.log(solution(input));
