const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

function solution(input) {
  const [N, M] = input[0].map(Number);
  const prevChessBoard = input.slice(1).map((el) => el[0].split(''));

  function checkChessBoard(chessBoard) {
    let whiteFirst = 0;
    let blackFirst = 0;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const currentChessBlock = chessBoard[i][j];
        if ((i + j) % 2 === 0) {
          if (currentChessBlock === 'W') {
            blackFirst++;
          } else {
            whiteFirst++;
          }
        } else {
          if (currentChessBlock === 'B') {
            blackFirst++;
          } else {
            whiteFirst++;
          }
        }
      }
    }
    return Math.min(whiteFirst, blackFirst);
  }

  let minRepaint = Infinity;

  for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
      const standardChessBoard = prevChessBoard
        .slice(i, i + 8)
        .map((row) => row.slice(j, j + 8));
      const repaint = checkChessBoard(standardChessBoard);
      minRepaint = Math.min(minRepaint, repaint);
    }
  }

  return minRepaint;
}

console.log(solution(input));
