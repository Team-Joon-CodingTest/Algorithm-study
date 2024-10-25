function solution(numbers, target) {
  var answer = 0;

  function dfs(index, sum) {
    // 모든 숫자를 사용했을 때, 합계가 타겟 넘버와 같으면 카운트 증가
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    // 현재 숫자를 더하는 경우
    dfs(index + 1, sum + numbers[index]);
    // 현재 숫자를 빼는 경우
    dfs(index + 1, sum - numbers[index]);
  }

  dfs(0, 0); // DFS 탐색 시작

  return answer;
}
