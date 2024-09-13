const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let count = 0;
let answer = -1;

function merge_sort(A, p, r) {
  if (p < r) {
    const q = Math.floor((p + r) / 2);
    merge_sort(A, p, q);
    merge_sort(A, q + 1, r);
    merge(A, p, q, r);
  }
}

function merge(A, p, q, r) {
  let i = p;
  let j = q + 1;
  let tmp = [];
  let t = 0;

  while (i <= q && j <= r) {
    if (A[i] <= A[j]) {
      tmp[t++] = A[i++];
    } else {
      tmp[t++] = A[j++];
    }
  }

  while (i <= q) {
    tmp[t++] = A[i++];
  }

  while (j <= r) {
    tmp[t++] = A[j++];
  }

  for (let k = 0; k < t; k++) {
    A[p + k] = tmp[k];
    count++;
    if (count === K) {
      answer = A[p + k];
    }
  }
}

merge_sort(A, 0, N - 1);

console.log(answer);
