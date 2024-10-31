const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

function solution() {
    const N = parseInt(input);
    const dp = new Array(N+1).fill(0);
    dp[1] = 1;
    dp[2] = 3;

    for (let i = 3; i <= N; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
    }
    console.log(dp[N]);
}

solution();