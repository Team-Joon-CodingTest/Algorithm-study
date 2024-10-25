const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, M] = input[0];
  const relationships = input.slice(1);

  const graph = Array.from({ length: N + 1 }, () => []);

  for (let [me, friend] of relationships) {
    graph[me].push(friend);
    graph[friend].push(me);
  }

  function bfs(start) {
    const distances = Array(N + 1).fill(Infinity);
    const queue = [start];
    distances[start] = 0;

    while (queue.length > 0) {
      const current = queue.shift();

      for (let nearFriend of graph[current]) {
        if (distances[nearFriend] === Infinity) {
          distances[nearFriend] = distances[current] + 1;
          queue.push(nearFriend);
        }
      }
    }

    return distances.reduce(
      (sum, dist) => (dist !== Infinity ? sum + dist : sum),
      0
    );
  }

  let minBaconNumber = Infinity;
  let resultUser = 0;

  for (let i = 1; i <= N; i++) {
    const baconNumber = bfs(i);
    if (baconNumber < minBaconNumber) {
      minBaconNumber = baconNumber;
      resultUser = i;
    }
  }

  return resultUser;
}

console.log(solution(input));
