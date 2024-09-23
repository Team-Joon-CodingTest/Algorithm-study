const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const N = input.shift();
  let goodWordCount = 0;

  for (let i = 0; i < N; i++) {
    const store = [];

    for (let j = 0; j < input[i].length; j++) {
      const checkWord = input[i][j];
      if (store.length > 0 && store[store.length - 1] === checkWord) {
        store.pop();
      } else {
        store.push(checkWord);
      }
    }
    if (store.length === 0) {
      goodWordCount++;
    }
  }
  return goodWordCount;
}

console.log(solution(input));
