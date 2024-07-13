function solution(k, m, score) {
  var answer = 0;
  score.sort((a, b) => b - a);
  console.log(score);

  for (let i = 0; i <= score.length - m; i += m) {
    let min = score[i + m - 1];
    answer += min * m;
  }

  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
