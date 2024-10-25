const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const N = input[0][0];
const nums = input[1];
const op = input[2];

let max = -1000000000;
let min = 1000000000;

function devide(a, b) {
  let mul = 1;
  if (a < 0) mul = -1;
  return Math.floor(Math.abs(a) / b) * mul;
}

function dfs(n, res) {
  if (n === N) {
    max = Math.max(max, res);
    min = Math.min(min, res);
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (op[i] > 0) {
      op[i]--;
      if (i === 0) {
        dfs(n + 1, res + nums[n]);
      } else if (i === 1) {
        dfs(n + 1, res - nums[n]);
      } else if (i === 2) {
        dfs(n + 1, res * nums[n]);
      } else if (i === 3 && nums[n] !== 0) {
        dfs(n + 1, devide(res, nums[n]));
      }
      op[i]++;
    }
  }
}

dfs(1, nums[0]);

// 음수 0 처리
if (max === -0) max = 0;
if (min === -0) min = 0;

console.log(max);
console.log(min);
