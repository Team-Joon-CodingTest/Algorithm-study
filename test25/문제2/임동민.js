const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

function solution() {
    const sideLength = 2 ** input + 1;
    const square = Array.from({ length: sideLength }, () => new Array(sideLength).fill(' '));

    function drawSquare(square,positionX, positionY) {
        for(let x=positionX; x<square.length; x++){
            for(let y=positionY; y<square.length; y++){
                square[positionX][y] = "*";
                square[x][positionY] = "*";
                square[x][square.length-1] = "*";
                square[square.length-1][y] = "*";
            }
        }
    }

    drawSquare(square,0,0);
    console.log(square.join('\n'));
}

solution();