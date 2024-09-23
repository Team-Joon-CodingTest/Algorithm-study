let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().trim().split('\n');

let n = Number(input[0]);

let dp = new Array(n + 1);

dp[1] = Number(input[1]);
dp[2] = dp[1] + Number(input[2]);
dp[3] = Math.max(Number(input[1]), Number(input[2])) + Number(input[3]);

for (let i = 4; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 3] + Number(input[i - 1]) + Number(input[i]),
    dp[i - 2] + Number(input[i])
  );
}

console.log(dp[n]);
