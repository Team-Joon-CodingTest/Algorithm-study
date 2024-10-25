var isSubsequence = function (s, t) {
  let sIndex = 0;
  let tIndex = 0;

  // `t`를 순회하면서 `s`의 문자를 찾음
  while (tIndex < t.length && sIndex < s.length) {
    if (s[sIndex] === t[tIndex]) {
      // 일치하는 문자를 찾으면 다음 문자로 이동
      sIndex++;
    }
    tIndex++;
  }

  return sIndex === s.length;
};
