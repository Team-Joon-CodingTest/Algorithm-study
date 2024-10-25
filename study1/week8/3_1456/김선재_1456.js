/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let maxCount = 0;
  let count = 0;

  // 최초 윈도우에서의 모음 개수
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      count++;
    }
  }

  maxCount = count;

  // 윈도우를 한 칸씩 우측으로 이동
  // 왼쪽과 오른쪽을 확인하여 count +-
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i - k])) {
      count--;
    }
    if (vowels.has(s[i])) {
      count++;
    }
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
};
