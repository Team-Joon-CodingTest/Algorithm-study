function solution(N, stages) {
  const answer = [];
  const failureRates = [];

  // 각 스테이지별 실패율 계산
  for (let i = 1; i <= N; i++) {
    const usersReachedStage = stages.filter((stage) => stage >= i).length;
    const usersFailedStage = stages.filter((stage) => stage === i).length;

    if (usersReachedStage === 0) {
      failureRates.push({ stage: i, rate: 0 });
    } else {
      failureRates.push({
        stage: i,
        rate: usersFailedStage / usersReachedStage,
      });
    }
  }

  // 실패율을 내림차순으로 정렬
  failureRates.sort((a, b) => {
    if (a.rate === b.rate) {
      return a.stage - b.stage;
    } else {
      return b.rate - a.rate;
    }
  });

  // 정렬된 실패율의 스테이지 번호를 결과에 추가
  for (let i = 0; i < failureRates.length; i++) {
    answer.push(failureRates[i].stage);
  }

  return answer;
}
