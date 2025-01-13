const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function combination(n, r) {
  if (r > n || r < 0) return 0; 
  r = Math.min(r, n - r);
  let result = 1;
  for (let i = 0; i < r; i++) {
    result *= n - i;
    result /= i + 1;
  }
  return result;
}

function solution(input) {
  const [n, m] = input;

  if (n > m) return 0; 

  const remainingFruits = m - n; 
  const result = combination(remainingFruits + n - 1, n - 1); 
  return result;
}

console.log(solution(input));
