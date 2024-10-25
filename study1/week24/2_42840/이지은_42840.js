function solution(answers) {
  // 수포자들의 찍기 패턴
  const pattern1 = [1, 2, 3, 4, 5];
  const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 각 수포자가 맞힌 문제 수 초기화
  let score = [0, 0, 0];

  // 정답 배열을 순회하며 각 수포자의 정답 패턴과 비교
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === pattern1[i % pattern1.length]) score[0]++;
    if (answers[i] === pattern2[i % pattern2.length]) score[1]++;
    if (answers[i] === pattern3[i % pattern3.length]) score[2]++;
  }

  // 최대 점수 찾기
  const maxScore = Math.max(...score);

  // 최대 점수를 받은 수포자를 찾기
  const result = [];
  for (let i = 0; i < score.length; i++) {
    if (score[i] === maxScore) result.push(i + 1);
  }

  return result;
}

console.log(solution([1, 2, 3, 4, 5]));
