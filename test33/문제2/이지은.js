const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));


const [N] = input[0];
const [totalBudget] = input[2];
const budgets = input[1];

function calculation(limit) {
  return budgets.reduce((total, request) => {
    return total + Math.min(request, limit);
  }, 0);
}

function solution(N, target, budgets) {
  let start = 0;
  let end = Math.max(...budgets);
  let result = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    const calculateBudget = calculation(mid);

    if (calculateBudget <= totalBudget) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(result);
}

solution(N, totalBudget, budgets);
