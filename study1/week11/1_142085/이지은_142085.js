function solution(n, k, enemy) {
  let left = 0;
  let right = enemy.length;

  const getSum = (index) =>
    index + 1 - k >= 0
      ? enemy
          .slice(0, index + 1)
          .sort((a, b) => a - b)
          .slice(0, index + 1 - k)
          .reduce((acc, cur) => acc + cur, 0)
      : 0;

  while (true) {
    if (right - left === 1) return right;

    const mid = Math.floor((left + right) / 2);
    const sum = getSum(mid);

    if (n >= sum) {
      left = mid;
    } else {
      right = mid;
    }
  }
}
