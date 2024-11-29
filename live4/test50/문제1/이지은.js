const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');
function solution(input) {
  const [s, p] = input[0].split(' ').map(Number);
  const DNA = input[1];
  const condition = input[2].split(' ').map(Number);

  let answer = 0;

  const arr = Array(4).fill(0);
  const map = { A: 0, C: 1, G: 2, T: 3 };

  for (let i = 0; i < p; i++) {
    const index = map[DNA[i]];
    arr[index]++;
  }

  if (checkCondition(arr, condition)) answer++;

  for (let start = 1; start <= s - p; start++) {
    const removeIndex = map[DNA[start - 1]];
    const addIndex = map[DNA[start + p - 1]];

    arr[removeIndex]--;
    arr[addIndex]++;

    if (checkCondition(arr, condition)) answer++;
  }

  return answer;

  function checkCondition(arr, condition) {
    for (let i = 0; i < 4; i++) {
      if (arr[i] < condition[i]) return false;
    }
    return true;
  }
}

const result = solution(input);
console.log(result);
