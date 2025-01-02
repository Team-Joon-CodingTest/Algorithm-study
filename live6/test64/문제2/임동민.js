const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const [N,K] = input[0];
    const testCase = input.slice(1);
    let sum = 0;
    const window = 2 * K + 1;

    let maxPosition = 0;

    for (let i = 0; i < N; i++) {
        const [, position] = testCase[i];
        if (position > maxPosition) maxPosition = position;
    }

    const arr = new Array(maxPosition+1).fill(0);

    testCase.forEach(([ices,position]) => {
        arr[position] += ices;
    })

    for(let i=0; i<= Math.min(maxPosition, window - 1); i++) {
        sum += arr[i];
    }

    let max = sum;

    for(let i=window; i<=maxPosition; i++) {
        sum += arr[i] - arr[i-window];
        max = Math.max(max, sum);
    }

    console.log(max);
}

solution();
