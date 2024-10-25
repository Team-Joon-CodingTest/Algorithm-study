// 시간초과..
function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let sum = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        sum++;
      }
    }
    if (sum > limit) {
      answer += power;
    } else {
      answer += sum;
    }
  }
  return answer;
}
