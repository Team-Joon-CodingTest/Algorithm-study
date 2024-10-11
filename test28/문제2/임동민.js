const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution(){
    const [R,C] = input[0].split(' ').map(Number);
    const board = input.slice(1).map(e=>e.split(''));
    console.log(R,C,board);

    const directions = [
        [-1,0],
        [1,0],
        [0,-1],
        [0,1]
    ]

    function dfs(){

        for(const [dx,dy] of directions){

        }
    }
}

solution();