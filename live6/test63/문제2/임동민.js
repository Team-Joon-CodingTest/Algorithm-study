const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

function solution() {
    const N = input[0];
    const prediction = input.slice(1).sort((a, b) => a - b);

    let sum = 0;

    for(let i=0; i<N; i++) {
        sum += Math.abs((i + 1) - prediction[i]);
    }

    console.log(sum);
}

solution();
