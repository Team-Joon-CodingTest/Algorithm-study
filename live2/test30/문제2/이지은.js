const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, M, V] = input[0];
  const arr = input.slice(1);

  const graph = Array.from({ length: N + 1 }, () => []);

  arr.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

  // 작은 번호부터 방문하기 위해 정렬
  graph.forEach((el) => el.sort((a, b) => a - b));

  // 방문 기록용 배열
  const visitedDFS = Array(N + 1).fill(false);
  const visitedBFS = Array(N + 1).fill(false);

  // DFS 결과를 담을 배열
  const dfsResult = [];

  function dfs(v) {
    visitedDFS[v] = true; // 현재 노드 방문 처리
    dfsResult.push(v); // 방문한 노드 기록

    for (const neighbor of graph[v]) {
      if (!visitedDFS[neighbor]) {
        dfs(neighbor); // 재귀 호출로 계속 탐색
      }
    }
  }

  // BFS 결과를 담을 배열
  const bfsResult = [];

  function bfs(start) {
    const queue = [start]; // 시작 노드를 큐에 넣고 시작
    visitedBFS[start] = true; // 시작 노드 방문 처리

    while (queue.length) {
      const v = queue.shift(); // 큐에서 노드를 하나 꺼냄
      bfsResult.push(v); // 방문한 노드 기록

      for (const neighbor of graph[v]) {
        if (!visitedBFS[neighbor]) {
          visitedBFS[neighbor] = true; // 방문 처리
          queue.push(neighbor); // 큐에 넣음
        }
      }
    }
  }

  dfs(V);
  bfs(V);

  console.log(dfsResult.join(' '));
  console.log(bfsResult.join(' '));
}

solution(input);
