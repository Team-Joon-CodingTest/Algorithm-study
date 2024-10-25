/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length === 0) return true;

  // t포인터를 이동
  let i = 0;
  for (let j = 0; j < t.length; j++) {
    // 일치하면 s의 포인터를 이동
    if (s.charAt(i) === t.charAt(j)) {
      i++;

      if (i === s.length) return true;
    }
  }

  return false;
};
