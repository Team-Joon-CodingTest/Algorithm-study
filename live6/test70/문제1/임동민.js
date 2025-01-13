const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

function solution() {
    const [N,M] = input;
    const r = M - N;
    const n = N + r - 1;

    function factorial(n){
        if(n===0){
            return 1;
        }
        return n * factorial(n-1);
    }

    let result = factorial(n) / factorial(n-r);
    result /= factorial(r);
    console.log(Math.round(result));

}

solution();
