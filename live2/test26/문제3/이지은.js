const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const N = input[0][0];
  const arr = input.slice(1);
  let difference = Infinity;

  function food(n, s, b, used) {
    if (n === N) {
      if (used) {
        difference = Math.min(difference, Math.abs(s - b));
      }
      return;
    }
    //현재 재료를 사용하지 않는 경우
    food(n + 1, s, b, used);

    //현재 재료를 사용하는 경우
    const [sour, bitter] = arr[n];
    food(n + 1, s * sour, b + bitter, true);
  }

  food(0, 1, 0, false);
  return difference;
}

console.log(solution(input));
