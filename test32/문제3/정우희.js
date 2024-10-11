const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [K, N] = input[0].split(' ').map(Number);
const lanCables = input.slice(1).map(Number);

function countCables(cables, length) {
  return cables.reduce((total, cable) => total + Math.floor(cable / length), 0);
}

function solution(K, N, lanCables) {
  let left = 1;
  let right = Math.max(...lanCables);
  let result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const numOfCables = countCables(lanCables, mid);

    if (numOfCables >= N) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(result);
}

solution(K, N, lanCables);
