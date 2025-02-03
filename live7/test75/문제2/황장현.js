const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const N = input[0][0];
  let 최솟값 = Infinity;
  const map = input.slice(1);

  function 재귀(index, 신맛, 쓴맛, used) {
    if (used > 0) 최솟값 = Math.min(최솟값, Math.abs(신맛 - 쓴맛));

    if (index === N) return;

    재귀(index + 1, 신맛 * map[index][0], 쓴맛 + map[index][1], used + 1);
    재귀(index + 1, 신맛, 쓴맛, used);
  }

  재귀(0, 1, 0, 0);
  console.log(최솟값);
}

console.log(solution(input));
