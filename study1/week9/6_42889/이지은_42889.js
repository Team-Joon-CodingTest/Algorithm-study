function solution(N, stages) {
  var answer = [];
  var stageFailureRate = [];

  for (let i = 1; i <= N; i++) {
    // 해당 스테이지에 있는 사람들의 수
    let playersAtStage = stages.filter((stage) => stage === i).length;

    //해당 스테이지를 거쳐간 사람들의 수 (현재 해당 스테이지에 있는 사람들도 포함, 분모가 됨)
    let playersReachedStage = stages.filter((stage) => stage >= i).length;

    // 실패율 구하기
    let failureRate =
      playersReachedStage === 0 ? 0 : playersAtStage / playersReachedStage;
    
    stageFailureRate.push([i, failureRate]);
  }

  stageFailureRate.sort((a, b) => {
    if (b[1] === a[1]) {
      return a[0] - b[0]; // 실패율이 같을 경우, 스테이지 번호가 작은 순으로 정렬
    }
    return b[1] - a[1]; // 실패율이 높은 순으로 정렬
  });

  // 각 스테이지 번호만 추출하여 결과 반환
  answer = stageFailureRate.map((item) => item[0]);
  return answer;
}
