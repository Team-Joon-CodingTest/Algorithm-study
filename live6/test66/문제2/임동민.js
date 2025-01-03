const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const N = input[0][0];
    const board = input.slice(1);
    const directions = [
        [1,0],
        [0,1]
    ];

    function recursive(x,y){
        if(x<0 || y<0 || x>=N || y>=N) return;
        if(board[x][y] === -1){
            return console.log('HaruHaru');
        }

        const jump = board[x][y];

        for(const [dx,dy] of directions){

        }


    }

    recursive(0,0);


}

solution();
