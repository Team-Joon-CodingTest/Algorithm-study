// 계단을 오르는 방법의 수를 계산하는 함수
var climbStairs = function (n) {
  // 계단이 1개 또는 2개일 때의 방법의 수를 초기화
  if (n <= 2) return n;

  // 두 변수를 사용하여 피보나치 수열을 계산 (공간 복잡도 최적화)
  let oneStepBefore = 2; // 'n-1'계단에 도달하는 방법의 수
  let twoStepsBefore = 1; // 'n-2'계단에 도달하는 방법의 수
  let allWays = 0; // 'n'계단에 도달하는 방법의 수

  // 3계단부터 n계단까지 방법의 수를 계산
  for (let i = 3; i <= n; i++) {
    allWays = oneStepBefore + twoStepsBefore;
    twoStepsBefore = oneStepBefore;
    oneStepBefore = allWays;
  }

  // 'n'계단에 도달하는 방법의 수 반환
  return allWays;
};
