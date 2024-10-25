const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

function solution(input) {
  const testCase = input.shift();
  let result = [];

  for (let i = 0; i < testCase; i++) {
    const clothesNum = input.shift();
    const clothesMap = new Map();
    for (let j = 0; j < clothesNum; j++) {
      const [clothesName, clothesCategory] = input.shift();
      if (clothesMap.has(clothesCategory)) {
        clothesMap.set(clothesCategory, clothesMap.get(clothesCategory) + 1);
      } else {
        clothesMap.set(clothesCategory, 1);
      }
    }

    let multiForCase = 1;
    for (const count of clothesMap) {
      multiForCase *= count[1] + 1;
    }
    result.push(multiForCase - 1);
  }
  return result.join('\n');
}

console.log(solution(input));
