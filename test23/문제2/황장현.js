const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

function solution(input) {
  const testCase = input.shift();

  for (let i = 0; i < testCase; i++) {
    const clothesNum = input.shift();
    const clothesMap = new Map();
    for (let j = 0; j < clothesNum; j++) {
      const [clothesName, clothesCategory] = input.shift();
    }
  }
}

console.log(solution(input));
