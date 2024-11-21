const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(Number);

function isPrime(x) {
    for(let i=2;i<=Math.sqrt(x);i++){
        if(x%i === 0) return false;
    }
    return true;
}

function countPrime(x){
    let count = 0;
    for(let i=x+1; i<=x*2; i++){
        if(isPrime(i)) count++;
    }
    return count;
}

function solution() {
    input.forEach((e)=>{
        if(e === 0) return;

        console.log(countPrime(e));
    })

}

solution();