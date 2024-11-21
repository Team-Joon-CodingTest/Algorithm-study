const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

function solution() {
    const N = Number(input);
    let stick = 64;
    let sum = 64;
    let count = 1;

    while (sum > N){
        stick /=  2;

        if(sum - stick >= N){
            sum -= stick;
        } else count++;
    }
    console.log(count);
}

solution();