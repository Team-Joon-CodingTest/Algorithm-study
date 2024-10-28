const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim().split('\n');

function solution() {
    const N = parseInt(input[0]);
    const costs = input.slice(1).map(line => line.split(' ').map(Number));

    const dp = Array.from({ length: N }, () => [0, 0, 0]);

    dp[0] = costs[0];

    for (let i = 1; i < N; i++) {
        dp[i][0] = costs[i][0] + Math.min(dp[i-1][1], dp[i-1][2]);
        dp[i][1] = costs[i][1] + Math.min(dp[i-1][0], dp[i-1][2]);
        dp[i][2] = costs[i][2] + Math.min(dp[i-1][0], dp[i-1][1]);
    }

    const result = Math.min(...dp[N-1]);
    console.log(result);
}

solution();