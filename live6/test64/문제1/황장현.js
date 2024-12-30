const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function solution(input) {
  const numberStruct = input.split('').map(Number);

  if (!numberStruct.includes(0)) return -1;

  const sum = numberStruct.reduce(
    (totalSum, currentNumber) => totalSum + currentNumber,
    0
  );
  if (sum % 3 !== 0) return -1;

  numberStruct.sort((a, b) => b - a);

  return numberStruct.join('');
}

console.log(solution(input));
