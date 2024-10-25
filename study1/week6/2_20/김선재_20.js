/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 스택 이용
  let stack = [];

  let pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);

    // key에 해당된다면 stack에 넣음
    if (char in pairs) {
      stack.push(char);
    } else {
      // 스택이 비어있거나(이미 쌍을 못맞춤) 순서가 맞지 않으면 false
      if (stack.length === 0 || pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }

  // 스택이 비어있는지 확인
  return stack.length === 0;
};
