/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function (s) {
  let count = 0;
  // 앞에서 2개씩 탐색하여 두문자가 다르면 count++
  for (let i = 0; i + 1 < s.length; i += 2) {
    if (s[i] != s[i + 1]) {
      count++;
    }
  }

  return count;
};
