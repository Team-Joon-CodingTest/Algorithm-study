const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const A = parseInt(input);

// 힌트 참고.. but 틀림
function findWinningNumbers(A) {
  const winningNumbers = [];

  for (let n = 1; n <= A; n++) {
    let isWinning = true;

    for (let i = 1; i <= 31; i += n + 1) {
      if (i % (n + 1) === 1) {
        isWinning = false;
        break;
      }
    }

    if (isWinning) {
      winningNumbers.push(n);
    }
  }

  return winningNumbers;
}

const winningNumbers = findWinningNumbers(A);
winningNumbers.forEach((num) => console.log(num));
