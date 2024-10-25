var minChanges = function (s) {
  // 변경 횟수를 저장할 변수 초기화
  let changes = 0;

  // 문자열을 두 문자씩 순회
  for (let i = 0; i < s.length; i += 2) {
    // 현재 부분 문자열에서 첫 번째 문자와 두 번째 문자가 다른 경우
    if (s[i] !== s[i + 1]) {
      // 한 문자만 변경하면 두 문자를 같게 만들 수 있으니 변경 횟수를 1 증가
      changes++;
    }
    // 같은 경우에는 변경할 필요가 없으므로 아무 조치도 취하지 않음
  }

  // 최소 변경 횟수 반환
  return changes;
};
