const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  let [N, K] = input[0];
  const A = input[1];
  let result = 0;

  function mergeSort(A, p, r) {
    if (p < r) {
      let q = Math.floor((p + r) / 2);
      mergeSort(A, p, q);
      mergeSort(A, q + 1, r);
      merge(A, p, q, r);
    }
  }

  function merge(A, p, q, r) {
    let tmp = [];
    let i = p,
      j = q + 1,
      t = 0;

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

    i = p;
    t = 0;
    while (i <= r) {
      if (--K === 0) {
        result = tmp[t];
      }
      A[i++] = tmp[t++];
    }
  }

  mergeSort(A, 0, A.length - 1);
  return result;
}

console.log(solution(input));
