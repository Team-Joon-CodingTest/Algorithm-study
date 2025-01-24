function solution(n, left, right) {
  const result = [];

  for (let index = left; index <= right; index++) {
    const row = Math.floor(index / n);
    const col = index % n;
    result.push(Math.max(row + 1, col + 1));
  }

  return result;
}

console.log(solution(3, 2, 5));
