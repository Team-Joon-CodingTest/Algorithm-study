const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, K] = input[0];
  const An = input[1];
  let count = 0;
  let answer = -1;
  let temp = Array(N).fill(0);

  function mergeSort(first, last) {
    if (first < last) {
      let mid = parseInt((first + last) / 2);
      mergeSort(first, mid);
      mergeSort(mid + 1, last);
      merge(first, mid, last);
    }
  }

  function merge(first, mid, last) {
    let i = first;
    let j = mid + 1;
    let t = 0;

    while (i <= mid && j <= last) {
      if (An[i] <= An[j]) {
        temp[t++] = An[i++];
      } else {
        temp[t++] = An[j++];
      }
    }
    while (i <= mid) temp[t++] = An[i++];
    while (j <= last) temp[t++] = An[j++];

    i = first;
    t = 0;
    while (i <= last) {
      count++;
      if (count === K) {
        answer = temp[t];
      }
      An[i++] = temp[t++];
    }
  }

  mergeSort(0, N - 1);
  return answer;
}

console.log(solution(input));
