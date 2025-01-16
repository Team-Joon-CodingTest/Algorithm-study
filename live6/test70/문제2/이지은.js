const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let index = 0;
  const T = Number(input[index++]);
  const results = [];

  for (let t = 0; t < T; t++) {
    const n = Number(input[index++]);
    const clothesMap = {};

    for (let i = 0; i < n; i++) {
      const [item, type] = input[index++].split(' ');
      if (clothesMap[type]) {
        clothesMap[type]++;
      } else {
        clothesMap[type] = 1;
      }
    }

    let result = 1;
    for (const type in clothesMap) {
      result *= clothesMap[type] + 1;
    }

    results.push(result - 1);
  }

  return results.join('\n');
}

console.log(solution(input));
