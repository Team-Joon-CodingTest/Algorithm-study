function solution(target, arr) {
  arr.sort((a, b) => a - b);

  let start = 0;
  let mid;
  let end = arr.length - 1;

  while (start <= end) {
    mid = parseInt((start + end) / 2);

    if (arr[mid] === target) {
      return mid + 1;
    } else {
      if (arr[mid] < target) {
        start = mid + 1;
      }
      if (arr[mid] > target) {
        end = mid - 1;
      }
    }
  }
  return mid;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
