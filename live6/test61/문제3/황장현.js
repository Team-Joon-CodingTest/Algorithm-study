function solution(citations) {
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= i) return i;
  }
  return citations.length;
}

console.log(solution([3, 3, 3, 4]));
// console.log(solution([10, 9, 8, 4, 3, 1]));
// console.log(solution([4, 0, 6, 1, 5]));
// console.log(solution([1, 2, 3, 4, 5]));
// console.log(solution([0, 0, 0, 0]));
// console.log(solution([10, 8, 5, 4, 3]));
// console.log(solution([5, 6, 7, 8, 9]));
