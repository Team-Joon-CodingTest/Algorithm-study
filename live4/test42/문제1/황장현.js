const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, M] = input[0];
  let result = 0;

  const graph = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => [0, 0])
  );

  for (let i = 1; i <= M; i++) {
    const [A, B, C] = input[i];

    graph[A - 1][B - 1] = [1, C];
    graph[B - 1][A - 1] = [1, C];
  }

  let index = 0;
  const visited = new Set();

  while (index + 1 < N) {
    visited.add(index);
    const current = graph[index];

    const filtered = current.filter(
      (load) => load[0] === 1 && !visited.has(current.indexOf(load))
    );

    if (filtered.length === 0) break;

    const minLoad = filtered.reduce((min, curr) => {
      return curr[1] < min[1] ? curr : min;
    }, filtered[0]);

    index = current.indexOf(minLoad);
    result += minLoad[1];
  }
  return result;
}

console.log(solution(input));
