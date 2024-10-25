const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let index = 0;
const T = parseInt(input[index++]);

function countPairs(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let count = 0;

  for (let a of A) {
    let left = 0,
      right = B.length;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (B[mid] < a) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    count += left;
  }

  return count;
}

for (let t = 0; t < T; t++) {
  const [N, M] = input[index++].split(' ').map(Number);
  const A = input[index++].split(' ').map(Number);
  const B = input[index++].split(' ').map(Number);

  console.log(countPairs(A, B));
}
