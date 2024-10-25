const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

function solution(input) {
  const chatCount = input.shift()[0];

  let helloCount = 0;
  let isEnterUser = new Map();

  for (let i = 1; i < chatCount; i++) {
    if (input[i][0] === 'ENTER') {
      isEnterUser.clear();
    } else {
      let nickname = input[i][0];
      if (!isEnterUser.has(nickname)) {
        helloCount++;
        isEnterUser.set(nickname, true);
      }
    }
  }

  return helloCount;
}

console.log(solution(input));
