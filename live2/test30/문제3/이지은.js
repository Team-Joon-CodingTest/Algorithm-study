const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N] = input[0];
  const [edge] = input[1];
  const arr = input.slice(2);

  const graph = Array.from({ length: N + 1 }, () => []);
  arr.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

  const visited = Array(N + 1).fill(false); // 방문 여부를 체크
  let infectedCount = 0; // 감염된 컴퓨터 수
  const queue = [1]; // 1번 컴퓨터부터 시작
  visited[1] = true; // 1번 컴퓨터는 방문 처리

  while (queue.length > 0) {
    const current = queue.shift(); // 큐에서 하나씩 컴퓨터를 꺼내서 탐색

    graph[current].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true; // 방문 처리
        queue.push(neighbor); // 큐에 이웃 컴퓨터 추가
        infectedCount++; // 감염된 컴퓨터 수 증가
      }
    });
  }

  return infectedCount;
}

console.log(solution(input));
