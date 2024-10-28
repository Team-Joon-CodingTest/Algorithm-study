const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim().split('\n').map(Number);

function solution() {

    const T = input[0];  // 테스트 케이스의 개수
    const numbers = input.slice(1);

    const dp = Array(11).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;

    for (let i = 4; i <= 10; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    const result = numbers.map(n => dp[n]);
    console.log(result.join('\n'));
}

solution();