function solution(d, budget) {
  var answer = 0;
  d.sort((a, b) => a - b);

  for (x of d) {
    if ((budget -= x) < 0) break;
    answer++;
  }
  return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));
