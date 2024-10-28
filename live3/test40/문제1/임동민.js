const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

function solution() {
    const N = parseInt(input);
    const dp = Array(N + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 3; i <= N; i++) {
        if(i >= 3) dp[i] = Math.min(dp[i], dp[i-3] +1);
        if(i >= 5) dp[i] = Math.min(dp[i], dp[i-5] +1);
    }

    dp[N] === Infinity ? console.log(-1) : console.log(dp[N]);
}

solution();