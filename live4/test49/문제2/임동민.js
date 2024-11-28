const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(' ').map(Number);

function isPrime(x){
    if(x===1) return false;
    for(let i=2; i<=Math.sqrt(x); i++){
        if(x%i === 0) return false;
    }
    return true;
}

function solution() {
    const [M,N] = input;

    for(let i=M; i<=N; i++){
        if(isPrime(i)) console.log(i);
    }
}

solution();