const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function getWood(height) {
  return trees.reduce((total, tree) => {
    return total + (tree > height ? tree - height : 0);
  }, 0);
}
const [N, M] = input[0];
const trees = input[1];

function solution(N, M, trees) {
  let start = 0;
  let end = Math.max(...trees);
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    const wood = getWood(mid);

    if (wood >= M) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(end);
}

solution(N, M, trees);
