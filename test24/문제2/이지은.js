const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(input) {
  const [N, M] = input;

  let arr = [];
  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }

  let answer = [];
  function permutation(tempArr, used) {
    if (tempArr.length === M) {
      answer.push([...tempArr]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (!used[i]) {
        used[i] = true;
        permutation([...tempArr, arr[i]], used);
        used[i] = false;
      }
    }
  }

  permutation([], Array(N).fill(false));
  return answer;
}

console.log(
  solution(input)
    .map((arr) => arr.join(' '))
    .join('\n')
);
