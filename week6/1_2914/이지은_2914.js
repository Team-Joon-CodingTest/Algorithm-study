/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function (s) {
  let changes = 0;

  for (let i = 0; i < s.length; i += 2) {
    // 문자열의 현재 문자와 다음 문자가 같지 않으면 변경이 필요함
    if (s[i] !== s[i + 1]) {
      changes++;
    }
  }

  return changes;
};
