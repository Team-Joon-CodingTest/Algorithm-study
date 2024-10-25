const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(input) {
  const result = [];

  function samDivide1return(arr, start, end) {
    const length = end - start;
    if (length === 1) {
      return;
    }

    const size = length / 3;

    for (let i = start + size; i < start + size * 2; i++) {
      arr[i] = ' ';
    }

    samDivide1return(arr, start, start + size);
    samDivide1return(arr, start + size * 2, end);
  }

  for (let i = 0; i < input.length; i++) {
    const N = input[i];
    const stickArray = Array(3 ** N).fill('-');

    samDivide1return(stickArray, 0, stickArray.length);

    result.push(stickArray.join(''));
  }

  console.log(result.join('\n'));
}

solution(input);
