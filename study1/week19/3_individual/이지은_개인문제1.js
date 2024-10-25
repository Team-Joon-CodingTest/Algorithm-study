function solution(arr) {
  let answer = 0;
  Left = [1, 2, 3, 4, 5];
  dy = [1, 2, 3, 4, 5];

  for (let x = 0; x < arr.length; x++) {
    let xSum = 0,
      ySum = 0;
    for (let y = 0; y < arr.length; y++) {
      xSum += arr[x][y];
      ySum += arr[y][x];
    }
    answer = Math.max(answer, xSum, ySum);
  }

  let lSum = 0,
    rSum = 0;

  for (let x = 0; x < arr.length; x++) {
    lSum += arr[x][x];
    rSum += arr[x][arr.length - x - 1];
  }
  answer = Math.max(answer, lSum, rSum);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
