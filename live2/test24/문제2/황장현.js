const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(input) {
  const [N, M] = input;
  let result = [];
  let isVisit = Array(M).fill(false);

  const numArray = Array.from({ length: N }, (_, i) => i + 1);

  function makePermutation(arr, visited) {
    if (arr.length === M) {
      result.push(arr.join(' '));
      return;
    }

    for (let i = 0; i < N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        arr.push(numArray[i]);
        makePermutation(arr, visited);
        arr.pop();
        visited[i] = false;
      }
    }
  }

  makePermutation([], isVisit);
  return result.join('\n');
}

console.log(solution(input));
