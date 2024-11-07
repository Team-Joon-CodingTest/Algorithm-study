const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const n = parseInt(input[0]);
    const m = parseInt(input[1]);
    const INF = Infinity;

    const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(INF));

    for (let i = 1; i <= n; i++) {
        dist[i][i] = 0;
    }

    for (let i = 2; i < 2 + m; i++) {
        const [a, b, c] = input[i].split(' ').map(Number);
        dist[a][b] = Math.min(dist[a][b], c);
    }

    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }

    const result = [];
    for (let i = 1; i <= n; i++) {
        const row = [];
        for (let j = 1; j <= n; j++) {
            if (dist[i][j] === INF) {
                row.push(0);
            } else {
                row.push(dist[i][j]);
            }
        }
        result.push(row.join(' '));
    }
    console.log(result.join('\n'));
}

solution();
