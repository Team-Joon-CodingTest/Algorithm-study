function count(mid, songs) {
  let sum = 0,
    cnt = 1;
  for (x of songs) {
    if (sum + x > mid) {
      cnt++;
      sum = x;
    } else sum += x;
  }
  return cnt;
}
function solution(m, songs) {
  let start = Math.max(...songs);
  let end = songs.reduce((a, b) => a + b, 0);

  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (count(mid, songs) <= m) {
      answer = mid;
      end = mid - 1;
    } else start = mid + 1;
  }
  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(solution(3, arr));
