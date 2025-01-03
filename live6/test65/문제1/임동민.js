const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(''));

function solution() {
    const board = input.slice(1);
    let result= 0;

    function getMaxCandy(){
        let max = 0;

        for(let i=0; i<board.length;i++){
            let count = 1;
            for(let j=0; j<board.length -1; j++){
                if(board[i][j] === board[i][j+1]){
                    count++;
                } else {
                    max = Math.max(max, count);
                    count = 1;
                }
            }
            max = Math.max(max, count);
        }

        for(let i=0; i<board.length;i++){
            let count = 1;
            for(let j=0; j<board.length -1; j++){
                if(board[j][i] === board[j+1][i]){
                    count++;
                } else {
                    max = Math.max(max, count);
                    count = 1;
                }
            }
            max = Math.max(max, count);
        }

        return max;
    }

    for(let i=0; i<board.length; i++){
        for(let j=0; j<board.length; j++){
            if(j+1 < board.length){
                [board[i][j], board[i][j+1]] = [board[i][j+1], board[i][j]];
                result = Math.max(result, getMaxCandy());
                [board[i][j], board[i][j+1]] = [board[i][j+1], board[i][j]];
            }

            if(i+1 < board.length){
                [board[i][j], board[i+1][j]] = [board[i+1][j], board[i][j]];
                result = Math.max(result, getMaxCandy());
                [board[i][j], board[i+1][j]] = [board[i+1][j], board[i][j]];
            }
        }
    }

    console.log(result);

}

solution();
