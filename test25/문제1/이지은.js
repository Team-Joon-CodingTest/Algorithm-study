const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(input) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    let N = 3 ** input[i];
    let str = '-';
    let arr = str.repeat(N);

    function three(arr) {
      if (arr.length === 1) {
        return str;
      }

      let size = arr.length / 3;
      const forward = three(arr.slice(0, size));
      const backward = three(arr.slice(size * 2));

      return forward + ' '.repeat(size) + backward;
    }
    result.push(three(arr));
  }
  return result.join('\n');
}

console.log(solution(input));
