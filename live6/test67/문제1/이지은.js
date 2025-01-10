const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((a) => a.split(' ').map(Number));

function solution(input) {
  const [n, k] = input[0];
  const arr = input[1];

  let count = 0;
  let result = -1;

  function merge_sort(arr, start, end) {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);

    merge_sort(arr, start, mid);
    merge_sort(arr, mid + 1, end);

    merge(arr, start, mid, end);
  }

  function merge(arr, start, mid, end) {
    const temp = [];
    let i = start;
    let j = mid + 1;

    while (i <= mid && j <= end) {
      if (arr[i] <= arr[j]) {
        temp.push(arr[i]);
        counting(arr[i]);
        i++;
      } else {
        temp.push(arr[j]);
        counting(arr[j]);
        j++;
      }
    }

    while (i <= mid) {
      temp.push(arr[i]);
      counting(arr[i]);
      i++;
    }

    while (j <= end) {
      temp.push(arr[j]);
      counting(arr[j]);
      j++;
    }

    for (let t = 0; t < temp.length; t++) {
      arr[start + t] = temp[t];
    }
  }

  function counting(value) {
    count++;
    if (count === k) {
      result = value;
    }
  }

  merge_sort(arr, 0, n - 1);

  return result;
}

console.log(solution(input));
