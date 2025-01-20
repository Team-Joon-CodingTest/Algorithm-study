const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  let firstCase = true;
  const outputs = [];

  for (let i = 0; i < input.length - 1; i++) {
    let k = input[i][0];
    let arr = input[i].slice(1);
    const result = [];
    const temp = [];

    function recursive(depth, start) {
      if (depth === 6) {
        result.push(temp.join(' '));
        return;
      }

      for (let i = start; i < k; i++) {
        const curr = arr[i];
        temp.push(curr);
        recursive(depth + 1, i + 1);
        temp.pop();
      }
    }

    recursive(0, 0);

    if (!firstCase) outputs.push('');
    firstCase = false;

    outputs.push(...result);
  }
  return outputs.join('\n');
}
console.log(solution(input));
