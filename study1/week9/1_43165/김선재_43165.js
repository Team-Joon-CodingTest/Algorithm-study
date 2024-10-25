function solution(numbers, target) {
  var answer = 0;

  dfs(0, 0);

  function dfs(idx, value) {
    if (idx < numbers.length) {
      dfs(idx + 1, value + numbers[idx]);
      dfs(idx + 1, value - numbers[idx]);
    } else {
      // 모든 수를 탐색하고 target과 일치하면 ++
      if (value === target) {
        answer++;
      }
    }
  }
  return answer;
}
