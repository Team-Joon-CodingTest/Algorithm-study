//마구간 n개
// 말 c마리
// [1,2,8,4,9]

function count(stable, dist) {
  let cnt = 1,
    lastPosition = stable[0];

  for (let i = 0; i < stable.length; i++) {
    if (stable[i] - lastPosition >= dist) {
      cnt++;
      lastPosition = stable[i];
    }
  }
  return cnt;
}

function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let start = 1,
    mid,
    end = stable[stable.length - 1];

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      start = mid + 1;
    } else end = mid - 1;
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
