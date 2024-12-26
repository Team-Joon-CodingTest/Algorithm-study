const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const [N,_] = input[0];
    const numArr = input[1];
    const testCase = input.slice(2);
    const result = [];
    const sum = new Array(N+1).fill(0);

    for(let i=0; i<N; i++) {
        sum[i+1] = sum[i] + numArr[i];
    }

    testCase.forEach(([start, end]) => {
        result.push(sum[end] - sum[start - 1]);
    })

    console.log(result.join('\n'));
}

solution();
