var isValid = function (s) {
  // 스택으로 사용할 빈 배열 생성
  const stack = [];

  // 괄호 짝을 매칭하기 위한 객체
  const brackets = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  // 문자열 순회
  for (let char of s) {
    // 현재 문자가 닫는 괄호인 경우
    if (brackets[char]) {
      // 스택에서 팝한 요소가 짝이 맞는 여는 괄호와 같은지,
      // 또는 스택이 비어 있는 경우(닫는 괄호가 먼저 나온 경우) false 반환
      if (stack.pop() !== brackets[char]) {
        return false;
      }
    } else {
      // 여는 괄호인 경우 스택에 푸시
      stack.push(char);
    }
  }

  // 모든 문자 처리 후 스택이 비어 있어야 유효한 괄호 문자열
  return stack.length === 0;
};
