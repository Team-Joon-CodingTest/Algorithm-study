const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [V, E] = input[0].split(' ').map(Number);
    const K = Number(input[1]);
    const edges = input.slice(2).map(line => line.split(' ').map(Number));

    const INF = Infinity;
    const graph = Array.from({ length: V + 1 }, () => []);
    const dist = Array(V + 1).fill(INF);

    for (const [u, v, w] of edges) {
        graph[u].push([v, w]);
    }

    const pq = [];
    pq.push([0, K]);
    dist[K] = 0;

    while (pq.length) {
        pq.sort((a, b) => a[0] - b[0]);
        const [currentDist, u] = pq.shift();

        if (currentDist > dist[u]) continue;

        for (const [v, w] of graph[u]) {
            const newDist = currentDist + w;

            if (newDist < dist[v]) {
                dist[v] = newDist;
                pq.push([newDist, v]);
            }
        }
    }

    const result = dist.slice(1).map(d => (d === INF ? 'INF' : d)).join('\n');
    console.log(result);
}

solution();
