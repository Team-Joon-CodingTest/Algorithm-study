const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

function solution() {
    const N = Number(input);

    if(N % 2 === 0){
        console.log('SK');
    } else console.log('CY');

}

solution();