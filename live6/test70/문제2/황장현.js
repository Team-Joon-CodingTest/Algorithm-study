const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const testCase = Number(input[0]);
  const results = [];
  let index = 1;

  for (let i = 0; i < testCase; i++) {
    const n = Number(input[index]);
    index++;

    const clothingMap = new Map();

    for (let j = 0; j < n; j++) {
      const [name, type] = input[index].split(' ');
      index++;

      if (clothingMap.has(type)) {
        clothingMap.set(type, clothingMap.get(type) + 1);
      } else {
        clothingMap.set(type, 1);
      }
    }

    let result = 1;
    for (const count of clothingMap.values()) {
      result *= count + 1;
    }
    results.push(result - 1);
  }

  return results.join('\n');
}

console.log(solution(input));
