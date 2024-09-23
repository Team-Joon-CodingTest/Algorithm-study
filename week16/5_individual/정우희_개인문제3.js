var maxProbability = function (n, edges, succProb, start, end) {
  const graph = Array.from({ length: n }, () => []);
  const dist = Array(n).fill(-Infinity);
  const queue = [];

  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i];
    const p = succProb[i];

    graph[from].push([to, p]);
    graph[to].push([from, p]);
  }

  queue.push([start, 1]);
  dist[start] = 1;

  while (queue.length) {
    const [current, p] = queue.shift();

    for (let i = 0; i < graph[current].length; i++) {
      const [next, nextP] = graph[current][i];
      const nextProb = p * nextP;

      if (dist[next] < nextProb) {
        dist[next] = nextProb;
        queue.push([next, nextProb]);
      }
    }
  }

  return dist[end] === -Infinity ? 0 : dist[end];
};
