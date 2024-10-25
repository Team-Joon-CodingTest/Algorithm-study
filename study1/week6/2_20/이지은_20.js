/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 빈 문자열인 경우 유효하다고 간주
  if (s.length === 0) {
    return true;
  }

  // 스택으로 사용할 배열
  const stack = [];

  // 괄호 쌍을 매핑하기 위한 객체
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  // 문자열 순회
  for (let char of s) {
    // 여는 괄호인 경우 스택에 추가
    if (brackets[char]) {
      stack.push(char);
    } else {
      // 닫는 괄호인 경우 스택에서 하나를 꺼내서 매칭 확인
      const last = stack.pop();
      if (brackets[last] !== char) {
        // 매칭되지 않으면 유효하지 않음
        return false;
      }
    }
  }

  // 스택이 비어있어야 모든 괄호가 올바르게 닫힌 것
  return stack.length === 0;
};
