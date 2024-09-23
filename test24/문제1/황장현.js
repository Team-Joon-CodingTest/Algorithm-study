const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const GLottoNum = 6;
  let result = [];

  for (let i = 0; i < input.length; i++) {
    const testCase = input[i];
    if (testCase[0] === 0) {
      continue;
    }
    const k = testCase[0];
    const S = testCase.slice(1);
    makeCombination([], 0, S);
    result.push('');
  }

  function makeCombination(arr, start, S) {
    if (arr.length === GLottoNum) {
      result.push(arr.join(' '));
      return;
    }

    for (let i = start; i < S.length; i++) {
      arr.push(S[i]);
      makeCombination(arr, i + 1, S);
      arr.pop();
    }
  }

  console.log(result.join('\n'));
}

solution(input);
