var isSubsequence = function (s, t) {
  let sIndex = 0,
    tIndex = 0;

  while (tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++; // s의 다음 문자로 이동
    }
    if (sIndex === s.length) {
      return true; // s의 모든 문자를 t에서 찾음
    }
    tIndex++; // t의 다음 문자로 이동
  }

  return sIndex === s.length; // s의 모든 문자를 t에서 찾았는지 검사
};
