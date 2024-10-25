const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, M] = input[0];
  const arr = input.slice(1);

  let count = 0;

  function calculate(day, currentSum, prevLocation) {
    if (day === N) {
      if (currentSum >= M) {
        count++;
      }
      return;
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 2; j++) {
        let newSum = currentSum;

        if (prevLocation === i) {
          newSum += arr[j][i] / 2;
        } else {
          newSum += arr[j][i];
        }

        // 다음 날로 넘어가면서, 오늘 선택한 장소를 전날 장소로 넘겨줌
        calculate(day + 1, newSum, i);
      }
    }
  }
  calculate(0, 0, -1);
  return count;
}

console.log(solution(input));
