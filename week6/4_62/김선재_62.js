/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let ans = 0;

  ans = factorial(m - 1 + n - 1) / (factorial(m - 1) * factorial(n - 1));

  return ans;
};

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  else {
    return n * factorial(n - 1);
  }
}
