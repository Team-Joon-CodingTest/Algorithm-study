const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const N = input[0][0];
    const difficulty = input[1];
    const testCase = input.slice(3);
    const mistake = new Array(N+1).fill(0);
    const result = [];

    for(let i=1; i<=N; i++) {

        if(difficulty[i-1] > difficulty[i]){
            mistake[i] = mistake[i-1] + 1;
        } else {
            mistake[i] = mistake[i-1];
        }

    }

    testCase.forEach(([start, end]) => {
        result.push(mistake[end-1] - mistake[start - 2]);
    })

    console.log(result.join('\n'));
}

solution();
