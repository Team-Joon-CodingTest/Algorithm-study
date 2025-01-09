const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  let [N, KIM, IM] = input[0];
  let answer = 0;
  while (KIM !== IM) {
    KIM = Math.ceil(KIM / 2);
    IM = Math.ceil(IM / 2);
    answer++;
  }
  return answer;
}

console.log(solution(input));
